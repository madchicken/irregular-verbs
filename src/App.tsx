import React from 'react';
import './App.css';
import {Button, Dialog, Pane} from 'evergreen-ui'
import {VerbsTable} from "./VerbsTable";
import {VERB_FIELDS, verbs} from "./verbs";
import { shuffle, slice, random } from 'lodash';


const shuffleVerbs = (n: number) => {
    const shuffled = shuffle(slice(verbs, 0, n));
    return shuffled.map(v => {
        const number = random(0, 3);
        v.fixedField = VERB_FIELDS[number];
        return v;
    });
}
const MAX_VERBS = verbs.length;
let selectedVerbs = shuffleVerbs(MAX_VERBS);
let countValid = {} as any;


function App() {
    const [state, setState] = React.useState({showErrors: false, selectedVerbs });
    const [isShown, setIsShown] = React.useState(false)
    return (
        <div className="App">
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                <VerbsTable verbs={state.selectedVerbs} showErrors={state.showErrors} isValid={(s: string) => {
                    countValid[s] = true;
                }}/>
            </Pane>
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
                    setState({selectedVerbs, showErrors: false});
                    countValid = {};
                }}>Reset</Button>
                <Dialog
                    isShown={isShown}
                    title="Risultato"
                    onCloseComplete={() => setIsShown(false)}
                    hasCancel={false}
                    confirmLabel="OK"
                >
                    Numero di risposte esatte {Object.keys(countValid).length} su {selectedVerbs.length * 3}
                </Dialog>
            </Pane>
        </div>
    );
}

export default App;
