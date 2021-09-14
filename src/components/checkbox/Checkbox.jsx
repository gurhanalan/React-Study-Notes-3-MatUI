import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalWifiStatusbarConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4";

function Checkboxes() {
    return (
        <div>
            <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Label"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        icon={<SignalWifiStatusbarConnectedNoInternet4Icon />}
                        checkedIcon={<WifiIcon />}
                    />
                }
                label="Wifi"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        color="primary"
                        icon={<WifiIcon />}
                        checkedIcon={<WifiIcon />}
                    />
                }
                label="Wifi 2"
            />
        </div>
    );
}

export default Checkboxes;
