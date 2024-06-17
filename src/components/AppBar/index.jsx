import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ReactComponent as TrelloIcon } from "@src/assets/trello.svg";
import ModeSelect from "../ModeSelect";
import Profiles from "./Menu/Profile";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Workspaces from "./Menu/Workspaces";

const AppBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.25,
            color: "primary.main",
          }}
        >
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant="span"
            sx={{ fontSize: "1.2rem", fontWeight: "600" }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "primary.main",
        }}
      >
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge variant="dot" color="secondary" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon color="action" />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon color="action" />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
