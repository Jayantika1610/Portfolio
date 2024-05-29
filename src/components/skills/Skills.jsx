import { useEffect, useState } from "react";
import SkillsList from "./SkillsList";
import "./skills.css";
import java from "../../assets/leetcode.png";
import problem from "../../assets/hackerrank.png";
import react from "../../assets/reactjs.png"
import javas from "../../assets/java.jpg"
import python from "../../assets/python.jpg"
import c from "../../assets/c++.png"
import node from "../../assets/nodejs.jpg"
import mysql from "../../assets/mysql.jpg"
import firebase from "../../assets/firebase.png"
import mongo from "../../assets/mongo.png"
import generative from "../../assets/generative.png"

const Skills=() => {
  const languages = [
    {
      id: 1,
      title: "Java",
      img:javas,
    },
    {
      id: 2,
      title: "Python",
      img: python,
    },
    {
      id: 3,
      title: "C/C++",
      img:c,
    },
   
    
  ];
  
  const tools = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      img: java,
    },
    {
      id: 2,
      title: "Problem-Solving",
      img: problem,
    },
    {
      id: 3,
      title: "Reactjs",
      img: react,
    },
    {
      id: 4,
      title: "Nodejs",
      img: node,
    },
    {
      id: 5,
      title: "Generative AI",
      img: generative,
    },
    {
      id: 6,
      title: "Machine Learning",
      img: java,
    },
    
  ];
  
  const databases = [
    {
      id: 1,
      title: "MySQL",
      img: mysql,
    },
    {
      id: 2,
      title: "Firebase",
      img:firebase,
    },
    {
      id: 3,
      title: "MongoDB",
      img:mongo,
    },
  ];
  

  
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 1,
      title: "Languages",
    },
    {
      id: 2,
      title: "Tools and Services",
    },
    {
      id: 3,
      title: "Databases",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case 1:
        setData(languages);
        break;
      case 2:
        setData(tools);
        break;
      case 3:
        setData(databases);
        break;
      default:
        setData(languages);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Technical Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Skills;
