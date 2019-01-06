import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Work extends Component {

    render(){
        return(
            <div className="experience-outer">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="October, 2018 - Present"
                        iconStyle={{ background: '#009933', color: '#fff' }}
                        icon={<div></div>}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer - Fidelity Investments</h3>
                        <h4 className="vertical-timeline-element-subtitle">Corporate Technology Group - Dallas, TX</h4>
                        <p>In this infra-structure role, I was responsible for automating ETL routines, generating metrics, reports, and predictions for the DevOps team, configuring virtual machines, creating Docker containers, and onboarding applications in the end-to-end pipelines, doing away with all manual intervention from development to production.</p>
                        <p></p>
                        <p>Tech: Python, MongoDB, Docker, MySQL, Spark, Git, JIRA, Artifactory, AWS</p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June,2018 - September, 2018"
                        iconStyle={{ background: '#009933', color: '#fff' }}
                        icon={<div></div>}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer - Fidelity Investments</h3>
                        <h4 className="vertical-timeline-element-subtitle">FMRCO - Raleigh, NC</h4>
                        <p>Responsible for refactoring Angular front-ends, connecting Java middletiers with MDM, and implementing git strategy</p>
                        <p></p>
                        <p>Tech: Java, Spring, Angular, TypeScript, Javascript, Node.js, Git, JIRA, Artifactory, MDM</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January, 2018 - May 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<div></div>}
                    >
                        <h3 className="vertical-timeline-element-title">The Fellows Group LLC - Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Food Blockchain - Dallas, TX</h4>
                        <p>Partnered with The Fellows Group to create an Ethereum blockchain application to track provenance of food items.  I was responsible for implementing the smart contracts that tracked the units of produced moved through the supply chain.</p>
                        <p></p>
                        <p>Tech: Solidity, Javascript, Truffle, Drizzle, Node.js</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January, 2015 - May 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                        icon={<div></div>}
                    >
                        <h3 className="vertical-timeline-element-title">The University of Texas at Dallas</h3>
                        <h4 className="vertical-timeline-element-subtitle">B.S. in Software Engineering</h4>
                        <p>3.17 GPA</p>
                        <p></p>
                        <p>Organizations: UTD Blockchain Club, Phi Theta Kappa, Industrial Practice Program</p>
                    </VerticalTimelineElement>

                    </VerticalTimeline>

                    


            </div>

        );        
    }
}

export default Work;