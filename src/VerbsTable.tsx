import {Table} from 'evergreen-ui';
import {TestVerb, Verb, VerbFields} from './verbs';
import {VerbField} from "./VerbField";
import React from "react";

interface Props {
    verbs: TestVerb[],
    showErrors: boolean;
    setUserInput: (s:string, f: VerbFields, v: TestVerb) => void
}

function isReadonly(v: Verb, field: keyof Verb) {
    return v.fixedField === field;
}

export function VerbsTable(props: Props) {
    return (
        <Table display="flex" flexDirection="column">
            <Table.Head>
                <Table.TextHeaderCell>Base form</Table.TextHeaderCell>
                <Table.TextHeaderCell>Simple Past</Table.TextHeaderCell>
                <Table.TextHeaderCell>Past participle</Table.TextHeaderCell>
                <Table.TextHeaderCell>Translation</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body flexGrow="1" alignSelf="auto">
                {props.verbs.map((verb) => {
                    return (
                        <Table.Row key={verb.base}>
                            <Table.TextCell><VerbField field="base"
                                                       verb={verb}
                                                       setUserInput={(s) => props.setUserInput(s, 'base', verb)}
                                                       readonly={isReadonly(verb, 'base')}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="simplePast"
                                                       verb={verb}
                                                       setUserInput={(s) => props.setUserInput(s, 'simplePast', verb)}
                                                       readonly={isReadonly(verb, 'simplePast')}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="pastParticiple"
                                                       verb={verb}
                                                       setUserInput={(s) => props.setUserInput(s, 'pastParticiple', verb)}
                                                       readonly={isReadonly(verb, 'pastParticiple')}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="translations"
                                                       verb={verb}
                                                       setUserInput={(s) => props.setUserInput(s, 'translations', verb)}
                                                       readonly={isReadonly(verb, 'translations')}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
}