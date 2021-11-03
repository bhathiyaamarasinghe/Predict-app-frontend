import "./styles/predict.css";
import React, { useRef, useEffect, useState } from "react";
import SideBar from "./shared/sideBar";
import RightDashBoard from "./predictSideBar";
import Paper from "@mui/material/Paper";
import { Container, Row, Col } from "reactstrap";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Axios from "axios";
import { Component } from "react/cjs/react.production.min";
import { style } from "@mui/system";

// initialize the canvas context
const Predict = (props) => {
  // let coordinates = new CoordinateList();
  const canvas = useRef();
  let ctx = null;
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [xvalue, setXvalue] = useState(null);
  const [yvalue, setYvalue] = useState(null);

  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    // get context of the canvas
    ctx = canvasEle.getContext("2d");

    async function getValues() {
      await Axios({
        method: "get",
        url: `http://localhost:5002/get-detection`
      }).then(res => {
        // console.log(
        //           res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices.h
        //         );
        setHeight(res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices.h);
        setWidth(res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices.w);
        setXvalue(res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices.x);
        setYvalue(res.data.message.documents[0].pages[0].detections[0].boundingPoly.vertices.y);
        console.log(height);
        console.log(width);
        console.log(xvalue);
        console.log(yvalue);
      });
    }
    getValues();
    drawcoordinates();

  }, []);

  const drawcoordinates = () => {
    // coordinates.callApi();
    // let arr = coordinates.getPolygonData();
    console.log(height, 'sauihsahs');
    const r3Info = { x: xvalue, y: yvalue, w: width, h: height };
    drawFillRect(r3Info, { backgroundColor: "yellow" });


  };

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
    <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
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
                  objectFit: "cover",
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

export default Predict;
