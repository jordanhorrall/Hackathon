import React, {useEffect, useState} from 'react';
import './footer.scss';
import Insta from './icons8-instagram.svg';
import Dis from './icons8-discord.svg';
import Linked from './icons8-linkedin-2.svg';
import Mail from './icons8-mail.svg';
import DevPost from './icons8-dev-post.svg';
import PrivacyPolicy from './code of conduct.pdf';
import TermsOfUse from './Terms of use.pdf';
import Twitter from './icons8-twitter.svg';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import cross from './cross.svg';
import {SOCIALS, TOP_SECTION, FOOTER} from '../../Module/General';


// function GithubTemplate({hideTemplate}) {
//   return (
//     <div className="template">
//       <div className="template-left">
//         <p>
//           Subscribe to our{' '}
//           <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>email list</a>,
//           to get updates on our hackathon!
//         </p>
//       </div>
//       <img onClick={hideTemplate} src={cross} />
//     </div>
//   );
// }

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Link coming soon!" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn
                type="Judge/Mentor"
                class="Volunteer"
                overlay="Link coming soon!"
              />
            </a>
          )}
        </div>
        <div className="footer_info">
          <p>
            Still have questions? Email us at{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>MLH Code of Conduct</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && <p>© Copyright 2022 HackViolet</p>}
          {<p>Made with 💖</p> /*💗❤️💜 */}
        </div>
        {/* {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )} */}
      </div>
    </div>
  );
}
