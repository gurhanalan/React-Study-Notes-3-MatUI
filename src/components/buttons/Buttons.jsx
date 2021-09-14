import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green, grey, orange } from "@mui/material/colors";

function Buttons() {
    return (
        <ButtonGroup variant="contained" size="large">
            <Button color="secondary" startIcon={<SaveIcon />}>
                SAVE
            </Button>

            <Button color="error" endIcon={<DeleteIcon />}>
                DELETE
            </Button>
        </ButtonGroup>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
            contrastText: grey[50],
        },
        secondary: orange,
    },
});

function Buttons2() {
    return (
        <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained" size="large">
                <Button color="secondary" startIcon={<SaveIcon />}>
                    SAVE
                </Button>

                <Button color="primary" endIcon={<DeleteIcon />}>
                    DELETE
                </Button>
            </ButtonGroup>
        </ThemeProvider>
    );
}

export { Buttons, Buttons2 };
