import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { Buttons, Buttons2 } from "./components/buttons/Buttons";

import Checkboxes from "./components/checkbox/Checkbox";
import TextFieldComp from "./components/textfield/TextFieldComp";
import { flexbox } from "@mui/system";
import TypographyComp from "./components/typography/TypographyComp";
import Wrapper from "./components/wrapper/Wrapper";
import Cards from "./components/cards/Cards";
import AppBarComp from "./components/app-bar/AppBarComp";
import StyledButton from "./components/styled-button/StyledButton";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <>
            <Container maxWidth="sm">
                <AppBarComp />
                <StyledButton />
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create React App v5 example with styled-components
                    </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
                <Box
                    sx={{
                        marginBottom: 2,
                        textAlign: "right",
                    }}
                >
                    <Buttons />
                </Box>
                <Buttons2 />
            </Container>
            <Wrapper>
                <Checkboxes />
                <TextFieldComp />
                <TypographyComp />
                <Cards />
            </Wrapper>
        </>
    );
}
