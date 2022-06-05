import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomBar from "../CustomBar/CustomBar";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import AddExpenseDialog from "../AddExpenseDialog/AddExpenseDialog";
import ImageList from "../ImageList/ImageList";
import RecentActivity from "../RecentActivity/RecentActivity";
import Dashboard from "../Dashboard/Dashboard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Activity() {
  const [addExpenseDialogIsOpen, setAddExpenseDialogIsOpen] =
    React.useState(false);
  const handleaddExpenseDialogOpen = () => setAddExpenseDialogIsOpen(true);
  const handleaddExpenseDialogClose = () => setAddExpenseDialogIsOpen(false);

  const [friends, setFriends] = React.useState([
    { name: "smwq" },
    { name: "ankit" },
  ]);

  const [expenses, setExpenses] = React.useState([
    {
      description: "water bill",
      amount: "1000",
      owedOrGetAmount: "500",
      owed: true,
      friendName: "ankit",
      addedBy: "ankit",
      paidBy: "ankit",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAddExpense = (expenseDetails) => {
    setExpenses((prevExpense) => [...prevExpense, { ...expenseDetails }]);
  };

  const handleAddFriend = (friendName) => {
    setFriends((prevFriends) => [...prevFriends, { name: friendName }]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <NavigationMenu
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
            handleAddFriend={handleAddFriend}
          />
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ padding: 0 }}>
            <CustomBar
              type={selectedIndex}
              title={selectedIndex ? "Recent Activity" : "Dashboard"}
              handleaddExpenseDialogOpen={handleaddExpenseDialogOpen}
            />
            <div style={{ height: "75vh", overflowY: "auto" }}>
              {selectedIndex ? (
                <RecentActivity expenses={expenses} />
              ) : (
                <Dashboard expenses={expenses} />
              )}
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <ImageList />
        </Grid>
      </Grid>
      <AddExpenseDialog
        friends={friends}
        addExpenseDialogIsOpen={addExpenseDialogIsOpen}
        handleaddExpenseDialogClose={handleaddExpenseDialogClose}
        handleAddExpense={handleAddExpense}
      />
    </Box>
  );
}
