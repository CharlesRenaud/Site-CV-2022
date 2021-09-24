import React, {useState, useEffect, useLayoutEffect } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "./App.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import git from "./images/git.png";
import javascript from "./images/javascript.png";
import linux from "./images/linux.png";
import methodo from "./images/methodo2.png";
import mongodb from "./images/mongodb.png";
import mysql from "./images/mysql2.png";
import react from "./images/react.png";
import serveur from "./images/serveur2.png";
import webpack from "./images/webpack4.png";
import wordpress from "./images/wordpress2.png";
import php from "./images/php.png";
import node from "./images/nodejs2.png"
import certif from './images/certif.png'
import moi from './images/moi.png';
import logo from "./images/logo2.png";
import diplome1 from "./images/diplome4.png";
import diplome2 from "./images/diplome2.png";
import diplome3 from "./images/diplome3.png";



const slide = [
  [
    {
    "name" : "Javascript",
    "value" : 70,
    'image' : javascript
    },
    {
    "name" : "React",
    "value" : 60,
    'image' : react
    },
    {
    "name" : "Webpack",
    "value" : 60,
    'image' : webpack

    },
    {
      "name" : "NodeJS",
      "value" : 55,
      'image' : node
    },
  ],

  [
    {
      "name" : "MongoDB (noSQL)",
      "value" : 60,
      'image' : mongodb

      },
    {
      "name" : "Wordpress",
      "value" : 55,
      'image' : wordpress
    },
    {
      "name" : "PHP",
      "value" : 55,
      'image' : php

    },
    {
      "name" : "MySql",
      "value" : 50,
      'image' : mysql
    },
  ],

  [
    {
      "name" : "Linux",
      "value" : 65,
      'image' : linux

    },
    {
      "name" : "Git",
      "value" : 60,
      'image' : git

    },
    {
      "name" : "Méthodologie Agile",
      "value" : 60,
      'image' : methodo

    },
    {
      "name" : "AWS, Firebase, Heroku",
      "value" : 70,
      'image' : serveur
    }
  ],

];




// ProfilPage /////////////////////////////////////////////////

const ProfilPage = () => {


  return(
    <div className="profil-container">
      <div className="profil-card">
        <div className="box-image" style={{backgroundImage: `url(${moi})`}}></div>
        <div className="card-list">
          <p>- Charles Renaud</p>
          <p>- 23 ans</p>
          <p>- renaudcharlespro@gmail.com</p>
          <p>- Développeur de WebApp </p>
          <p>- Diplômer en Communication</p>
          <p><a href="#">- Code du site </a></p>
          <p><a href="#">- Programme de l'alternance  </a></p>

        </div>
        
      </div>
      <div className="description-box">
        <div className="description line-1 anim-typewriters3"> Actuellement en recherche d'une alternance, afin de réaliser un bac+3 'Développeur / Concepteur d'appllications'</div>
      </div>
      <div className="diplome-box">
      <div className="diplome-card" ><p className="date">- 2019 -</p><img className="diplome" src={diplome1} /><p>BTS - Communication (BAC+2)</p><a className="study-link" href="#">L'isme</a></div>
      <div className="diplome-card" ><p className="date">- 2020 -</p> <img  className="diplome"src={diplome2} /><p>Formation de web développeur (BAC+2)</p><a className="study-link" href="#">Ecole O'clock</a></div>
      <div className="diplome-card" ><p className="date">Début : 16 octobre 2021</p><img className="diplome" src={diplome3} /><p>Développeur, Concepteur d'apllications (BAC+3) </p><a className="study-link" href="#">Ecole O'clock</a></div>
        
      </div>
    </div>
  )
}


// Slider /////////////////////////////////////////////////



const test = (slider) => {

  if(slider[0].name === "Javascript"){
    return 'Stack Javascript - '
  }
  else if(slider[0].name === "MongoDB (noSQL)"){
    return 'Stack PHP & BDD - '
  }
  else{
    return 'Administration Système - '
}}


const Slidergenerator = () => {

  let prev = (document.getElementsByClassName("fp-controlArrow")[0]);
  let next = (document.getElementsByClassName("fp-controlArrow")[1]);

  const [toogler, setToogler] = useState("anim-typewriter")

  const Toogling = () => {
    if( prev && next !== undefined) {
      if(toogler === "anim-typewriter" ){
        prev.onclick = () => setToogler("anim-typewriters")
        next.onclick = () => setToogler("anim-typewriters")
      }
      if(toogler === "anim-typewriters"){
        prev.onclick = () => setToogler("anim-typewriter")
        next.onclick = () => setToogler("anim-typewriter")
      }
    }
  }
   Toogling()

    return (
      <div>
        {slide.map(slider =>  
          <div className="slide">
            <div className="skill-container">
              <h1 className={"line-1 " + toogler }>{test(slider)}</h1>
              <div className="skill-box" >
                {slider.map(stat =>
                  <div className="skill-card" >
                                    <img className="certif" src={certif} />

                    <VisibilitySensor>
                      {({ isVisible }) => {
                      const percentage = isVisible ? stat.value : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                        );
                      }}
                    </VisibilitySensor>
                    <p className="skill-name">{stat.name}</p>
                    <img className="skill-image" src={stat.image} />
                  </div>  
                 )}
              </div>
            </div>  
          </div>
        )}
      </div>
    )
  }

 const Header = () => {
   return(
     <div className="header">
       <img className="logo" src={logo} />
     </div>

   )
 } 



const Fullpage = () => {


return (  
  <div>
    <Header />
    <ReactFullpage
      //fullpage options
      scrollOverflow={true}
      scrollingSpeed = {1000} /* Options here */
      sectionsColor={["#E2C2B3", "#687477",'#E2C2B3']}
      render={({ state, fullpageApi }) => {

        return (
        
        <ReactFullpage.Wrapper >
          <div className="section">
              <ProfilPage />
          </div>

          <div className="section">
              <Slidergenerator />
          </div>

          <div className="section"></div>

        </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
)};

  export default Fullpage;