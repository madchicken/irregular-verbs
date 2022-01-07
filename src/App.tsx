import React from 'react';
import './App.css';
import {Button, Dialog, Pane} from 'evergreen-ui'
import {VerbsTable} from "./VerbsTable";
import {TestVerb, Verb, VERB_FIELDS, VerbFields, verbsMap} from "./verbs";
import {random, shuffle, slice} from 'lodash';
import {StartTest} from "./StartTest";
import party from "party-js";

const shuffleVerbs = (verbs: Verb[], n?: number) => {
    const shuffled = slice(shuffle(verbs), 0, Math.min(verbs.length, n || verbs.length));
    return shuffled.map(v => {
        return { ...v, input: { base: '', 'translations': '', 'pastParticiple': '', 'simplePast': ''}, fixedField: VERB_FIELDS[random(0, 3)]};
    });
}

interface State {
    showErrors: boolean;
    selectedVerbs: TestVerb[];
    size: number;
    invalidVerbs: Record<VerbFields, boolean>[];
    showResult: boolean;
}

export function validate(verb: TestVerb): Record<VerbFields, boolean> {
    return VERB_FIELDS.reduce((res, field) => {
        if(field !== verb.fixedField) {
            const correctValues = field === 'translations' ? verb[field] as string[] : [verb[field]];
            if(verb.input[field] !== undefined) {
                res[field] = !!correctValues.find(c => c === verb.input[field]?.toLowerCase().trim());
            } else {
                res[field] = true;
            }
        }
        return res;
    }, {} as Record<VerbFields, boolean>)
}

function App() {
    const [state, setState] = React.useState<State>({
        showErrors: false,
        selectedVerbs: [] as TestVerb[],
        size: 0,
        invalidVerbs: [],
        showResult: false,
    });
    if(state.selectedVerbs.length === 0) {
        return (
            <Pane width="100%" margin="auto" display="flex" justifyContent="center">
                <StartTest setsOfVerbs={verbsMap} onOk={(selectedVerbs, size) => setState({...state, selectedVerbs: shuffleVerbs(selectedVerbs, size), size})}/>
            </Pane>
        )
    }
    const resCount = state.invalidVerbs.reduce((c, x) => {
        Object.keys(x).forEach((k) => {
            // @ts-ignore
            if (x[k] !== undefined) {
                // @ts-ignore
                if (x[k]) {
                    c.valid++;
                } else {
                    c.invalid++;
                }
            }
        })
        return c;
    }, {
        invalid: 0,
        valid: 0
    });
    const reset = () => {
        setState({...state, selectedVerbs: [], showErrors: false, size: 0, invalidVerbs: [], showResult: false});
    };
    if(resCount.invalid === 0 && state.showResult) {
        // @ts-ignore
        party.confetti(document.getElementById('root'), {
            gravity: 800
        });
    }
    return (
        <Pane padding={16} background="blueTint" borderRadius={3}>
            <VerbsTable verbs={state.selectedVerbs} showErrors={state.showErrors} setUserInput={(s, f, v)=> {
                const res = state.selectedVerbs.find(verb => verb === v);
                if(res) {
                    res.input[f] = s;
                }
            }}/>
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                <Button appearance="primary" onClick={() => {
                    const invalidVerbs = state.selectedVerbs.map(verb => validate(verb));
                    setState({...state, invalidVerbs, showErrors: true, showResult: true});
                }} marginRight={16}>Invia</Button>
                <Button onClick={reset}>Reset</Button>
                <Dialog
                    isShown={state.showResult}
                    title="Risultato"
                    onConfirm={() => {
                        setState({...state, invalidVerbs: [], showErrors: false, showResult: false});
                        if(resCount.invalid === 0) {
                            reset();
                        }
                    }}
                    onCancel={() => {
                        setState({...state, showErrors: true, showResult: false});
                    }}
                    confirmLabel="OK"
                >
                    {resCount.invalid > 0 ?
                        (<Pane>Numero di risposte esatte {resCount.valid} su {resCount.valid + resCount.invalid}</Pane>) :
                        (<Pane>Esercizio corretto!! 🎉 </Pane>)
                    }
                </Dialog>
            </Pane>
        </Pane>
    );
}

export default App;
