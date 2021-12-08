import { TextInputField } from "evergreen-ui"
import React from "react"

export interface Props {
    correctValue: string;
    readonly: boolean;
    showError: boolean;
    isValid: (s: string) => void
}

export function VerbField(props: Props) {
    const [state, setState] = React.useState('');

    function checkIsValid() {
        return props.correctValue.toLowerCase() !== state?.toLowerCase().trim();
    }

    if(props.showError) {
        const validationMessage = checkIsValid() ? `Il valore corretto è ${props.correctValue}` : null;
        const isInvalid = props.showError && !props.readonly ? !!validationMessage : false;
        if(!isInvalid && !props.readonly) {
            props.isValid(props.correctValue);
        }
        return <TextInputField
            onChange={(e: any) => {
                setState(e.target.value);
            }}
            label="&nbsp;"
            value={props.readonly ? props.correctValue : state}
            disabled={props.readonly}
            required={!props.readonly}
            validationMessage={props.showError && !props.readonly ? validationMessage : null}
            isInvalid={isInvalid}
        />
    }
    return <TextInputField
        onChange={(e: any) => {
            setState(e.target.value);
        }}
        label="&nbsp;"
        value={props.readonly ? props.correctValue : state}
        disabled={props.readonly}
        required={!props.readonly}
        />
}