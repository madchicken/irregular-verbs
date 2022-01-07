import { TextInputField } from "evergreen-ui"
import React from "react"
import {TestVerb, VerbFields} from "./verbs";
import {first, isArray} from "lodash";
import {validate} from "./App";

export interface Props {
    verb: TestVerb;
    field: VerbFields;
    readonly: boolean;
    showError: boolean;
    setUserInput: (s: string, f: VerbFields) => void;
}

function getValue(verb: TestVerb, field: VerbFields): string {
    return first(field === 'translations' ? verb[field] as string[] : [verb[field]]) || '';
}

export function VerbField(props: Props) {
    const [state, setState] = React.useState<string>(props.verb.input[props.verb.fixedField] || '');
    const {readonly, showError, field, verb} = props;
    const correctValue = getValue(verb, field);

    if(showError && !readonly) {
        const correct = isArray(correctValue) ? correctValue.join(' o ') : correctValue;
        const isValid = isArray(correctValue) ? correctValue.find(s => s === state?.toLowerCase()) : correctValue === state;
        const validationMessage = isValid ? null : `Il valore corretto è *${correct}*`;
        return <TextInputField
            onChange={(e: any) => {
                setState(e.target.value);
                props.setUserInput(e.target.value, field);
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
            props.setUserInput(e.target.value, field);
        }}
        label="&nbsp;"
        value={readonly ? correctValue : state}
        disabled={readonly}
        required={!readonly}
        />
}