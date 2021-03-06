import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  AppBar,
  ButtonGroup,
  Divider,
  List,
  ListItemButton,
  ListItemText,
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
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
};

export default function SplitDialog({
  friends,
  names,
  splitDialogIsOpen,
  handleSplitDialogClose,
  splitValues,
  handleSplitValue,
}) {
  const [splitFields, setSplitFields] = React.useState([
    "you",
    ...names.map((name) => name.name),
  ]);

  const [error, setError] = React.useState([
    ...splitValues.map((value) => false),
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    setSplitFields(["you", ...names.map((name) => name.name)]);
  }, [names]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleSplitFieldChange = (e, index) => {
    if (!parseInt(e.target.value) || parseInt(e.target.value) < 0) {
      setError((prevError) => [
        ...prevError.map((error, i) => {
          return i === index ? true : error;
        }),
      ]);
    } else {
      setError((prevError) => [
        ...prevError.map((error, i) => {
          return i === index ? false : error;
        }),
      ]);
    }
    handleSplitValue(e.target.value, index);
  };

  return (
    <Modal
      open={splitDialogIsOpen}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Choose split options
            </Typography>
            <Button
              sx={{ textTransform: "none" }}
              variant="text"
              onClick={handleSplitDialogClose}
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
            alignItems: "center",
          }}
        >
          <ListItemButton
            sx={{
              width: "80%",
              textAlign: "center",
              borderRadius: "40px",
              padding: 0,
              margin: "2px 0px",
            }}
            selected={selectedIndex === 0}
            onClick={(e) => handleListItemClick(e, 0)}
          >
            <ListItemText>Split the Expense</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              width: "80%",
              textAlign: "center",
              borderRadius: "40px",
              padding: 0,
              margin: "2px 0px",
            }}
            selected={selectedIndex === 1}
            onClick={(e) => handleListItemClick(e, 1)}
          >
            <ListItemText>You owe them</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              width: "80%",
              textAlign: "center",
              borderRadius: "40px",
              padding: 0,
              margin: "2px 0px",
            }}
            selected={selectedIndex === 2}
            onClick={(e) => handleListItemClick(e, 2)}
          >
            <ListItemText>They owe you</ListItemText>
          </ListItemButton>
        </List>
        <Divider />
        <ButtonGroup
          sx={{ margin: "5px 10px" }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {splitFields.map((name, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: 3,
              }}
            >
              <Typography variant="body1" sx={{ color: "black" }}>
                {name}
              </Typography>
              <TextField
                type="number"
                required
                error={error[index]}
                helperText={error[index] ? "Enter positive numbers" : ""}
                sx={{ width: 100 }}
                variant="standard"
                value={splitValues[index]}
                onChange={(e) => handleSplitFieldChange(e, index)}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 3,
          }}
        >
          <Typography variant="body1" sx={{ color: "black" }}>
            TOTAL
          </Typography>
          <Typography variant="body1" sx={{ color: "black" }}>
            {splitValues.reduce(
              (previousValue, currentValue) =>
                parseInt(previousValue) +
                parseInt(currentValue === "" ? "0" : currentValue),
              0
            )}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}
