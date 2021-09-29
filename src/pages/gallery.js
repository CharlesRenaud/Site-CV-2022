import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery5.PNG';
import gallery5 from '../images/gallery4.png';
import gallery6 from '../images/toinou1.png';
import gallery7 from '../images/toinou2.png';
import gallery8 from '../images/dumball1.png';
import gallery9 from '../images/dumball2.png';
import gallery10 from '../images/mangatek1.png';
import gallery11 from '../images/mangatek2.png';


const GalleryVue = () => {

    const galleryArray = 
        [
            {
            "image" : gallery1,
            'texte' : "React + Firebase, Functional Programming, Music WebApp."
            },
            {
            "image" : gallery2,
            'texte' : "Wordpress, Woocommerce, OVH. Projet CBD, en cours."
            },
             {
            "image" : gallery4,
            'texte' : "Wordpress, Woocommerce, OVH. Projet CBD, en pause."
            },
            {
            "image" : gallery3,
            'texte' : "React, Redux, Axios, Symfony, Aws. Projet de fin de formation."
            },
            {
            "image" : gallery5,
            'texte' : "Wordpress, Avada, Woocomerce. Site associatif réaliser en collaboration avec ma soeur."
            },
            {
            "image" : gallery6,
            'texte' : "React, ApiMockup. Test de design site pro' pour tatoueur"
            },
            {
            "image" : gallery7,
            'texte' : "React, ApiMockup. Test de design site pro' pour tatoueur"
            },
            {
            "image" : gallery8,
            'texte' : "WebApp Next.js Pour un jeux steam indépendant. (Version Mobile) "
            },
            {
            "image" : gallery9,
            'texte' : "WebApp Next.js Pour un jeux steam indépendant. (Version Mobile) "
            },
            {
            "image" : gallery10,
            'texte' : "WebApp React + Api Node.js. Une application qui me permet de lire des mangas."
            },
            {
            "image" : gallery11,
            'texte' : "WebApp React + Api Node.js. Une application qui me permet de lire des mangas."
            },
           
        ]    


    return (
        <AwesomeSlider>
                {galleryArray.map(gallery =>
                <div className="slider-awesome">
                    <img className="image-awesome" alt='gallery' src={gallery.image}/>
                    <div className="box-description-gallery">
                        <p className="description-gallery">{gallery.texte}</p>    
                    </div>
                </div>
                 )}
        </AwesomeSlider>
    );
};

export default GalleryVue;