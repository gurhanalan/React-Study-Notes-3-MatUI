import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

function Buttons() {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<SaveIcon />}
            >
                SAVE
            </Button>

            <Button
                variant="contained"
                color="error"
                size="large"
                endIcon={<DeleteIcon />}
            >
                DELETE
            </Button>
        </div>
    );
}

export default Buttons;
