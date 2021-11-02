import "./styles/predict.css";
import SideBar from "./shared/sideBar";
import RightDashBoard from "./predictSideBar";
import Paper from "@mui/material/Paper";
import { Container, Row, Col } from "reactstrap";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React, { useRef, useEffect } from "react";
import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import { style } from "@mui/system";

// initialize the canvas context
const Predict = (props) => {
  let coordinates = new CoordinateList();
  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    // get context of the canvas
    ctx = canvasEle.getContext("2d");

  }, []);

  useEffect(() => {
    coordinates.callApi();
    let arr = coordinates.getPolygonData();

    const r3Info = { x: arr[0], y: arr[1], w: arr[2], h: arr[3] };
    drawFillRect(r3Info, { backgroundColor: "yellow" });

    const r4Info = { x: 300, y: 400, w: 100, h: 50 };
    drawFillRect(r4Info, { backgroundColor: "yellow"} );
  }, []);

  // draw rectangle with background
  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
      <Box sx={{ flexGrow: 1 , paddingTop:10}}>
        <Grid container spacing={2}>
          <Grid item xs={2.2} >
            <Item >
              <SideBar />
            </Item>
          </Grid>
          <Grid item xs={6.8}>
            <Item>
              {" "}
              <div className="App">
                <canvas
                  style={{
                    backgroundImage:
                      "url(" + "https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170751985/82353993-medical-patient-report-form-record-history-information-word.jpg" + ")",
                    objectFit:"cover",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  id="canvas"
                  ref={canvas}
                >
                </canvas>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              {" "}
              <RightDashBoard />
            </Item>
          </Grid>
        </Grid>
      </Box>
  );
};

class CoordinateList extends Component {
  state = {
    coordinates: ["name"],
  };

  callApi() {
    axios.get(`http://localhost:5002/get-detection`).then((res) => {
      console.log(
        // res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices
        res.data.message.documents[0].pages[0].detections[0].vertices
      );
      this.setState({
        // coordinates: res.data.message.documents[0].pages[0].detections[0].vertices
        coordinates: { name: 23 },
      });
      console.log(this.state.coordinates);
    });
  }
  getPolygonData() {
    let polygon = new Polygon(30, 100, 620, 620);
    return polygon.getPolygon();
  }
}

class Polygon {
  constructor(x1, y1, x2, y4) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y4 = y4;

    this.height = this.y1 - this.y4;
    this.width = this.x1 - this.x2;
  }
  getPolygon() {
    console.log(this.x1, this.y1, this.width, this.height);
    return [this.x1, this.y1, this.width, this.height];
  }
}

export default Predict;
