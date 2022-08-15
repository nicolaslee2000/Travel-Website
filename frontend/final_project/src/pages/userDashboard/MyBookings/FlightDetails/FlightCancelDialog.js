import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FlightCancelDialog({ openDialog, setOpenDialog }) {
    return (
        <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpenDialog(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Confirm cancellation of your flight"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to cancel your flight? Once confirmed,
                    it is irreversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => setOpenDialog(false)}
                    variant="contained"
                    color="error"
                >
                    Confirm
                </Button>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
