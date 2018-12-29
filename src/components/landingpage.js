import React, { Component } from "react";

class LandingPage extends Component {

    render(){
        return(
            <div className="landing-container">
                <div className="row">
                    <div class="col-12">
                        <img src={require("../img/bean_large.jpg")} class="img-fluid" alt="Responsive image" />

                        <h1 className = "main-Title">Matt Fazza</h1>
                        <hr className = "dotted-Line"/>
                        <h2 className = "sub-Title">Chicago-based Full Stack Engineer</h2>

                    </div>
                </div>
            </div>
        )
    }

}

export default LandingPage;