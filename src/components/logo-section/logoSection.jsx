import React from 'react';
import './logoSection.css';
import sym from './sym.png';

import hviolet from './computer.png';
import tree from './hac.png';
import group from './groupImage.jpg';

import {MIDDLE_SECTION} from '../../Module/General';

//middle section
function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

/*
 * tree
 */
function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={tree} alt="HackViolet" />
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="HackViolet" />
      </div>
    );
  }
  return myLogo;
}

/*
 *  logo on top of front page LogoS computer
 */
function Logopic() {
  var picLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    picLogo = (
      <div className="logoS">
        <img className="Logo sym" src={hviolet} alt="HackViolet" />
      </div>
    );
  } else {
    picLogo = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="HackViolet" />
      </div>
    );
  }
  return picLogo;
}

/*
 *  logo on top of front page LogoS computer
 */
function groupPic() {
  var group;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    group = (
      <div className="group">
        <img className="groupPic" src={group} alt="HackViolet" />
      </div>
    );
  } else {
    group = (
      <div className="logoS">
        <img className="Logo sym" src={sym} alt="HackViolet" />
      </div>
    );
  }
  return picLogo;
}

export {Logo, LogoSectionAbout, Logopic, groupPic};
