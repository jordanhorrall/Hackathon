import React from 'react';
import {SOCIALS, TOP_SECTION} from '../../Module/General';
//import MytypedComponent from '../typing-effect/typing.js';
import './top-division-c.css';

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      {/* <MytypedComponent /> */}
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="">
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register Now!"
            overlay="Registration here💫"
          />
        </a>
      </div>
      <div className="buttom-group">
        <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          {' '}
          <Btn
            class="sponsor_btn"
            type="Become a judge"
            overlay="Apply here✨"
          />
        </a>

        <a href={TOP_SECTION.MENTORSHIP_LINK}>
          {' '}
          <Btn
            class="register"
            type="Become a mentor"
            overlay="Apply here🤝🏼"
          />
        </a>
      </div>
    </div>
  );
}

export {Btn, Myinfo};
