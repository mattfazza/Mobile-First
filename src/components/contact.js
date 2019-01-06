import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {

    render(){
        return(
            <div className="contact-outer">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <img 
                            src={require("../img/linkedin.png")}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <p></p>
                        <div className="banner-text">
                            <h1>Matt Fazza Full Stack Engineer</h1>

                            <hr />

                            <p>Either find me in the links below, or send an email to matthewfazza@yahoo.com</p>

                            {/* LinkedIn */}
                            <div className="socialLinks">
                                <a href="https://www.linkedin.com/in/mattfazza" rel="noopener noreferrer" target="_blank">
                                    <span class="fab fa-linkedin-in" area-hidden="true"></span>
                                </a>

                            {/* Github */}
                                <a href="http://www.github.com/mattfazza" rel="noopener noreferrer" target="_blank">
                                <span class="fab fa-github" area-hidden="true"></span>
                                </a>

                            {/* Twitter */}
                                {/* <a href="https://www.twitter.com/matthewfazza" rel="noopener noreferrer" target="_blank">
                                <span class="fab fa-twitter" area-hidden="true"></span>
                                </a> */}

                            {/* Instagram */}
                                {/* <a href="https://www.instagram.com/matthewfazza" rel="noopener noreferrer" target="_blank">
                                <span class="fab fa-instagram" area-hidden="true"></span>                                
                                </a> */}
                            </div>
                            </div>                    
                    </Cell>
                </Grid>

            </div>

        );        
    }
}

export default Contact;