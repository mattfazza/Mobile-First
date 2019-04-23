import React, { Component } from 'react';
import customCard from './custom-card';

class Projects extends Component {


    project0 = {
        image: "https://raw.githubusercontent.com/mattfazza/Mobile-First/Feature/Projects/src/img/initial.png",
        cardTitle: "Mobile-first Personal Website",
        cardText: "This mobile-first website you're seeing right now was completely made with React and react-strap",
        github: "https://github.com/mattfazza/Mobile-First"
    }

    project1 = {
        image: "https://raw.githubusercontent.com/mattfazza/Weather/master/Display.png",
        cardTitle: "React Weather App",
        cardText: "Search for a city and get real time weather.  Made with React, Material, and Bootstrap.  Link: UI demo only.",
        link: "https://lucid-bose-73702e.netlify.com/",
        github: "https://github.com/mattfazza/Weather"
    }

    project2 = {
        image: "https://raw.githubusercontent.com/mattfazza/ToDoList/master/PrintScreen.png",
        cardTitle: "To Do App",
        cardText: "To do list made with React",
        link: "https://practical-carson-154b7f.netlify.com/",
        github: "https://github.com/mattfazza/ToDoList"
    }

    project3 = {
        image: "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg",
        cardTitle: "Social Network Mock (in progress)",
        cardText: "Social network website where users can register, upload pictures, comment, and interact.  Made with MongoDB, Express, React, and Node.  Still in progress.",
        github: "https://github.com/mattfazza/Coolinary"
    }

    project4 = {
        image: "https://euler.com/wp-content/uploads/2018/02/Python-Course-Euler-Training-Center.png",
        cardTitle: "PyChat",
        cardText: "Python chat app made with socket programming over TCP.  Support multiple users and routes messages according to chat session.",
        github: "https://github.com/mattfazza/Networks"
    }

    project5 = {
        image: "https://raw.githubusercontent.com/mattfazza/myportfolio/master/src/img/ContactPage.png",
        cardTitle: "Old Portfolio",
        cardText: "Old Portfolio website I made with React, and Material Design Lite.",
        github: "https://github.com/mattfazza/myportfolio"
    }

    project6 = {
        image: "https://raw.githubusercontent.com/mattfazza/PasswordGenerator/master/src/img/Generator.png",
        cardTitle: "Password Generator",
        cardText: "I needed a password generator, so I made one with React using states to figure out constraints",
        github: "https://github.com/mattfazza/PasswordGenerator"
    }

    project7 = {
        image: "https://images.techhive.com/images/article/2016/12/mac-app-store-icon-sierra-100700497-large.jpg",
        cardTitle: "Memory Game",
        cardText: "Simple memory game made with Swift on XCode to brush up on my ios development skills",
        github: "https://github.com/mattfazza/iOS/tree/master/Concentration"
    }

    project8 = {
        image: "https://www.pngkey.com/png/detail/490-4904973_our-wifi-smart-cameras-work-with-amazon-alexa.png",
        cardTitle: "Alexa Daisy Skill",
        cardText: "I got an Amazon Alexa for Christmas, so I made a skill to see how it works.",
        github: "https://github.com/mattfazza/DaisySkill"
    }

    render() {
        return (
            <div className='projects-outer'>
                {customCard(this.project0)}
                {customCard(this.project1)}
                {customCard(this.project2)}
                {customCard(this.project3)}
                {customCard(this.project4)}
                {customCard(this.project5)}
                {customCard(this.project6)}
                {customCard(this.project7)}
                {customCard(this.project8)}

                <div style={{ height: "6em" }} />
            </div>
        )
    };
}

export default Projects;