import React from 'react';
import './App.css';
import {Button, Dialog, Pane} from 'evergreen-ui'
import {VerbsTable} from "./VerbsTable";
import {Verb, VERB_FIELDS, VerbFields, verbs} from "./verbs";
import {random, shuffle, slice} from 'lodash';


const shuffleVerbs = (n: number) => {
    const shuffled = slice(shuffle(verbs), 0, n);
    return shuffled.map(v => {
        const number = random(0, 3);
        v.fixedField = VERB_FIELDS[number];
        return v;
    });
}
const MAX_VERBS = 10;//verbs.length;
let selectedVerbs = shuffleVerbs(MAX_VERBS);
let countValid: Record<string, boolean> = {};
let invalidVerbs: Verb[] = [];

function App() {
    const [state, setState] = React.useState({showErrors: false, selectedVerbs});
    const [isShown, setIsShown] = React.useState(false)
    return (
        <Pane padding={16} background="tint2" borderRadius={3}>
            <VerbsTable verbs={state.selectedVerbs} showErrors={state.showErrors} validate={(verb: Verb, field: VerbFields, input: string) => {
                const correctValue = verb[field];
                let correct = correctValue.toLowerCase() === input?.toLowerCase().trim();
                if (verb.altTranslation && !correct) {
                    correct = verb.altTranslation.toLowerCase() === input?.toLowerCase().trim();
                }
                if (correct) {
                    countValid[`${field}_${correctValue}`] = true;
                } else {
                    if (invalidVerbs.indexOf(verb) === -1) {
                        invalidVerbs.push(verb);
                    }
                }
                return correct;
            }} />
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                <Button appearance="primary" onClick={() => {
                    countValid = {};
                    setState({...state, showErrors: true});
                    setImmediate(() => {
                        setIsShown(true);
                    });
                }} marginRight={16}>Invia</Button>
                <Button onClick={() => {
                    selectedVerbs = shuffleVerbs(MAX_VERBS);
                    countValid = {};
                    invalidVerbs.length = 0;
                    setState({selectedVerbs, showErrors: false});
                }}>Reset</Button>
                <Dialog
                    isShown={isShown}
                    title="Risultato"
                    onCloseComplete={() => setIsShown(false)}
                    onCancel={() => {
                        selectedVerbs = invalidVerbs;
                        countValid = {};
                        setState({selectedVerbs, showErrors: false});
                        setIsShown(false);
                    }}
                    cancelLabel="Riprova quelli sbagliati"
                    confirmLabel="OK"
                >
                    Numero di risposte esatte {Object.keys(countValid).length} su {selectedVerbs.length * 3}
                </Dialog>
            </Pane>
        </Pane>
    );
}

export default App;
