import {Table} from 'evergreen-ui';
import {Verb} from './verbs';
import {VerbField} from "./VerbField";
import React from "react";

interface Props {
    verbs: Verb[],
    showErrors: boolean;
    isValid: (s: string) => void
}

function isReadonly(v: Verb, field: keyof Verb) {
    return v.fixedField === field;
}

export function VerbsTable(props: Props) {
    return <Table width="100%">
        <Table.Head>
            <Table.TextHeaderCell>Base form</Table.TextHeaderCell>
            <Table.TextHeaderCell>Simple Past</Table.TextHeaderCell>
            <Table.TextHeaderCell>Past participle</Table.TextHeaderCell>
            <Table.TextHeaderCell>Translation</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body width="100%">
            {props.verbs.map((verb) => {
                return (
                    <Table.Row key={verb.base}>
                        <Table.TextCell><VerbField correctValue={verb.base}
                                                   readonly={isReadonly(verb, 'base')}
                                                   isValid={props.isValid}
                                                   showError={props.showErrors}/>
                        </Table.TextCell>
                        <Table.TextCell><VerbField correctValue={verb.simplePast}
                                                   readonly={isReadonly(verb, 'simplePast')}
                                                   isValid={props.isValid}
                                                   showError={props.showErrors}/>
                        </Table.TextCell>
                        <Table.TextCell><VerbField correctValue={verb.pastParticiple}
                                                   readonly={isReadonly(verb, 'pastParticiple')}
                                                   isValid={props.isValid}
                                                   showError={props.showErrors}/>
                        </Table.TextCell>
                        <Table.TextCell><VerbField correctValue={verb.translation}
                                                   readonly={isReadonly(verb, 'translation')}
                                                   isValid={props.isValid}
                                                   showError={props.showErrors}/>
                        </Table.TextCell>
                    </Table.Row>
                );
            })}
        </Table.Body>
    </Table>;
}