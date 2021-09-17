import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: "red",
        color: (props) => props.color || "yellow",
        padding: "1rem",
    },
});

function StyledButton() {
    const classes = useStyles();
    // const classes = useStyles({ color: "green" });
    return (
        <div>
            <Button className={classes.root}>
                {" "}
                Styled Button with makeStyles
            </Button>
        </div>
    );
}

export default StyledButton;
