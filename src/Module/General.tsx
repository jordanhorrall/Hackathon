// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import peraton from './Assets/sponsorsLogos/Peraton.png';
import leidos from './Assets/sponsorsLogos/leidos.png';
import rsm from './Assets/sponsorsLogos/rsmt.png';
import cipher from './Assets/sponsorsLogos/cipher.png';
import geico from './Assets/sponsorsLogos/geico.png';
import capone from './Assets/sponsorsLogos/capone.png';
import ozmo from './Assets/sponsorsLogos/ozmo.png';
import jbhunt from './Assets/sponsorsLogos/jbhunt.png';
import cci from './Assets/sponsorsLogos/CCI.png';
import costar from './Assets/sponsorsLogos/costar.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets

import jordan from './Assets/teami/jordanNew.jpg';
import erica from './Assets/teami/erica.jpg';
import hamsini from './Assets/teami/hamsini.jpg';
import kavya from './Assets/teami/kavya.jpg';
import annie from './Assets/teami/annie.jpg';
import hafsa from './Assets/teami/hafsa.jpg';
import mia from './Assets/teami/mia.jpg';
import tessa from './Assets/teami/tessa.jpg';
import haritha from './Assets/teami/haritha.jpg';
import maryann from './Assets/teami/maryann.jpg';
import diya from './Assets/teami/diyaNew.jpg';
import vivien from './Assets/teami/vivien.jpg';
import caroline from './Assets/teami/caroline.jpg';
import jinju from './Assets/teami/jinju.jpg';
import rakesh from './Assets/teami/DSC_9748.jpg';
import travis from './Assets/teami/travis.jpg';
import sherry from './Assets/teami/sherry.jpg';

//import sched from './Assets/sched.pdf';
/*
 *  Text and links on home page
 */
const TOP_SECTION = {
  TITLE: 'HackViolet 2024',
  //Typed_effect: 'Hack to Empower.',
  SHORT_DESCRIPTION:
    'Join us February 3-4 2024 at the Virginia Tech campus for a weekend of innovation and fun!',
  // IMG_SRC:
  //   'https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg'
  DISCORD_LINK: 'https://discord.gg/8vgv8G5J',
  VOLUNTEER_LINK: 'https://forms.office.com/r/A2agfzyR6Q',
  JUDGES_FORM_LINK: 'https://forms.gle/5gNemNdZvoWhD8aw9',
  HACKERS_REGISTRATION_FORM_LINK: 'https://tally.so/r/3xDlbJ',
  MENTORSHIP_LINK: 'https://forms.gle/LkEoW5mM8fmCzaQY8',
  //RUN_OF_SHOW: sched
  // DEVPOST: 'http://hackviolet2023.devpost.com/'
};

/*
 * Social links
 */
const SOCIALS = {
  instagram: 'https://www.instagram.com/hackvioletvt/',
  discord: 'https://discord.gg/8vgv8G5J',
  linkedin: 'https://www.linkedin.com/company/hackviolet-vt/',
  twitter: 'https://twitter.com/hackvioletvt',
  devpost: 'http://hackviolet2023.devpost.com/',
  email: 'mailto:hackvioletvt@gmail.com',
  mail: 'hackvioletvt@gmail.com'
};

/*
 * Middle section about hackviolet and logo
 */
const MIDDLE_SECTION = {
  TITLE: 'What is HackViolet?',
  LONG_DESCRIPTION:
    'HackViolet is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech. Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.',
  LOGO_EFFECT: true,
  LOGO: ''
};

/*
 * footer links
 */
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: ''
  },
  JOIN_TEAM: {
    required: true,
    src: ''
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 *
 * GOES TO CALENDAR- NOT IN USE!!
 */

const calenderStartingDate = {
  month: 8,
  year: 2022
};

const schedule = [
  {
    day: '8-11-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '8-12-2022',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to HTML',
        timings: '1 Pm - 2 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '9-20-2022',
    events: [
      {
        title: 'Sign up',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 *
 * the first - seventh refer to styling in prizes.scss-just diff colors
 *
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best Overall (1st)',
      prize1: 'Prize: Silver Apple IPad (10th Gen)',
      // prize2: '2nd place: Nintendo Switch Lite',
      content:
        'This prize is awarded to the team whose project excelled in all areas of judging.'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Best Overall (2nd) ',
      // prize1: '1st place: BenQ 27 in. Monitor',
      prize2: 'Prize: Keychron K4 Pro + Logitech Mouse',
      content:
        'This second place prize is awarded to the team whose project excelled in all areas of judging.'
    },
    {
      icon: <i className=" third fas fa-4x fa-venus"></i>,
      type: 'Best Hack to Support Women (1st)',
      prize1: 'Prize: Black Sony-WH1000XM5 Headphones',
      // prize2: '2nd place: Bose QuietComfort 45',
      content:
        'This first place prize is awarded to the team whose project creatively tackle issues that women face, aids female-empowerment, combats the gender gap in tech, etc.'
    }
  ],
  [
    //Array 2
    {
      icon: <i className=" fourth fas fa-4x fa-hand-holding-heart"></i>,
      type: 'Best Hack to Support Women (2nd)',
      prize1: 'Prize: Meta Quest 2 Virtual Reality Headset',
      content:
        'This second place prize is awarded to the team whose project creatively tackle issues that women face, aids female-empowerment, combats the gender gap in tech, etc.'
    },
    {
      icon: <i className="fas fa-4x first fa-keyboard"></i>,
      type: 'Best First Time (1st)',
      prize1: 'Prize: Samsung Odyssey Gaming Monitor',
      content:
        'This prize is awarded to a team composed entirely of first time hackers whose project excelled in all areas of judging.'
    },
    {
      icon: <i className="fas fa-4x sixth fa-code"></i>,
      type: 'Best First Time (2nd)',
      prize1: 'Prize: Black Ultimate Ears Wonderboom 3 Speaker',
      content:
        'This second place prize is awarded to a team composed entirely of first time hackers whose project excelled in all areas of judging.'
    }
  ],
  [
    {
      icon: <i className="fas fa-4x fifth fa-palette"></i>,
      type: 'Best UI/UX (1st)',
      prize1: 'Prize: Fujifilm Instax Printer + Film Pack',
      content:
        'This prize is awarded to the team whose project had the most intuitive, user-friendly, and aesthetic UX/UI design.'
    },
    {
      icon: <i className="fas fa-4x ninth fa-brush"></i>,
      type: 'Best UI/UX (2nd)',
      prize1: 'Prize: Google Cloud Patagonia Backpack',
      content:
        'This second place prize is awarded to the team whose project had the most intuitive, user-friendly, and aesthetic UX/UI design.'
    },
    {
      icon: <i className="first fas fa-4x fa-microchip"></i>,
      type: 'Best Domain Name from GoDaddy',
      // prize1: '1st place: iPad 10.2 Inch & Apple Pencil',
      // prize2: '2nd place: Nintendo Switch Lite',
      content:
        'The MLH sponsored prize for the best domain name is: Hack from Home Kit'
    }
  ],
  [
    //Array 4

    {
      icon: <i className=" second fas fa-4x fa-network-wired"></i>,
      type: 'Best Use of Kintone',
      // prize1: '1st place: BenQ 27 in. Monitor',
      // prize2: '2nd place: Sonos Roam Smart Speaker',
      content:
        'The MLH sponsored prize for best use of kintone is: Breadboard IoT Kit'
    },
    {
      icon: <i className=" third fas fa-4x fa-cube"></i>,
      type: 'Best Use of Flow',
      // prize1: '1st place: Microsoft Surface Go 3',
      // prize2: '2nd place: Bose QuietComfort 45',
      content:
        'The MLH sponsored prize for the best use of flow is: $200 USD of credits'
    },
    {
      icon: <i className="fas fa-4x second fa-cloud"></i>,
      type: 'Best Use of Google Cloud Startup',
      content:
        'The MLH sponsored prize for the best use of Google Cloud Startup is: Google Cloud Backpack '
      // content:
      //   'MLH prize.'
    }
  ],
  [
    {
      icon: <i className="fas fa-4x sixth fa-user-secret"></i>,
      type: 'Best Use of TinyMCE',
      content:
        'The MLH sponsored prize for the best use of TinyMCE is: 3D Printing Pen'
      // content:
      //   'MLH prize.'
    },
    {
      icon: <i className="fas fa-4x fifth fa-folder"></i>,
      type: 'Best AI Application Built with Cloudflare',
      content:
        'The MLH sponsored prize for the best AI application built with Cloudflare is: Arduino Kit'
      // content:
      //   'MLH prize.'
    },
    {
      icon: <i className="fas fa-4x  fa-spider"></i>,
      type: 'Peraton: Best Web App Using React',
      content:
        'This Peraton sponsored prize is awarded to the team that creates the best React web application.'
      // content:
      //   'MLH prize.'
    }
  ],
  [
    {
      icon: <i className="fas fa-4x third fa-tree"></i>,
      type: 'J.B. Hunt: Best implementation of a RESTful Web Service using Spring Boot and Docker',
      content:
        'J.B. Hunt Sponsored Prize: AirPod Pros (latest gen), Ender 3 Neo 3-D Printer, Streaming Package (includes a stream deck, condenser mic, and webcam), Logitech Desktop Setup (Logi MX Master 3s & MX Mechanical Keyboard)'
      // content:
      //   'MLH prize.'
    },
    {
      icon: <i className="fas fa-4x seventh fa-home"></i>,
      type: 'Costar: Off-Campus Housing Hack',
      content:
        'Come up with a platform that reinvents the off-campus housing process that takes into consideration the perspective of the landlord and/or the student renter.',
      prize1: 'Costar Sponsored Prize: Apple Watches'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Vivien Pang',
      role: 'Vivien Pang - Co-Executive Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/vivien-p-bb63a3186/',
      img: vivien
    },
    {
      Name: 'Haritha Chode',
      role: 'Haritha Chode - Co-Executive Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/harithachode/',
      img: haritha
    },
    {
      Name: 'Annie Tran',
      role: 'Annie Tran - External Operations Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/annieseinna/s',
      img: annie
    }
  ],
  [
    //Array 2
    {
      Name: 'Caroline Joseph',
      role: 'Caroline Joseph - Judging',
      github: '',
      linkedin: 'https://www.linkedin.com/in/caroline-joseph-0b17421b9',
      img: caroline
    },
    {
      Name: 'Hafsa Khan',
      role: 'Hafsa Khann - Judging',
      github: '',
      linkedin: 'https://www.linkedin.com/in/hafsakhann',
      img: hafsa
    },
    {
      Name: 'Jinju Brown',
      role: 'Jinju Brown - Mentorship',
      github: '',
      linkedin: 'http://www.linkedin.com/in/jinju-brown',
      img: jinju
    }
  ],
  [
    //Array 3
    {
      Name: 'Kavya Somala',
      role: 'Kavya Somala - Internal Operations Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/kavyasomala/',
      img: kavya
    },
    {
      Name: 'Travis Chan',
      role: 'Travis Chan - Events',
      github: '',
      linkedin: 'https://www.linkedin.com/in/travis-c',
      img: travis
    },
    {
      Name: 'Tessa Ryan',
      role: 'Tessa Ryan - Logistics',
      github: '',
      linkedin: 'https://www.linkedin.com/in/tessa-ryan-6568a31a2',
      img: tessa
    }
  ],
  [
    //Array 4
    {
      Name: 'Maryann Nwude',
      role: 'Maryann Nwude - Marketing Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/maryann-nwude/',
      img: maryann
    },
    {
      Name: 'Mia Nguyen',
      role: 'Mia Nguyen - Graphic Design',
      github: '',
      linkedin: 'https://www.linkedin.com/in/mia-nguyen20/',
      img: mia
    },
    {
      Name: 'Erica Chang',
      role: 'Erica Chang - Technology',
      github: '',
      linkedin: 'https://www.linkedin.com/in/erica-chang-2021/',
      img: erica
    }
  ],
  [
    //Array 5
    {
      Name: 'Jordan Horrall',
      role: 'Jordan Horrall - Webmaster 💜',
      github: '',
      linkedin: 'https://www.linkedin.com/in/jordan-horrall-958222201/',
      img: jordan
    },
    {
      Name: 'Diya Khilnani',
      role: 'Diya Khilnani - Sponsorship Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/gurleen-singh-in/',
      img: diya
    },
    {
      Name: 'Hamsini Madanapalli',
      role: 'Hamsini Madanapalli - Company Relations',
      github: '',
      linkedin: 'https://www.linkedin.com/in/hamsini-madanapalli',
      img: hamsini
    }
  ],
  [
    //Array 6
    {
      Name: 'Rakesh Pillai',
      role: 'Rakesh Pillai - Company Relations',
      github: '',
      linkedin: 'https://www.linkedin.com/in/rakesh-pillai123/',
      img: rakesh
    },
    {
      Name: 'Sharanya Dogiparthi',
      role: 'Sharanya Dogiparthi - Finance',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sharanyadogiparthi/',
      img: sherry
    }
  ]
];

/*
 * These are for if we included judges pics & info
 */

// const JudgesInfo = [
//   [
//     //Array 1
//     {
//       Name: "Rehan",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: me
//     },
//     {
//       Name: "Moon",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: moon
//     },
//     {
//       Name: "Ryah Garcia",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: Ryah
//     }
//   ]
// ];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

// const violet = [
//   [{src: peraton}, {src: leidos}, {src: rsm}], //Array 1 - violet
//   [{src: cci}], //Array 2 - gold
//   [{src: captech}, {src: cipher}, {src: geico}], //Array 3 - silver
//   [{src: bloomberg}] //Array 4 - bronze
// ];

const violet = [
  // [{src: peraton}], //Array 1 - violet
  // [{src: geico}, {src: captech}, {src: cipher}], //Array 2 - silver
  // [{src: cci}, {src: bloomberg}] //Array 3 - bronze
  [{src: peraton}, {src: geico}, {src: costar}],
  [{src: jbhunt}, {src: cci}, {src: ozmo}],
  [{src: capone}]
];

/** Instructions
 * Follow the structure provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        TITLE: 'What is HackViolet?',
        label: 'What is our mission?',
        content:
          'We strive to educate as many people as we can about the obstacles females (trans and cis) and other minorities face in computing and hope to inspire more unified action through our hackathon. Above all, we believe that people of all genders working together is key to creating an inclusive environment of mutual respect.'
      },
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an innovative event where teams work on developing tech projects in a limited period of time. Hackathons typically consist of workshops, activities, food, swag, meeting other awesome people in tech, and so much more to keep hackers engaged and fueled throughout the night. '
      },
      {
        label: 'Who can attend HackViolet?',
        content:
          'Any student enrolled in an undergraduate or graduate program. We are not a female (trans and cis)-only event. We invite students of all genders, majors, and backgrounds. There is absolutely no experience necessary!'
      },
      {
        label: 'Female-Empowerment vs. Female-Only',
        content:
          'HackViolet is a female-empowerment event, but not female-only. We believe in the value of hosting events that bring together people of all genders under a common goal: to make tech an inclusive space that celebrates women (trans and cis) and other minorities. Those who do not identify as female are highly encouraged to participate in the event and join us for a weekend of innovation, camaraderie, and female-empowerment.'
      }
    ],
    [
      {
        label: 'Do I need to know how to code?',
        content:
          'Absolutely not! We encourage participants of all skill levels to join us. We will have introductory workshops and access to mentors to teach you everything you need to know!'
      },
      {
        label: 'What? Where? When?',
        content:
          'HackViolet is a 24-hour female-empowerment hackathon and will take place in February 2024 at the Virginia Tech campus. HackViolet will be fully in-person this 2024 season!'
      },
      {
        label: 'Do I need a team?',
        content:
          "If you are planning to demo your project to compete for a prize, you must be in a team of 2-4 people. If you don't have a team yet, no worries! We'll have team formation activities and plenty of ways for you to meet other people!"
      },
      {
        label: 'I have other questions!',
        content: 'Feel free to contact us at hackvioletvt@gmail.com'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  violet,
  TeamInfo,
  // JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
