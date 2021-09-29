import React, {useState} from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "./App.scss"
import Profile from './pages/profile';
import Header from './pages/header';
import SliderGenerator from "./components/SliderGenerator";
import GalleryVue from "./pages/gallery";
const Fullpage = () => {
 
    /* Clique detector Slider */
    const [toogler, setToogler] = useState("anim-typewriter");
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();

    var u = setTimeout(function() { 
      setPrev(document.getElementsByClassName("fp-controlArrow")[0]);
      setNext(document.getElementsByClassName("fp-controlArrow")[1]);
     }, 2000); 
    if(prev !== undefined){
      clearTimeout(u)
    } 
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


return (  
  <div>
    <Header />
    <ReactFullpage
      //fullpage options
      scrollOverflow={true}
      scrollingSpeed = {1000} /* Options here */
      sectionsColor={["lightgrey", "#687477",'#E2C2B3']}
      render={({ state, fullpageApi }) => {

        return (
        <ReactFullpage.Wrapper >
          <div className="section">
              <Profile />
          </div>
          <div className="section">
              <SliderGenerator props={toogler} />
          </div>
          <div className="section">
            <GalleryVue />
          </div>
        </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
)};

  export default Fullpage;