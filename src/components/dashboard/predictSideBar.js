import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { useHttpClient } from "../hooks/http-hook";

import "./styles/predictSideBar.css";
import { Container } from "reactstrap";
import { green } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    maxHeight: 400,
    overflow: "auto",
  },
});

const PredictSideBar = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const classes = useStyles();
  const [values, setValues] = useState([]);
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  useEffect(() => {
    const fetchValueData = async () => {
      try {
        const responseData = await sendRequest(
          `http://127.0.0.1:5002/get-detection`
        );
        console.log("fetch value data");
        // console.log(
        //   responseData.message.documents[0].pages[0].detections[0].rows[0]
        // );
        setValues(
          responseData.message.documents[0].pages[0].detections[0].rows[0]
        );
      } catch (err) {}
    };
    fetchValueData();
  }, []);

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item alignSelf={"flex-end"}>
        <Button
          sx={{
            height: 30,
            width: 100,
          }}
          variant="contained"
        >
          Skip
        </Button>
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            onChange={handleChange}
            sx={{
              height: 30,
            }}
          >
            <MenuItem
              sx={{
                height: 25,
              }}
              value={10}
            >
              Table
            </MenuItem>
            <MenuItem
              sx={{
                height: 25,
              }}
              value={20}
            >
              Column
            </MenuItem>
            <MenuItem
              sx={{
                height: 25,
              }}
              value={30}
            >
              Key vvalue pairs
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <CardContent>
            {/* <Paper style={{ maxHeight: 400, overflow: "auto" }}> */}
            <List>
              <Grid container spacing={2} direction={"column"}>
                <Grid item style={{ marginBottom: 30 }}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                {values.map((item, i) => {
                  // console.log(`${item.value} inside`);
                  return (
                    <Grid item>
                      <TextField
                        id={item.value}
                        label={item.value}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  );
                })}

                {/* <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}
              </Grid>
            </List>
            {/* </Paper> */}
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PredictSideBar;
