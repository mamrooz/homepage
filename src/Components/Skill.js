import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import jsLogo from '../images/logo-js.svg';
import reactLogo from '../images/logo-react.png';
import cLogo from '../images/logo-c.svg';
import cppLogo from '../images/logo-c++.svg';
import csharpLogo from '../images/logo-csharp.svg';
import expoLogo from '../images/logo-expo.svg';
import htmlLogo from '../images/logo-html.svg';
import cssLogo from '../images/logo-css.svg';
import javaLogo from '../images/logo-java.svg';
import matlabLogo from '../images/logo-matlab.svg';
import mysqlLogo from '../images/logo-mysql.svg';
import nodeLogo from '../images/logo-node-js.svg';
import phpLogo from '../images/logo-php.svg';
import postgreLogo from '../images/logo-postgre.svg';
import pythonLogo from '../images/logo-python.svg';
import swiftLogo from '../images/logo-swift.svg';
import symfonyLogo from '../images/logo-symfony.svg';
import problemSolvingLogo from '../images/logo-problemSolving.svg';
import creativeLogo from '../images/logo-creative.svg';
import fastLearnerLogo from '../images/logo-fast-learner.svg';
import leadershipLogo from '../images/logo-leadership.svg';
import teamPlayerLogo from '../images/logo-team-player.svg';
import documentationLogo from '../images/logo-documentation.svg';
import presentationLogo from '../images/logo-presentation.svg';
import dataMiningLogo from '../images/logo-data-mining.svg';
import machineLearningLogo from '../images/logo-machine-learning.svg';
import gitLogo from '../images/logo-git.svg';
import codeReviewLogo from '../images/logo-code-review.svg';
import hadoopLogo from '../images/logo-hadoop.svg';
import sparkLogo from '../images/logo-spark.svg';
import recSysLogo from '../images/logo-recsys.svg';
import oodLogo from '../images/logo-ood.svg';
import oopLogo from '../images/logo-oop.svg';
import dockerLogo from '../images/logo-docker.svg';
import rProgrammingLogo from '../images/logo-rprogramming.svg';


import {Media, ProgressBar} from "react-bootstrap";

const java = "Java";
const python = "Python";
const cProgramming = "C";
const cpp = "C++";
const csharp = "C#";
const matlab = "Matlab";
const rProgramming = "R";
const javascript = "JavaScript";
const php = "PHP";
const html = "HTML";
const css = "CSS";
const react = "React.js";
const node = "Node.js";
const symfony = "Symfony";
const problemSolving = "Problem Solving";
const creative = "Creative";
const fastLearner = "Fast Learner";
const leaderShip = "Leadeship";
const teamPlayer = "Team Player";
const documentation = "Documentation";
const presentation = "Presenataion";
const dataMining = "Data Mining";
const machineLearning = "Machine Learning";
const swift = "Swift & XCode";
const reactNative = "React Native";
const expo = "Expo";
const mySql = "MySQL";
const postgreSQL = "postgreSQL";
const git = "Git";
const codeReview = "Code Review";
const rHadoop = "R Hadoop";
const recommenderSystems = "Recommender Systems";
const spark = "Spark";
const docker = "Docker";
const ood = "Object Oriented Design";
const oop = "Object Oriented Programming";

export function Skill({name, image, experience, imageClass}) {
  return <Media style={{margin: 15}}>
    {image != null ? <img
        width={64}
        height={64}
        className={"mr-3 " + (imageClass != null ? imageClass : "")}
        src={image}
        alt={name}
        style={{marginRight: 5}}
      />
      : ""}
    <Media.Body>
      <h5>{name}</h5>
      {experience != null ? <ProgressBar now={experience} variant={""}/> : ""}
    </Media.Body>
  </Media>
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  experience: PropTypes.number.isRequired,
  imageClass: PropTypes.string
}

export default Skill;


const strengths = [
  <Skill image={problemSolvingLogo} name={problemSolving}/>,
  <Skill image={creativeLogo} name={creative}/>,
  <Skill image={fastLearnerLogo} name={fastLearner}/>,
  <Skill image={leadershipLogo} name={leaderShip}/>,
  <Skill image={teamPlayerLogo} name={teamPlayer}/>,
  <Skill image={documentationLogo} name={documentation}/>,
  <Skill image={presentationLogo} name={presentation}/>,
  <Skill image={dataMiningLogo} name={dataMining}/>,
  <Skill image={machineLearningLogo} name={machineLearning}/>,
  <Skill image={oodLogo} name={ood}/>,
  <Skill image={oopLogo} name={oop}/>,
];


const programming = [
  <Skill image={javaLogo} experience={100} name={java}/>,
  <Skill image={pythonLogo} experience={80} name={python}/>,
  <Skill image={cLogo} experience={90} name={cProgramming}/>,
  <Skill image={cppLogo} experience={100} name={cpp}/>,
  <Skill image={csharpLogo} experience={70} name={csharp}/>,
  <Skill image={matlabLogo} experience={75} name={matlab} imageClass={"invertColor"}/>,
  <Skill image={rProgrammingLogo} experience={60} name={rProgramming}/>,
];

const webDevelopment = [
  <Skill image={jsLogo} experience={100} name={javascript}/>,
  <Skill image={phpLogo} experience={100} name={php}/>,
  <Skill image={htmlLogo} experience={100} name={html}/>,
  <Skill image={cssLogo} experience={100} name={css}/>,
  <Skill image={reactLogo} experience={100} name={react}/>,
  <Skill image={nodeLogo} experience={100} name={node}/>,
  <Skill image={symfonyLogo} experience={100} name={symfony}/>,
];

const appDevelopment = [
  <Skill image={swiftLogo} experience={80} name={swift}/>,
  <Skill image={reactLogo} experience={80} name={reactNative}/>,
  <Skill image={expoLogo} experience={75} name={expo}/>,
];

const database = [
  <Skill image={mysqlLogo} experience={100} name={mySql}/>,
  <Skill image={postgreLogo} experience={70} name={postgreSQL}/>,
];
const other = [
  <Skill image={gitLogo} experience={100} name={git}/>,
  <Skill image={codeReviewLogo} experience={100} name={codeReview}/>,
  <Skill image={hadoopLogo} experience={80} name={rHadoop}/>,
  <Skill image={recSysLogo} experience={100} name={recommenderSystems}/>,
  <Skill image={sparkLogo} experience={60} name={spark}/>,
  <Skill image={dockerLogo} experience={60} name={docker}/>,
];

export const skills = [
  {name: "Strengths", items: strengths},
  {name: "Programming", items: programming},
  {name: "Web development", items: webDevelopment},
  {name: "App development", items: appDevelopment},
  {name: "Database", items: database},
  {name: "Other", items: other},
];
