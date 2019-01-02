import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class About extends Component {

    render(){
        return(
            <div className = "about-outer">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require("../img/linkedin.png")}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <p></p>
                        <div className="banner-text">
                            <h1>Full Stack Engineer</h1>

                            <hr />

                            <p>Mongo | Express | React | Node </p>

                            {/* LinkedIn */}
                            <div className="socialLinks">
                                <a href="https://www.linkedin.com/in/mattfazza" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" area-hidden="true" />
                                </a>

                            {/* Github */}
                                <a href="http://www.github.com/mattfazza" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" area-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        );        
    }
}

export default About;