import { Container } from "@mui/material";
import React from "react";

function Wrapper({ children }) {
    return <Container maxWidth="md">{children}</Container>;
}

export default Wrapper;
