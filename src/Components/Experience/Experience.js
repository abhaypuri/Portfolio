import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import './Experience.css'

class SkillsIcon extends Component {
  render() {
    return(
      <div>
        <div className="icon-bg-style">
          <i className={this.props.skills.iconClass}></i>
        </div>
        <div className="skills-text">
          <p><b>{this.props.skills.skillText}</b></p>
        </div>
        <div style={{paddingLeft: '62px', marginTop: '-20px'}}>
          <p>{this.props.skills.desc}</p>
        </div>
      </div>
    )
  }
}

class Experience extends Component{

  render(){
    return(
      <Timeline orientation="left" lineColor="black" lineStyle={{width: "4px"}} >
      {
        this.props.expData.slice(0).reverse().map((object, i) =>
          (
            <TimelineEvent title={object.role} 
                           subtitle={
                            <div>
                              <p style={{margin: "0"}}> {object.title}</p> 
                              <p style={{margin: "0"}}> {object.duration } </p> 
                            </div>
                          }
                           container="card"
                           cardHeaderStyle={{background: "#222"}}
                           bubbleStyle={{
                              background: 'red',
                              borderColor: 'black',
                              borderWidth: '4px'
                             }} 
                           titleStyle={{
                              fontSize: '18px',
                              color: 'white',
                              fontFamily:'Ubuntu'
                             }}
                           subtitleStyle={{
                              fontSize: '11px',
                              color: '#DDD'
                             }}
                          contentStyle={{
                              fontFamily:'Ubuntu',
                              fontSize:'13.5px',
                              background: '#EEE',
                           }}
            >
              <p>{object.desc}</p>
            </TimelineEvent>
          )
        )
      }
      </Timeline>
    )
  }
}

class Skills extends Component {

  acheivements(){
    let htmlList = []
    let acheivementList = this.props.achievementsData;

    for(let i = acheivementList.length - 1; i >= 0; i--)
    {
      let data = acheivementList[i];
      htmlList.push(
        <li>
          <h4><b>{data.title}</b> | <i>{data.place}</i></h4>
          <h6 style={{marginTop: '-5px'}}>{data.date}</h6>
          <p>{data.desc}</p>
        </li>
      );
    }

    return(
      <div>
        <ul style={{paddingLeft: '5px'}}>
          {htmlList}
        </ul>
      </div>
    )
  }

  render() {
    const skillList = {
    'code':{
            'iconClass': "fas fa-code icon-style-code",
            'skillText': "Code",
            'desc': 'Python, C, C++, MATLAB, Html, CSS.'
          },
    'dev':{
            'iconClass': "fab fa-react icon-style-dev",
            'skillText': "Strong Areas",
            'desc': 'Data Science, Machine Learning, Deep Learning, Computer Vision.'
          },
    'fw':{
            'iconClass': "fas fa-fire icon-style-fw",
            'skillText': "Libraries",
            'desc': 'Numpy, Pandas, Scipy, Matplotlib, TensorFlow, Keras, PyTorch, Scikit-Learn.'
          }
    }
    return(
      <div style={{color:"black"}}>
          <h2>Achievements</h2>
          {this.acheivements()}
          <h2>Skills</h2>
          <div>
            <SkillsIcon skills={skillList['code']} />
            <SkillsIcon skills={skillList['dev']} />
            <SkillsIcon skills={skillList['fw']} />
          </div>  
      </div>
    )
  }
}

class ExpSkillsGird extends Component {
  render() {
    console.log(this.props.achievementsData)
    return(

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Experience expData={this.props.expData} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <Skills achievementsData={this.props.achievementsData} />
          </div>
        </div>
      </div>

    )
  }
}

export default ExpSkillsGird;