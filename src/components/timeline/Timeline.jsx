import React from 'react'
import "./timeline.css"
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Timeline = () => {
    let workIconStyles = { background: "purple" };
    let schoolIconStyles = { background: "purple" };
    let timelineElements = [
        {
            id: 1,
            title: "Vellore Institute of Technology,Vellore",
            grade: "Current CGPA: 9.4",
            description:
                "Currently in second year pursuing my degree for B-Tech in Computer Science Engineering. ",
            date: "September 2022-present",
            icon: "work",
        },
        {
            id: 2,
            title: "Elpro International School, Pune",
            grade: "12th Grade: 95.6%",
            description:"Currently in second year pursuing my degree for B-Tech in Computer Science Engineering. ",
            date: "March 2020-August 2022",
            icon: "school",
        },
        {
            id: 3,
            title: "Global Indian International School, Pune",
            grade: "10th Grade: 97.2%",
            description:"Currently in second year pursuing my degree for B-Tech in Computer Science Engineering. ",
            date: "June 2017-March 2020",
            icon: "school",
        },
        {
            id: 4,
            title: "City Montessori School, Lucknow",
            description:"Currently in second year pursuing my degree for B-Tech in Computer Science Engineering. ",
            date: "March 2010-June 2017",
            icon: "school",
        },
    ];

    return (
        <div className="timeline">
            <h1 className="title">My Timeline</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.grade}
                            </h5>
                            <p id="description">{element.description}</p>
                            
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;





