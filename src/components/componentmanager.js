import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";

class ComponentManager extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    changePage(){

        if(this.state.activeTab === "About"){
            return(
                <div>
                    Content for About me Page
                </div>
            )
            }else if(this.state.activeTab==="Work"){
            return(
                <div>
                    Content for Work Samples
                </div>
            )
            }else if (this.state.activeTab === "Contact"){
                return(
                    <div>
                        Content for About me 
                    </div>
                )
            }
        }
        

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

    export default ComponentManager;