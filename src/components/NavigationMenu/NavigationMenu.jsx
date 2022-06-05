import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Flag from "@mui/icons-material/Flag";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddFriendsDialog from "../AddFriendsDialog/AddFriendsDialog";

export default function NavigationMenu({
  selectedIndex,
  handleListItemClick,
  handleAddFriend,
}) {
  const [addFriendsDialogIsOpen, setAddFriendsDialogIsOpen] =
    React.useState(false);
  const handleaddFriendsDialogOpen = () => setAddFriendsDialogIsOpen(true);
  const handleaddFriendsDialogClose = () => setAddFriendsDialogIsOpen(false);

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ListItem sx={{ width: 250 }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <Flag fontSize="small" />
            </ListItemIcon>
            <ListItemText>Recent Activity</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <FormatListBulletedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>All expenses</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListSubheader>FRIENDS</ListSubheader>
          <ListItemButton
            alignItems="center"
            onClick={handleaddFriendsDialogOpen}
          >
            +add
          </ListItemButton>
        </ListItem>
      </List>
      <AddFriendsDialog
        handleAddFriend={handleAddFriend}
        addFriendsDialogIsOpen={addFriendsDialogIsOpen}
        handleaddFriendsDialogClose={handleaddFriendsDialogClose}
      />
    </>
  );
}
