import React, { Component } from 'react';
import customCard from './custom-card';

class Projects extends Component {


    project0 = {
        image: "https://raw.githubusercontent.com/mattfazza/Weather/master/Initial.png",
        cardTitle: "Mobile-first Personal Website",
        cardText: "This website was completely made with react.  Made with React, and Reactstrap, this is a mobile-fist website.  Check it out on your phone!",
        github: "https://github.com/mattfazza/Mobile-First"
    }

    project1 = {
        image: "https://raw.githubusercontent.com/mattfazza/Weather/master/Display.png",
        cardTitle: "React Weather App",
        cardText: "Search for a city and get real time weather.  Made with React, Material, and Bootstrap.  Link: UI demo only.",
        link: "https:www.google.com",
        github: "https://github.com/mattfazza/Weather"
    }

    project2 = {
        image: "https://raw.githubusercontent.com/mattfazza/ToDoList/master/PrintScreen.png",
        cardTitle: "To Do App",
        cardText: "To do list made with React",
        link: "https://practical-carson-154b7f.netlify.com/",
        github: "https://github.com/mattfazza/ToDoList"
    }


    render() {
        return (
            <div className='projects-outer'>
                {customCard(this.project0)}
                {customCard(this.project1)}
                {customCard(this.project2)}

                <div style={{ height: "6em" }} />
            </div>
        )
    };
}

export default Projects;