import React, { Component } from 'react';
import customCard from './custom-card';

class Projects extends Component {


    project1 = {
        image: "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        cardTitle: "Weather App",
        cardText: "Look at this thing",
        link: "https:www.google.com",
        github: "https://www.github.com/mattfazza"
    }


    render() {
        return (
            <div className='projects-outer'>
                {customCard(this.project1)}
                {customCard(this.project1)}
            </div>
        )
    };
}

export default Projects;