import {Table} from 'evergreen-ui';
import {Verb, VerbFields} from './verbs';
import {VerbField} from "./VerbField";
import React from "react";

export interface VerbQuestion {
    verb: Verb;
    fixedField: VerbFields;
}

interface Props {
    verbs: Verb[],
    showErrors: boolean;
    validate: (v: Verb, field: VerbFields, inputValue: string) => boolean
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
                                                       readonly={isReadonly(verb, 'base')}
                                                       validate={props.validate}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="simplePast"
                                                       verb={verb}
                                                       readonly={isReadonly(verb, 'simplePast')}
                                                       validate={props.validate}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="pastParticiple"
                                                       verb={verb}
                                                       readonly={isReadonly(verb, 'pastParticiple')}
                                                       validate={props.validate}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                            <Table.TextCell><VerbField field="translation"
                                                       verb={verb}
                                                       altCorrectValue={verb.altTranslation}
                                                       readonly={isReadonly(verb, 'translation')}
                                                       validate={props.validate}
                                                       showError={props.showErrors}/>
                            </Table.TextCell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
}