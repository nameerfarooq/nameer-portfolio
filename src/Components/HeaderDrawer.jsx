import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import resume from "../assets/Muhammad Nameer - Software Engineer - MERN.pdf";
import { useState } from "react";
import FancyButton from "./FancyButton";

export default function HeaderDrawer({ open, handleOpen }) {
  const DrawerList = (
    <Box sx={{ width: 270 }} role="presentation" onClick={handleOpen}>
      <div className=" flex flex-col text-black gap-6 p-6 mt-12 flex-1 justify-center font-semibold text-2xl">
        <div className=" cursor-pointer">
          <a href="#skills">Skills</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#experience"> Experience</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#work">Work</a>
        </div>
        <div className=" cursor-pointer">
          {" "}
          <a href="#achievements">Achievements</a>
        </div>
        <div className=" cursor-pointer">
          <a href="#contact">Contact</a>
        </div>
        <a className="resumeButton2 " href={resume} target="_blank" download>
          <div >
            <FancyButton />
          </div>
        </a>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={handleOpen}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
