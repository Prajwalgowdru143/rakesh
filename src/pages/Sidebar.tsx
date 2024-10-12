import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem component="button">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component="button">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
