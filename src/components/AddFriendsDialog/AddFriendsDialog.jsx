import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppBar, TextField, Toolbar } from '@mui/material';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  padding: 0
};

export default function AddFriendsDialog({handleAddFriend, addFriendsDialogIsOpen, handleaddFriendsDialogClose}) {
  const [name, setName] = React.useState('');

  const handleNameChange = e => setName(e.target.value);

  const handleAddFriendName = () => {
    handleAddFriend(name);
    handleaddFriendsDialogClose();
  }

  return (
    <>
      <Modal
        open={addFriendsDialogIsOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppBar position="static" sx={{bgcolor: "#5BC5A7"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Add friend
          </Typography>
          <Button sx={{textTransform: 'none'}} variant="text" onClick={handleaddFriendsDialogClose}><CloseIcon/></Button>
        </Toolbar>
      </AppBar>
      <div style={{display: 'flex', justifyContent: 'center', margin: 10}}>
      <TextField id="standard-basic" label="Enter name" variant="outlined" value={name} onChange={handleNameChange}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button sx={{textTransform: 'none', bgcolor: "#FF652F", margin: 1}} variant="contained" onClick={handleAddFriendName}>Add</Button>
          </div>
        </Box>
      </Modal>
      </>
  );
}
