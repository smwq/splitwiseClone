import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AppBar, TextField, Toolbar } from "@mui/material";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CloseIcon from "@mui/icons-material/Close";
import PayerDialog from "../PayerDialog/PayerDialog";
import SplitDialog from "../SplitDialog/SplitDialog";
import CustomMultipleInput from "../CustomMultipleInput/CustomMultipleInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
};

export default function AddExpenseDialog({
  friends,
  addExpenseDialogIsOpen,
  handleaddExpenseDialogClose,
  handleAddExpense,
}) {
  const [payerDialogIsOpen, setPayerDialogIsOpen] = React.useState(false);
  const handlePayerDialogOpen = () => setPayerDialogIsOpen(true);
  const handlePayerDialogClose = () => setPayerDialogIsOpen(false);

  const [splitDialogIsOpen, setSplitDialogIsOpen] = React.useState(false);
  const handleSplitDialogOpen = () => setSplitDialogIsOpen(true);
  const handleSplitDialogClose = () => setSplitDialogIsOpen(false);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [paidBy, setPaidBy] = React.useState("smwq");

  const initialState = friends.map((friend) => "");

  const [splitValues, setSplitValues] = React.useState([...initialState]);

  const handleSplitValue = (value, index) => {
    splitValues[index] = value;
    setSplitValues([...splitValues]);
  };

  const handlePaidBy = (name) => {
    setPaidBy(name);
  };

  const handleSave = () => {
    handleAddExpense({
      description: description,
      amount: amount,
      owedOrGetAmount: paidBy === "smwq" ? splitValues[1] : splitValues[0],
      owed: paidBy === "smwq" ? false : true,
      friendName: name,
      addedBy: "you",
      paidBy: paidBy,
    });
    handleExpenseDialogClose();
  };

  const handleExpenseDialogClose = () => {
    handleaddExpenseDialogClose();
    setName("");
    setDescription("");
    setAmount("");
    setPaidBy("smwq");
    setSplitValues([...initialState]);
  };

  return (
    <>
      <Modal
        open={addExpenseDialogIsOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Add an expense
              </Typography>
              <Button
                sx={{ textTransform: "none" }}
                variant="text"
                onClick={handleExpenseDialogClose}
                color="secondary"
              >
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          <div style={{ display: "flex" }}>
            <Typography variant="body1" sx={{ color: "black" }}>
              With you and:
            </Typography>
            <TextField
              label="Enter names"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <CustomMultipleInput names={["nodejs", "html"]} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Description"
              placeholder="Enter a description"
              variant="standard"
              sx={{ margin: "2px 6px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              type="number"
              label="Amount"
              placeholder="0.00"
              variant="standard"
              sx={{ margin: "2px 6px" }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", margin: "2px 6px", alignSelf: "center" }}
            >
              Paid by{" "}
              <Button
                sx={{ borderRadius: 80, border: "1px dashed grey" }}
                onClick={handlePayerDialogOpen}
              >
                {paidBy === "smwq" ? "you" : paidBy}
              </Button>{" "}
              and split{" "}
              <Button
                sx={{ borderRadius: 80, border: "1px dashed grey" }}
                onClick={handleSplitDialogOpen}
              >
                unequally
              </Button>
              .
            </Typography>
            {/* <CustomDatePicker/> */}
            <TextField
              label="Notes"
              variant="standard"
              sx={{ margin: "2px 6px" }}
              disabled
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ textTransform: "none", margin: 1 }}
              color="secondary"
              variant="contained"
              onClick={handleExpenseDialogClose}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none", margin: 1 }}
              color="primary"
              variant="contained"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
      <PayerDialog
        friends={friends}
        payerDialogIsOpen={payerDialogIsOpen}
        handlePayerDialogClose={handlePayerDialogClose}
        handlePaidBy={handlePaidBy}
      />
      <SplitDialog
        friends={friends}
        splitDialogIsOpen={splitDialogIsOpen}
        handleSplitDialogClose={handleSplitDialogClose}
        splitValues={splitValues}
        handleSplitValue={handleSplitValue}
      />
    </>
  );
}
