import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery7.png';
import gallery5 from '../images/gallery4.png';
import gallery6 from '../images/toinou1.png';
import gallery7 from '../images/toinou2.png';
import gallery8 from '../images/dumball1.png';

import galleryM1 from '../images/webradiomobile.png';
import galleryM2 from '../images/cbdmobile.png';
import galleryM3 from '../images/envertmobile.png';
import galleryM4 from '../images/mangatekmobile.png';
import galleryM5 from '../images/mydevskillmobile.png';
import galleryM6 from '../images/toinoumobile1.png';
import galleryM7 from '../images/toinoumobile2.png';
import galleryM8 from '../images/dumballmobile.png';


const GalleryVue = () => {

    const galleryArray = 
        [
            {
            "image" : gallery1,
            'texte' : "React + Firebase, Functional Programming, Music WebApp.",
            "id" : 1,
            "link": "https://devcarlwebradio.web.app/",
            "text":"Visiter",
            "github":"https://github.com/CharlesRenaud/MusicApp",
            "ifGit": "Github",
            "imgMobile": galleryM1

            },
            {
            "image" : gallery2,
            'texte' : "Wordpress, Woocommerce, OVH. Projet CBD, en pause.",
            "id" : 2,
            "link": "https://lesanneesdouces.fr/",
            "text":"Visiter",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM2

            },
            {
            "image" : gallery5,
            'texte' : "Wordpress, Avada, Woocomerce. Site associatif réaliser en collaboration avec ma soeur.",
            "id" : 3,
            "link": "https://envertlaplanete.fr/",
            "text":"Visiter",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM3

            },
            {
            "image" : gallery4,
            'texte' : "Mangatek, +1500 mangas | Front React, basé sur de la data (json) scrappé avec python (BeautifulSoup).",
            "id" : 4,
            "link": "https://devcarl-mangatek.web.app/",
            "text":"Visiter",
            "github":"https://github.com/CharlesRenaud/MangatekFront",
            "ifGit": "Github",
            "imgMobile": galleryM4


            },
            {
            "image" : gallery3,
            'texte' : "React, Redux, Axios, Symfony, Aws. Projet de fin de formation.",
            "id" : 5,
            "link": "https://mydevskilltree.netlify.app/",
            "text":"Visiter",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM5

            },
            {
            "image" : gallery6,
            'texte' : "React, ApiMockup. Test de design site pro' pour tatoueur",
            "id" : 6,
            "text":"Soon !",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM6

            },
            {
            "image" : gallery7,
            'texte' : "React, ApiMockup. Test de design site pro' pour tatoueur",
            "id" : 7,
            "text":"Soon !",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM7

            },
            {
            "image" : gallery8,
            'texte' : "WebApp Next.js Pour un jeux steam indépendant. (Version Mobile), [en cours]",
            "id" : 8,
            "text":"Soon !",
            "github":"",
            "ifGit": "",
            "imgMobile": galleryM8
            },
        ]    


    return (
        <div className="slider">
        <AwesomeSlider >
                {galleryArray.map(gallery =>
                <div className="slider-awesome">
                    <div className="image-awesome" style={{backgroundImage:'url("' +gallery.image+'")'}}></div>
                    <div className="image-awesome-mobile" style={{backgroundImage:'url("' +gallery.imgMobile+'")'}}></div>
                    <div className="link-hover"><a   target="_blank" href={gallery.link}>{gallery.text}</a></div>
                    <div className="box-description-gallery">
                        <p className="description-gallery">{gallery.texte} <a style={{color: 'white', marginLeft:"1rem", fontWeight:"bold"}} href={gallery.github}>{gallery.ifGit} </a></p>    
                        <p className="nbr" style={{fontWeight:"bold"}}> {gallery.id} / {galleryArray.length}</p>
                    </div>
                </div>
                 )}
        </AwesomeSlider>
        </div>
    );
};

export default GalleryVue;