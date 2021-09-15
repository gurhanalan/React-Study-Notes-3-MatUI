import { Grid, Paper } from "@mui/material";
import React from "react";

function Cards() {
    return (
        <div>
            <Grid container>
                {[0, 1, 2, 3].map((item) => (
                    <Grid item key={item} xs="6" sm="4" md="3">
                        <Paper style={{ height: 90 }} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Cards;
