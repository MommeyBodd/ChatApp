import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

const InviteModal = ({ userList }) => {
  const [open, setOpen] = useState(false);
  const [testVal, setVal] = useState(null);

  const [inviteForm, changeField] = useState({
    chatName: "",
    usersToInvite: userList,
    creatorId: ""
  });

  // console.log(inviteForm.usersToInvite);

  const handleClose = useCallback(() => {
    setOpen(false);
    changeField({ ...inviteForm, chatName: "" });
  }, []);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="add-button" onClick={handleClickOpen}>
        <AddIcon />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={100}
      >
        <DialogTitle id="form-dialog-title">Invite Modal</DialogTitle>
        <DialogContent>
          <DialogContentText>Invite Your Friends</DialogContentText>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={inviteForm.usersToInvite}
            getOptionLabel={option => option.userName}
            // defaultValue={[top100Films[13]]}
            filterSelectedOptions
            getOptionSelected={option => console.log(option)}
            renderInput={params => {
              // console.log(params);
              return (
                <TextField
                  {...params}
                  // onChange={event => console.log(event.target.value)}
                  // onMouseDown={event => console.log(event.target)}
                  variant="outlined"
                  label="filterSelectedOptions"
                  placeholder="Favorites"
                />
              );
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmit()}
            color="primary"
            disabled={inviteForm.chatName.trim() === ""}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

InviteModal.propTypes = {};

export default React.memo(InviteModal);
