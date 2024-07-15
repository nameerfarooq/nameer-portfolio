import html from "../assets/icons/html.webp";
import css from "../assets/icons/css.webp";
import scss from "../assets/icons/scsss.webp";
import aws from "../assets/icons/aws.webp";
import material from "../assets/icons/material.webp";
import tailwind from "../assets/icons/tailwind.webp";
import js from "../assets/icons/js.webp";
import ts from "../assets/icons/ts.webp";
import axios from "../assets/icons/axios.webp";
import socket from "../assets/icons/socket.webp";
import photoshop from "../assets/icons/photoshop.webp";
import xd from "../assets/icons/xd.webp";
import framer from "../assets/icons/framer.webp";
import postman from "../assets/icons/postman.webp";
import express from "../assets/icons/express.webp";
import node from "../assets/icons/node.webp";
import mongodb from "../assets/icons/mongodb.webp";
import react from "../assets/icons/react.webp";
import redux from "../assets/icons/redux.webp";
import vscode from "../assets/icons/vscode.webp";
import office from "../assets/icons/office.webp";
import bootstrap from "../assets/icons/bootstrap.webp";
import es6 from "../assets/icons/es6.webp";
import eth from "../assets/icons/eth.webp";
import ether from "../assets/icons/ether.webp";
import solana from "../assets/icons/solana.webp";
import github from "../assets/icons/github.webp";
import netlify from "../assets/icons/netlify.webp";
import webflow from "../assets/icons/webflow.webp";
import wordpress from "../assets/icons/wordpress.webp";
import elementor from "../assets/icons/elementor.webp";
import jwt from "../assets/icons/jwt.webp";
import SkillItem from "./SkillItem";
import HeadingStyle1 from "./HeadingStyleBlack";
const Skills = () => {
  return (
    <div id="skills" className="max-w-7xl mx-auto mt-28 mb-8">
      <HeadingStyle1 black={true} text1={"My"} text2={"Skills"} />
      <div className="flex gap-3 p-4 sm:p-0 sm:gap-12 flex-wrap justify-center">
        <SkillItem name={"JavaScript"} image={js} />
        <SkillItem name={"TypeScript"} image={ts} />
        <SkillItem name={"ES6"} image={es6} />
        <SkillItem name={"React JS"} image={react} />
        <SkillItem name={"Node JS"} image={node} />
        <SkillItem name={"Express JS"} image={express} />
        <SkillItem name={"Mongo DB"} image={mongodb} />
        <SkillItem name={"Redux Toolkit"} image={redux} />{" "}
        <SkillItem name={"HTML"} image={html} />
        <SkillItem name={"CSS"} image={css} />
        <SkillItem name={"SCSS"} image={scss} />
        <SkillItem name={"Bootstrap"} image={bootstrap} />
        <SkillItem name={"Material Ui"} image={material} />
        <SkillItem name={"Tailwind CSS"} image={tailwind} />
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
