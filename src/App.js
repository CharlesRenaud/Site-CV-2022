import React, {useState} from "react";
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
import php from "./images/php.png"


const slide = [
  [
    {
    "name" : "Javascript",
    "value" : 80,
    'image' : javascript
    },
    {
    "name" : "React",
    "value" : 70,
    'image' : react
    },
    {
    "name" : "Webpack",
    "value" : 70,
    'image' : webpack

    },
    {
      "name" : "MongoDB (noSQL)",
      "value" : 70,
      'image' : mongodb

      },
  ],


  [
    {
      "name" : "PHP",
      "value" : 60,
      'image' : php

    },
    {
      "name" : "Wordpress",
      "value" : 60,
      'image' : wordpress

    },
    {
      "name" : "MySql",
      "value" : 60,
      'image' : mysql

    }
  ],

  [
    {
      "name" : "Linux",
      "value" : 70,
      'image' : linux

    },
    {
      "name" : "Git",
      "value" : 70,
      'image' : git

    },
    {
      "name" : "Méthodologie Agile",
      "value" : 80,
      'image' : methodo

    },
    {
      "name" : "AWS, Firebase, Heroku",
      "value" : 70,
      'image' : serveur
    }
  ],

];

const TextAppear = () => {
  const [placeholder, setPlaceholder] = React.useState('');

  const
    strings = [
      "Frontend Javascript"
    ],
    index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + strings[index.current]);
      index.current++;
    }
    if (index.current < strings.length) {
      let addChar = setInterval(tick, 50);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return (
    <div className="text-display">
      {placeholder}
    </div>
  )
}


const Slidergenerator = () => {
    return (
      <div>
        {slide.map(slider =>  
          <div className="slide">
            <div className="skill-container">
                <TextAppear />
              <div className="skill-box" >
                {slider.map(stat =>
                  <div className="skill-card" >
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




console.log(slide)



const Fullpage = () => (

    <ReactFullpage
      //fullpage options
      scrollOverflow={true}
      scrollingSpeed = {1000} /* Options here */
      sectionsColor={["lightgrey", "grey", "lightgrey"]}
      render={({ state, fullpageApi }) => {

        return (
        
        <ReactFullpage.Wrapper>
          <div className="section">
              <p>Charles Renaud</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
               - Parcours -
              </button>
          </div>

          <div className="section">
              <Slidergenerator />
          </div>

          <div className="section"></div>
        </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  export default Fullpage;