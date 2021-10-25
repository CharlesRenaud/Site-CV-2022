import React, {useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

import git from "../images/git.png";
import javascript from "../images/javascript.png";
import linux from "../images/linux.png";
import methodo from "../images/methodo2.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql2.png";
import react from "../images/react.png";
import serveur from "../images/serveur2.png";
import webpack from "../images/nextjs2.png";
import wordpress from "../images/wordpress2.png";
import php from "../images/php.png";
import node from "../images/nodejs2.png"
import certif from '../images/certif.png'

import Particles from 'react-particles-js';



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
      "name" : "NextJS",
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
  
  const test = (slider) => {
    if(slider[0].name === "Javascript"){
      return 'Stack Javascript - '
    }
    else if(slider[0].name === "MongoDB (noSQL)"){
      return 'Stack PHP & BDD - '
    }
    else{
      return "Dev' Ops -"
    }}


const SliderGenerator = (fullpageApi ,props) => {


    return (
      <div className="slider-box">
         
        {slide.map(slider =>  
          <div className="slide">
            <div className="skill-container">
              <h1 className={"line-1 " + props.props }>{test(slider)}</h1>
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
                    <div  className="skill-image"  style={{backgroundImage: 'url("'+ stat.image +'")'} }>
                    </div>
                  </div>  
                 )}
              </div>
            </div>  
          </div>

        )}
        <Particles canvasClassName="example"
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                        "value": "#61DAFB"
                        },
                    
                        
                        "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0,
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} 
            />
            <div onClick={() => fullpageApi.moveSectionDown()} className="diplomes-btn arrow up">HOLLLA</div>
      </div>
    )
};

export default SliderGenerator;