import React from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";
import Vishal from './assets/img/vishal.jpg'

let App = () => {
    let imgHover=(e)=>{
        e.target.style.border="1px solid white";
        e.target.style.borderRadius="50%";
        e.target.style.padding="2px";
    };
    let imgHoverOff =(e)=>{
        e.target.style.border="none";
        e.target.style.borderRadius="0%";
        e.target.style.padding="0px";
    };
    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">Github Search Advanced</a>
               <a href="https://www.linkedin.com/in/vishal-d-0b767711b" className="ml-auto" target="_blank" rel="noopener noreferrer"><img src={Vishal} onMouseEnter={imgHover} onMouseLeave={imgHoverOff} className="img-fluid rounded-circle mr-md-4 mr-0" height={45} width={45} alt="VishalDilwale"/></a>
           </nav>

            <GithubSearchApp/>
        </React.Fragment>
    );
};
export default App;
