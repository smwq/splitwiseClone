import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AppBar, Autocomplete, TextField, Toolbar } from "@mui/material";
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

  const fixedOptions = [];
  const [names, setNames] = React.useState([...fixedOptions]);
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [paidBy, setPaidBy] = React.useState("you");

  const [expenseError, setExpenseError] = React.useState({
    description: false,
    amount: false,
  });

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
    let expense = {
      description: description,
      amount: amount,
      paidBy: paidBy,
      addedBy: "you",
      sharingDetails: {
        // you: { owed: true, owedOrGetAmount: "500", friendName: "you" },
        // aman: { owed: true, owedOrGetAmount: "500", friendName: "aman" },
      },
    };

    expense.sharingDetails["you"] = { owedOrGetAmount: splitValues[0] };

    names.forEach((name, index) => {
      expense.sharingDetails[name.name] = {
        owedOrGetAmount: splitValues[index + 1],
      };
    });

    handleAddExpense(expense);
    handleExpenseDialogClose();
  };

  const handleExpenseDialogClose = () => {
    handleaddExpenseDialogClose();
    setDescription("");
    setAmount("");
    setPaidBy("you");
    setSplitValues([...initialState]);
    setExpenseError({ description: false, amount: false });
  };

  const handleChange = (e, target) => {
    if (target === "description") {
      if (!e.target.value) {
        setExpenseError((prevError) => ({ ...prevError, description: true }));
      } else {
        setExpenseError((prevError) => ({ ...prevError, description: false }));
      }
      setDescription(e.target.value);
    } else if (target === "amount") {
      if (!parseInt(e.target.value) || parseInt(e.target.value) < 0) {
        setExpenseError((prevError) => ({ ...prevError, amount: true }));
      } else {
        setExpenseError((prevError) => ({ ...prevError, amount: false }));
      }
      setAmount(e.target.value);
    }
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
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              variant="body1"
              sx={{ color: "black", alignSelf: "center" }}
            >
              With you and:
            </Typography>
            <Autocomplete
              multiple
              options={friends}
              value={names}
              onChange={(event, newValue) => {
                setNames([
                  ...fixedOptions,
                  ...newValue.filter(
                    (option) => fixedOptions.indexOf(option) === -1
                  ),
                ]);
              }}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Names"
                  placeholder="Enter Names"
                />
              )}
              sx={{ width: "65%" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              error={expenseError["description"]}
              helperText={expenseError["description"] ? "Required" : ""}
              label="Description"
              placeholder="Enter a description"
              variant="standard"
              sx={{ margin: "2px 6px" }}
              value={description}
              onChange={(e) => handleChange(e, "description")}
            />
            <TextField
              required
              error={expenseError["amount"]}
              helperText={expenseError["amount"] ? "Enter positive number" : ""}
              type="number"
              label="Amount"
              placeholder="0.00"
              variant="standard"
              sx={{ margin: "2px 6px" }}
              value={amount}
              onChange={(e) => handleChange(e, "amount")}
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
                {paidBy}
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
        names={names}
        splitDialogIsOpen={splitDialogIsOpen}
        handleSplitDialogClose={handleSplitDialogClose}
        splitValues={splitValues}
        handleSplitValue={handleSplitValue}
      />
    </>
  );
}
