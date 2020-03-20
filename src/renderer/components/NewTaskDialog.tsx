import React from 'react';
import {
  DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, Button,
  TextField,
} from '@material-ui/core';


/**
 * Functions:
 * 1. start download task.
 * 2. choose download type (uri, metalink, torrent)
 * 3. some options: dir, out
 * 4. Advanced Function: max-download-limit
 */

interface NewTaskDialogProps{
    isOpen: boolean;
    handleClose: () => void;
}

export const NewTaskDialog: React.FC<NewTaskDialogProps> = ({ isOpen, handleClose }) => {
  // This contains an array of resources, each resource might have many uri.
  // Same resource should be in the same line.
  let userInputDownloadString = '';
  let downloadLinksArray: string[][];

  const handleDownloadLinksArrayChange = (userInputString: string) => {
    userInputDownloadString = userInputString;
    downloadLinksArray = userInputString.split('\n').map((links) => links.split(',').map((link) => link.trim()));
  };

  const handleCancel = () => {
    console.log('cancel clicked.');
    handleClose();
  };

  const handleOk = () => {
    console.log('ok clicked.');
    handleClose();
  };
  // Get default download Address.
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCancel}
      >
        <DialogTitle id="alert-dialog-title"> New Download </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            value={userInputDownloadString}
            onChange={}
            variant="outlined"
          />
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Disagree
          </Button>
          <Button onClick={handleOk} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
