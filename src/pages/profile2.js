import React, {useState} from "react";
import moi from "../images/moi2.jpg";
import diplome from "../images/diplome1.png";
import diplome2 from "../images/diplome2.png";
import diplome3 from "../images/diplome3.png";
import Particles from 'react-particles-js';
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

import LogoReact from "../logo.svg";
import ReactFullpage,{moveSectionDown} from '@fullpage/react-fullpage';

const Profile2 = (fullpageApi) => {

    const diplomeArray = 
    [
        {
        "image" : diplome,
        'title' : "BTS Communication (BAC+2)",
        "date" : "- 2019 -",
        "ecole" : "l'isme",
        "link" : "https://www.isme.fr/"
        },
        {
        "image" : diplome2,
        'title' : "Formation pro' Développeur Web (BAC+2)",
        "date" : "- 2020 -",
        "ecole" : "o'clock",
        "link" : "https://oclock.io/"

        },
        {
        "image" : diplome3,
        'title' : "Alternance, Développeur d'applications (BAC+3)",
        "date" : "Début 2022",
        "ecole" : "o'clock",
        "link" : "https://oclock.io/"

        },
    ]

    const [tooglerDiplomes, setTooglerDiplomes] = useState("");
    const [tooglerCard, setTooglerCard] = useState("");
    const [tooglerBool, setTooglerBool] = useState(false);
    const [boxToogle, setBoxToogle] = useState("")
    const toogling = () =>{
    
            if(tooglerBool === true ){
            console.log("heola")
            setTooglerDiplomes("profile-diplomes-close");
            setTooglerCard("profile-card-close");   
            setBoxToogle("box-close");   
            setTooglerBool(false);

            }else{
            setTooglerDiplomes("profile-diplomes-open");
            setTooglerCard("profile-card-open");  
            setBoxToogle("box-open");   
            setTooglerBool(true)
            }
           
    }

    return (
        <div className=" profile-box">
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
            <div className={ tooglerCard + " profile-card"}>
                <div className="profile-top">
                <div className="fade-in-image profile-image" style={{backgroundImage: `url(${moi})`}}></div>

                    <div className="profile-top-1">
                    <p className="profile-texte">Charles - Développeur Web Junior <img className="logo-react" src={LogoReact}/></p>
                   
                        <div className="profile-social">
                            <a href="https://github.com/CharlesRenaud" target="_blank"><img className="social-img" src={Github} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/charles-renaud-10/" ><img className="social-img" src={Linkedin} alt="github" /></a>
                        </div>
                    </div>

                    </div>

                   
                <div className="profile-bottom">
                    <p className="profile-accroche">Actuellement à la recherche d'une entreprise, afin de réaliser une alternance de 16 mois.</p>
                    <p className="profile-accroche link"><a href="#">PDF - programme de l'alternance [Développeur d'applications] BAC+3</a></p>
                    <div className="profile-cv">Télécharger mon CV</div>
                    <div className={boxToogle + " box"}>
                        <div onClick={() => toogling()} className=" diplomes-btn-right  arrow up"></div>
                    </div>
                </div>
                <div onClick={() => fullpageApi.moveSectionDown()} style={{cursor:'pointer'}} className="diplomes-btn arrow up"></div>
            </div>
            <div className={tooglerDiplomes + " profile-diplomes "}>
                <h1 className="study-box-title">Diplômes :</h1>
            {diplomeArray.map(diplome => 
                <div className="study-box">
                    <p className="study-date">{diplome.date}</p>
                    <img className="study-image" src={diplome.image} />
                    <p className="study-title">{diplome.title} </p>
                    <p className="study-ecole"><a style={{color:"white", letterSpacing:"0.1rem"}} target="_blank" href={diplome.link}> {diplome.ecole}</a> </p>
                    <span className="study-barre"></span>
                </div>
                 )}
            </div>
        </div>
    );
};

export default Profile2;