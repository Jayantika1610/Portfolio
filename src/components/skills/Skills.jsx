import { useEffect, useState } from "react";
import SkillsList from "./SkillsList";
import "./skills.css";
import java from "../../assets/leetcode.png";
import problem from "../../assets/hackerrank.png";
import react from "../../assets/reactjs.png"
import javas from "../../assets/js.png"
import python from "../../assets/python.png"
import c from "../../assets/c++.png"
import node from "../../assets/nodejs.png"
import mysql from "../../assets/mysql.png"

const Skills=() => {
  const languages = [
    {
      id: 1,
      title: "Java",
      img:java,
    },
    {
      id: 2,
      title: "Python",
      img: java,
    },
    {
      id: 3,
      title: "C/C++",
      img:java,
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
      img: java,
    },
    {
      id: 3,
      title: "Reactjs",
      img: java,
    },
    {
      id: 4,
      title: "Nodejs",
      img: java,
    },
    {
      id: 5,
      title: "Generative AI",
      img: java,
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
      img: java,
    },
    {
      id: 2,
      title: "Firebase",
      img:java,
    },
    {
      id: 3,
      title: "MongoDB",
      img:java,
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
