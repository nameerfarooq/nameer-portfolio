import React from "react";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import scss from "../assets/icons/scsss.png";
import aws from "../assets/icons/aws.png";
import material from "../assets/icons/material.png";
import tailwind from "../assets/icons/tailwind.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import axios from "../assets/icons/axios.png";
import socket from "../assets/icons/socket.png";
import photoshop from "../assets/icons/photoshop.png";
import xd from "../assets/icons/xd.png";
import framer from "../assets/icons/framer.png";
import postman from "../assets/icons/postman.png";
import express from "../assets/icons/express.png";
import node from "../assets/icons/node.png";
import mongodb from "../assets/icons/mongodb.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import vscode from "../assets/icons/vscode.png";
import office from "../assets/icons/office.png";
import bootstrap from "../assets/icons/bootstrap.png";
import es6 from "../assets/icons/es6.png";
import eth from "../assets/icons/eth.png";
import ether from "../assets/icons/ether.png";
import solana from "../assets/icons/solana.png";
import github from "../assets/icons/github.png";
import netlify from "../assets/icons/netlify.png";
import webflow from "../assets/icons/webflow.png";
import wordpress from "../assets/icons/wordpress.png";
import elementor from "../assets/icons/elementor.png";
import jwt from "../assets/icons/jwt.png";
import SkillItem from "./SkillItem";
import HeadingStyle1 from "./HeadingStyleBlack";
const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto mt-28 mb-8">
      <HeadingStyle1 black={true} text1={"My"} text2={"Skills"} />
      <div className="flex gap-12 flex-wrap justify-center">
        <SkillItem name={"HTML"} image={html} />
        <SkillItem name={"CSS"} image={css} />
        <SkillItem name={"SCSS"} image={scss} />
        <SkillItem name={"Bootstrap"} image={bootstrap} />
        <SkillItem name={"Material Ui"} image={material} />
        <SkillItem name={"Tailwind CSS"} image={tailwind} />
        <SkillItem name={"JavaScript"} image={js} />
        <SkillItem name={"TypeScript"} image={ts} />
        <SkillItem name={"ES6"} image={es6} />

        <SkillItem name={"React JS"} image={react} />
        <SkillItem name={"Node JS"} image={node} />
        <SkillItem name={"Express JS"} image={express} />
        <SkillItem name={"Mongo DB"} image={mongodb} />
        <SkillItem name={"Redux Toolkit"} image={redux} />
        <SkillItem name={"Axios"} image={axios} />
        <SkillItem name={"Ether.Js"} image={ether} />
        <SkillItem name={"Ethereum"} image={eth} />
        <SkillItem name={"Solana"} image={solana} />
        <SkillItem name={"JWT"} image={jwt} />
        <SkillItem name={"Socket.IO"} image={socket} />
        <SkillItem name={"PhotoShop"} image={photoshop} />
        <SkillItem name={"Adobe Xd"} image={xd} />
        <SkillItem name={"Figma"} image={framer} />
        <SkillItem name={"Wordpress"} image={wordpress} />
        <SkillItem name={"Elementor"} image={elementor} />
        <SkillItem name={"Webflow"} image={webflow} />
        <SkillItem name={"VS Code"} image={vscode} />
        <SkillItem name={"Github"} image={github} />
        <SkillItem name={"Netlify"} image={netlify} />
        <SkillItem name={"AWS Amplify"} image={aws} />
        <SkillItem name={"Postman"} image={postman} />
        <SkillItem name={"MS Office"} image={office} />
      </div>
    </div>
  );
};

export default Skills;
