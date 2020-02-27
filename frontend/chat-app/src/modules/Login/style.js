import { makeStyles } from "@material-ui/core/styles";
// import {logInBg} from "../../static/loginBG.jpg";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundImage: `url(${logInBg})`
  },
  text: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 50,
    color: "#757069",
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    fontSize: 25,
    // backgroundColor: "#a5cc6e",
    backgroundColor: "#4bbae7",
    border: "solid 3px",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "#4bbae7",
      boxShadow: "0 0 19px 0px #757069",
      fontSize: 30
    }
  }
}));
