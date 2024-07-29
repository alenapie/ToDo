import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AccessibilityNewTwoToneIcon from "@mui/icons-material/AccessibilityNewTwoTone";

const Header = () => {
  return (
    <AppBar sx={{ background: "linear-gradient(to right, #BE80E4, #6DFBFF)" }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <AccessibilityNewTwoToneIcon sx={{ fontSize: "35px" }} />
          </Grid>
          <Grid item>
            <Typography variant="h4" fontWeight="bold">
              TO-DO LIST
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
