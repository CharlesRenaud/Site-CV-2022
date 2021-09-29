import React from 'react';
import moi from '../images/moi2.jpg';
import diplome1 from "../images/diplome4.png";
import diplome2 from "../images/diplome2.png";
import diplome3 from "../images/diplome3.png";

const Profile = () => {
    return (
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
                <div className="description line-1 anim-typewriters3">Je recherche une entreprise, afin de réaliser une alternance :  'Développeur / Concepteur d'appllications'</div>
            </div>
            <div className="cv">Télécharger mon CV</div>
            <div className="diplome-box">
                <div className="diplome-card" ><p className="date">- 2019 -</p><img className="diplome" alt="diplome" src={diplome1} /><p>BTS - Communication (BAC+2)</p><a className="study-link" href="#">L'isme</a></div>
                <div className="diplome-card dash">»</div>
                <div className="diplome-card" ><p className="date">- 2020 -</p> <img alt="diplome"  className="diplome"src={diplome2} /><p>Formation de web développeur (BAC+2)</p><a className="study-link" href="#">Ecole O'clock</a></div>
                <div className="diplome-card dash">»</div>
                <div className="diplome-card" ><p className="date">Début : 16 octobre 2021</p><img alt="diplome"  className="diplome" src={diplome3} /><p>Développeur, Concepteur d'apllications (BAC+3) </p><a className="study-link" href="#">Ecole O'clock</a></div>
            </div>
        </div>
    );
};

export default Profile;