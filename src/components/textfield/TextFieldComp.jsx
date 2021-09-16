import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

function TextFieldComp() {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Outlined Field"
                variant="outlined"
                type="email"
                placeholder="mui@mui.com"
            />
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="date"
                label="Date"
                hiddenLabel
            />

            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </div>
    );
}

export default TextFieldComp;
