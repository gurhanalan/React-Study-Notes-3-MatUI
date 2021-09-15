import { Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        h2: {
            fontSize: 24,
            padding: "2rem",
            color: "grey",
        },

        subtitle1: {
            marginBottom: 5,
        },
    },
});

function TypographyComp() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h2">Typhograpgy here</Typography>
                <Typography variant="subtitle1" color="secondary">
                    Typhograpgy here
                </Typography>
            </ThemeProvider>
        </div>
    );
}

export default TypographyComp;
