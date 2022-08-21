import { PlayCircleOutlined, Repeat } from '@mui/icons-material';
import React from 'react'
import "./Footer.scss"
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ReplayIcon from "@mui/icons-material/Replay";
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { useTheme } from '@emotion/react';
import styled from 'styled-components';



  const StyledGrid = styled(Grid)(({ theme }) => ({
    height: "100%",
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center'
  }));



export default function Footer() {


    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);


  return (
    <footer className="footer ps-3 pe-2">
      <div className="col-md-3 col-3  d-flex align-items-center flex-row footer__1">
        {/* ALBUM - PHOTO */}
        <div className="footer__album">
          <img
            src="https://d25-a.sdn.cz/d_25/c_img_H_H9/dYVq3d.jpeg"
            className="img-fluid"
          />
        </div>

        {/* COLUMN OF SONG NAME ARTIST */}
        <div className="d-flex flex-column align-items-start ms-3 footer__1__current_song">
          <h5>Californication </h5>
          <p>RHCP</p>
        </div>
      </div>

      <div className="col-md-6 col-6 footer__2 d-flex flex-column justify-content-center  align-items-center">
        {/*  PLAY CONTROLS */}
        <div>
          <ShuffleIcon
            className="footer__icon"
            style={{ transform: "scale(1.1)" }}
          />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleFilledIcon className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <ReplayIcon
            className="footer__icon"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
        {/* CURRENT SONG STATE */}

        <div className="footer__player__container ">
          <p>8:12</p>
          <div className="footer__player ms-2 me-2 mb-1">
            <div className="footer__player__status"></div>
          </div>
          <p>13:45</p>
        </div>
      </div>

      <div className="col-md-3 col-3 footer__3">
        <StyledGrid  container >
          <Grid item xs={2} sm={2} md={1}>
            <PlaylistPlayIcon sx={{ color: "white" }} />
          </Grid>

          <Grid item xs={2} sm={2} md={2} pe={2}>
            <VolumeDownIcon sx={{ color: "white" }} />
          </Grid>

          <Grid item xs={4} sm={4} md={3}>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Grid>
        </StyledGrid>
      </div>

      <h1 className="text-center">Sidebar</h1>
    </footer>
  );
}
