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
  return (
    <div>
      {expenses.length ? (
        expenses.map((expense) => (
          <Card sx={{ minWidth: 275, display: "flex" }}>
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
                sx={{ color: expense.owed ? "red" : "green" }}
              >
                {`You ${expense.owed ? "owe" : "get"}`} &#8377;
                {expense.owedOrGetAmount}
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
