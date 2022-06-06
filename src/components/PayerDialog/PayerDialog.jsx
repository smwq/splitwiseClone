import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  AppBar,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  MenuList,
  TextField,
  Toolbar,
} from "@mui/material";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
};

export default function PayerDialog({
  friends,
  payerDialogIsOpen,
  handlePayerDialogClose,
  handlePaidBy,
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handlePayer = (e, index) => {
    handlePaidBy(e.target.innerText);
    handleListItemClick(e, index);
    handlePayerDialogClose();
  };

  return (
    <Modal
      open={payerDialogIsOpen}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Choose Payer
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              variant="text"
              onClick={handlePayerDialogClose}
              color="secondary"
            >
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <List
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {friends.map((friend, index) => (
            <ListItemButton
              sx={{ width: "100%", textAlign: "center" }}
              key={index}
              selected={selectedIndex === index}
              onClick={(e) => handlePayer(e, index)}
            >
              <ListItemText>{friend.name}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          {friends.map((friend, index) => (
            <Button
              sx={{ textTransform: "none" }}
              key={index}
              onClick={handlePayer}
            >
              {friend.name}
            </Button>
          ))}
        </div> */}
      </Box>
    </Modal>
  );
}
