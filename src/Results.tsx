import React from "react";
import {Button, Dialog, Pane} from "evergreen-ui";

export function Results() {
    const [isShown, setIsShown] = React.useState(false)

    return (
            <Dialog
                isShown={isShown}
                title="Dialog title"
                onCloseComplete={() => setIsShown(false)}
            >
                Dialog content
            </Dialog>

    )

}