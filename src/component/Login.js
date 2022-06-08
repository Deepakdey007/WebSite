import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
// import LockOutlinedIcon from '@mui/material/LockOutlinedIcon';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 380,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "2rem 0" };
  const sStyled = { margin: "8px auto" };
  return (
    <Grid>
      <Paper elevation={15} style={paperStyle}>
        <button
          type="button"
          className="btn-close b-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <Grid align="center">
          {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          style={sStyled}
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="/">Forgot password ?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
