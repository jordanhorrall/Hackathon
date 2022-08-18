import React from 'react';
import './sponsors.scss';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import {SOCIALS} from '../../Module/General';

function SponsorsHead() {
  return <h1 className="shead">2022 Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="HackViolet"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in sponsoring for 2023?</h3>
      <a href={SOCIALS.email}>
        <Btn
          className="sponsor_btn"
          type="Sponsor us!"
          overlay="More information"
        />
      </a>{' '}
    </div>
  );
}

function SponsorSpace() {
  <div className="space">
    <h4> </h4>
  </div>;
}

export {SponsorsHead, Sponsor, SponsorUS, SponsorSpace};
