import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function RecentActivity({ expenses }) {
  const getCalculation = (sharingDetails) => {
    let sum = 0;

    for (const property in sharingDetails) {
      if (property !== "you") {
        sum += parseInt(
          sharingDetails[property]["owedOrGetAmount"] === ""
            ? "0"
            : sharingDetails[property]["owedOrGetAmount"]
        );
      }
    }

    return sum;
  };

  const oweCalculation = (sharingDetails) => {
    return parseInt(
      sharingDetails["you"]["owedOrGetAmount"] === ""
        ? "0"
        : sharingDetails["you"]["owedOrGetAmount"]
    );
  };

  return (
    <div>
      {expenses.length ? (
        expenses.map((expense, index) => (
          <Card sx={{ minWidth: 275, display: "flex" }} key={index}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#D6ECDC" }} aria-label="recipe">
                  <ShoppingCartIcon />
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
                {`${expense.addedBy} added \"${expense.description}\"`}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: expense.paidBy === "you" ? "green" : "red" }}
              >
                {`You ${expense.paidBy === "you" ? "get" : "owe"}`} &#8377;
                {expense.paidBy === "you"
                  ? getCalculation(expense.sharingDetails)
                  : oweCalculation(expense.sharingDetails)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          You're all settled up. Awesome.
        </Typography>
      )}
    </div>
  );
}
