import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './ham-c.svg';
import hamLogo from './ham.svg';
import './styles.scss';

const Wrapper = styled.div`
  display: block;
  width: 40%;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: '#44409E';
    }
  }
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState('#E0D9F1'); //navbar color

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY > 800) {
      setColor('#E0D9F1'); /* if you scroll navbar changes to these colors */
    } else {
      setColor('#E0D9F1');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    console.log(navigation);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{backgroundColor: color}}>
        <Wrapper toggle={toggle}>
          <div
            className="nav-content"
            ref={navigation}
            style={{backgroundColor: color}}
          >
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">Prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">Sponsors </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">Team </span>{' '}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <HomePage/>
    </Router>
  );
};

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}

export default NAVBAR;
