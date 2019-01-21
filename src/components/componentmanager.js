import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import About from "./about";
import Contact from "./contact";
import Work from "./work";
import Projects from "./projects";

const ComponentManager = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route projects='/projects' component={Projects} />
    </Switch>
)

export default ComponentManager;