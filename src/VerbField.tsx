import { TextInputField } from "evergreen-ui"
import React from "react"
import {Verb, VerbFields} from "./verbs";

export interface Props {
    verb: Verb;
    field: VerbFields;
    altCorrectValue?: string;
    readonly: boolean;
    showError: boolean;
    validate: (v: Verb, field: VerbFields, inputValue: string) => boolean
}

export function VerbField(props: Props) {
    const [state, setState] = React.useState('');
    const {altCorrectValue, readonly, showError, validate, field, verb} = props;
    const correctValue = verb[field];

    if(showError && !readonly) {
        const correct = altCorrectValue ? `${correctValue} o ${altCorrectValue}` : correctValue;
        const isValid = validate(verb, field, state);
        const validationMessage = isValid ? null : `Il valore corretto è ${correct}`;
        return <TextInputField
            onChange={(e: any) => {
                setState(e.target.value);
            }}
            label="&nbsp;"
            value={readonly ? correctValue : state}
            disabled={readonly}
            required={!readonly}
            validationMessage={validationMessage}
            isInvalid={!isValid}
        />
    }
    return <TextInputField
        onChange={(e: any) => {
            setState(e.target.value);
        }}
        label="&nbsp;"
        value={readonly ? correctValue : state}
        disabled={readonly}
        required={!readonly}
        />
}