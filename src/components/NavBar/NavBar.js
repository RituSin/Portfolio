import './NavBar.css';
import { useState } from 'react';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";


const NavBar = (props) => {
    
    let history = useHistory();
    const onHambergurMenuclick = () => {
        const hamburder=document.querySelector(".hamburger-menu");
       
        const container = document.querySelector(".nav_container");
        container.classList.toggle("active");        
    }

    const onclickHandler = (e) => 
    {const container = document.querySelector(".nav_container");
       
        container.classList.toggle("active"); 
        // if(e.target.id == "home")
        // {
        //     container.classList.toggle("active"); 
        //     history.push("/");
        // }
        // else if(e.target.id == "skills")
        // {
        //     container.classList.toggle("active"); 
        //     history.push("/skills");
        // }
        // else if(e.target.id == "portfolio")
        // {
        //     container.classList.toggle("active"); 
        //     history.push("/portfolio");
        // }
        // else if(e.target.id == "about")
        // {
        //     container.classList.toggle("active"); 
        //     history.push("/about-me");
        // }
    }

    

    return(
       
        <div className="nav_container">
            <Router >
            <div className="navbar">
                <div className="menu">
                    <Link  className="react_link" to="/home">
                        <h3 className="logo">Home</h3>
                    </Link>
                    <div className="hamburger-menu" onClick={() => onHambergurMenuclick()}>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className="main">              
                     <Switch>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/skills">
                            <Skills />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                        <Route exact path="/about-me">
                            <AboutMe />
                        </Route>   
                        <Redirect from="/" to="/home" />                 
                    </Switch>
                </div>

                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </div>

            <div className="links">
                <ul>
                    <Link to="/home">
                        <li >
                            <span id="home"  onClick={(e) => onclickHandler(e)}  style={{"--i":"0.05s"}}  onClick={{}}>Home</span>
                        </li>
                    </Link>
                    <Link to="/skills">
                        <li >
                            <span id="skills" onClick={(e) => onclickHandler(e)} href="#"  style={{"--i":"0.1s"}}>Skils</span>
                        </li>
                    </Link>
                    <Link to="/portfolio">
                        <li >
                            <span id="portfolio" onClick={(e) => onclickHandler(e)} href="#"  style={{"--i":"0.15s"}}>Portfolio</span>
                        </li>
                    </Link>
                    <Link to="/about-me">
                        <li >
                            <span id="about" onClick={(e) => onclickHandler(e)} href="#"  style={{"--i":"0.20s"}}>About Me</span>
                        </li>
                    </Link>
                   
                   <Link to="/resources/RituResume.pdf" target="_blank" download>
                    <li>
                        <span  style={{"--i":"0.25s"}}>Resume</span>
                    </li>
                    </Link>
                </ul>

            </div>
            </Router>
        </div>

    )
}

export default NavBar;