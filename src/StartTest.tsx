import {Verb, VerbsSet} from "./verbs";
import {Button, Card, Heading, majorScale, Pane, SelectField, TextInputField} from "evergreen-ui";

interface Props {
    setsOfVerbs: VerbsSet;
    onOk: (selectedSet: Verb[], size: number) => void;
}

export function StartTest(props: Props) {
    const items = Object.keys(props.setsOfVerbs);
    let selected: string = items[0];
    let size = 0;
    return (
        <Card display="flex" flexDirection="column" width="600px" justifyContent="center">
            <Heading marginBottom={majorScale(1)} size={900}>Scegli il tuo test</Heading>

            <Pane borderRadius="5" elevation={2} display="flex" flexDirection="column"  padding={majorScale(2)}>
                <Pane width="100%" marginBottom={majorScale(1)}>
                <SelectField
                    label="Verbi da utilizzare per il test"
                    onChange={e => selected = e.target.value}
                    placeholder="Seleziona i verbi per il test"
                >
                    {items.map(i => (<option value={i} key={i}>{i}</option> ))}
                </SelectField>
                </Pane>
                <Pane width="100%" marginBottom={majorScale(1)}>
                    <TextInputField
                        type="number"
                        label="Quantità di verbi"
                        onChange={(e: any) => size = parseInt(e.target.value)}
                        placeholder="Seleziona quanti verbi vuoi nel test (lascia vuoto per tutti)"
                    />
                </Pane>
                <Button appearance="primary" height={majorScale(5)} onClick={() => props.onOk(props.setsOfVerbs[selected], size || props.setsOfVerbs[selected].length)}>Inizia</Button>
            </Pane>
        </Card>
    )
}