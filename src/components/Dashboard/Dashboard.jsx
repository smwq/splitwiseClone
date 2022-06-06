import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import HailIcon from "@mui/icons-material/Hail";

export default function Dashboard({ expenses }) {
  return (
    <div>
      <Divider />
      <List
        style={{
          display: "flex",
        }}
      >
        <ListItem
          sx={{
            borderRight: "1px solid black",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#EEEEEE",
          }}
        >
          <ListItemText>total balance</ListItemText>
          <ListItemText>300</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            borderRight: "1px solid black",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#EEEEEE",
          }}
        >
          <ListItemText>you owe</ListItemText>
          <ListItemText>300</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#EEEEEE",
          }}
        >
          <ListItemText>you owed</ListItemText>
          <ListItemText>300</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">YOU OWE</Typography>
          {expenses.length
            ? expenses.map((expense, index) => {
                return expense.owed ? (
                  <Card
                    key={index}
                    sx={{ width: "95%", display: "flex", margin: 1 }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#D6ECDC" }} aria-label="recipe">
                          <HailIcon />
                        </Avatar>
                      }
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {expense.addedBy}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: expense.owed ? "red" : "green" }}
                      >
                        You owe &#8377;
                        {expense.owedOrGetAmount}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  ""
                );
              })
            : ""}
        </div>
        <Divider orientation="vertical" flexItem />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">YOU ARE OWED</Typography>
          {expenses.length
            ? expenses.map((expense) => {
                return !expense.owed ? (
                  <Card sx={{ width: "95%", display: "flex", margin: 1 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#D6ECDC" }} aria-label="recipe">
                          <HailIcon />
                        </Avatar>
                      }
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {expense.addedBy}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: expense.owed ? "red" : "green" }}
                      >
                        owes you &#8377;
                        {expense.owedOrGetAmount}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  ""
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
