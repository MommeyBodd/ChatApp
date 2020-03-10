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
import AddIcon from "@material-ui/icons/Add";

const InviteModal = ({ userList, chatId, onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [inviteForm, changeField] = useState({
    chatId: chatId,
    usersToInvite: []
  });

  useEffect(() => {
    changeField({ ...inviteForm, chatId: chatId });
  }, [chatId]);

  const handleClose = useCallback(() => {
    setOpen(false);
    changeField({ ...inviteForm, usersToInvite: [] });
  }, []);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleSubmit = formValues => {
    onSubmit(formValues);
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
            onChange={(event, value) =>
              changeField({ ...inviteForm, usersToInvite: value })
            }
            multiple
            id="tags-outlined"
            options={userList}
            getOptionLabel={option => option.userName}
            // defaultValue={[top100Films[13]]}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Start typing"
                placeholder="Favorites"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmit(inviteForm)}
            color="primary"
            disabled={inviteForm.usersToInvite.length === 0}
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