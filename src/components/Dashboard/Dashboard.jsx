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
import React, { useState } from "react";
import HailIcon from "@mui/icons-material/Hail";

export default function Dashboard({ expenses, friends }) {
  const oweDetailsCalculation = (name) => {
    let oweDetails = [];

    oweDetails = [
      ...oweDetails,
      ...expenses
        .filter((expense) => {
          return expense.paidBy === name;
        })
        .map((item) => item.sharingDetails["you"]["owedOrGetAmount"]),
    ];

    return oweDetails.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) +
        parseInt(currentValue === "" ? "0" : currentValue),
      0
    );
  };

  const totalOweDetailsCalculation = () => {
    let oweDetails = [];

    friends.forEach((friend) => {
      oweDetails = [
        ...oweDetails,
        ...expenses
          .filter((expense) => {
            return expense.paidBy === friend.name;
          })
          .map((item) => item.sharingDetails["you"]["owedOrGetAmount"]),
      ];
    });

    let total = oweDetails.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) +
        parseInt(currentValue === "" ? "0" : currentValue),
      0
    );

    return total;
  };

  const owedDetailsCalculation = (name) => {
    let oweDetails = [];

    oweDetails = [
      ...oweDetails,
      ...expenses
        .filter((expense) => {
          return expense.paidBy === "you";
        })
        .map((item) =>
          item.sharingDetails[name]
            ? item.sharingDetails[name]["owedOrGetAmount"]
            : 0
        ),
    ];

    return oweDetails.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) +
        parseInt(currentValue === "" ? "0" : currentValue),
      0
    );
  };

  const totalOwedDetailsCalculation = () => {
    let oweDetails = [];

    friends.forEach((friend) => {
      oweDetails = [
        ...oweDetails,
        ...expenses
          .filter((expense) => {
            return expense.paidBy === "you";
          })
          .map((item) =>
            item.sharingDetails[friend.name]
              ? item.sharingDetails[friend.name]["owedOrGetAmount"]
              : 0
          ),
      ];
    });

    let total = oweDetails.reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) +
        parseInt(currentValue === "" ? "0" : currentValue),
      0
    );

    return total;
  };

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
          <ListItemText>
            {totalOwedDetailsCalculation() - totalOweDetailsCalculation()}
          </ListItemText>
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
          <ListItemText>{totalOweDetailsCalculation()}</ListItemText>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#EEEEEE",
          }}
        >
          <ListItemText>you owed</ListItemText>
          <ListItemText>{totalOwedDetailsCalculation()}</ListItemText>
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
          {friends.map((friend, index) => {
            return (
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
                    {friend.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "red" }}>
                    You owe &#8377;
                    {oweDetailsCalculation(friend.name)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
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
          {friends.map((friend, index) => {
            return (
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
                    {friend.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "green" }}>
                    You are owed &#8377;
                    {owedDetailsCalculation(friend.name)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
