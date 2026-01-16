import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center", margin: "20px 0px" }}>
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "-0.05em",
          }}
        >
          Movie Ticket Manager
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
