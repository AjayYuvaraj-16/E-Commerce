import { Theme } from "@mui/material/styles";

import Accordion from "./Accordion";
import Button from "./Button";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Paper from "./Paper";
import TextField from "./TextField";
import Tooltip from "./Tooltip";
import Typography from "./Typography";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
        Accordion(theme),
        Button(theme),
        // Menu(theme),
        // MenuItem(theme),
        Paper(theme),
        TextField(theme),
        Tooltip(theme),
        Typography(theme),
    );
}
