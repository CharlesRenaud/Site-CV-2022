import React, {useState} from "react";
import moi from "../images/moi2.jpg"

const Profile2 = () => {


    const [tooglerDiplomes, setTooglerDiplomes] = useState("");
    
    const toogling = () =>{
        console.log("heola")
        setTooglerDiplomes("profile-diplomes-open")
    }

    return (
        <div className="profile-box">
            <div className="profile-card">
                <div className="profile-top">
                    <div className="fade-in-image profile-image" style={{backgroundImage: `url(${moi})`}}></div>
                    <p className="profile-texte">Charles - Développeur Web</p>
                </div>
                <div className="profile-bottom">
                    <p className="profile-accroche">Hola je suis une accroche !!</p>
                </div>
            </div>
            <div onClick={() => toogling()} className="diplomes-btn">Bouton</div>
            <div className={tooglerDiplomes + " profile-diplomes "}></div>
        </div>
    );
};

export default Profile2;