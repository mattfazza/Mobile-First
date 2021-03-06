import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class About extends Component {

    render() {
        return (
            <div className="about-outer">
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <p className="space"></p>

                        <div className="banner-text-about">

                            <p>
                                I am a software engineer based in Denver, CO.  I like building websites and contributing to open-source software.
                            </p>

                            <p>
                                Because of my familiarity with Blockchain, I was working within that space before I graduated.  Upon graduating, I started working for Fidelity, and I was a part of several projects there: a full-stack web application, a data-science project, and some efforts on DevOps.
                            </p>

                            <p>
                                Outisde of work, I am always building something with React.js, and I really like the ecosystem.  Apart from running, taking care of my dogs, and playing music, that's how I spend most of my time.
                            </p>

                            <p>
                                About the website: I made this website thinking about mobile devices first.  Everything is friendly to both a monitor and a smartphone screen.  I think it's important to design websites with this experience in mind.  This website is built with React, Bootstrap, and Material Design Lite.  Oh!  All the pictures on this website were taken on my last trip to Chicago!
                            </p>
                            <p />
                        </div>
                    </Cell>
                </Grid>
            </div>

        );
    }
}

export default About;