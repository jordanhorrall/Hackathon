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
import captech from './Assets/sponsorsLogos/captech.png';
import bloomberg from './Assets/sponsorsLogos/bloomberg.png';
import carmax from './Assets/sponsorsLogos/carmax.png';
import cci from './Assets/sponsorsLogos/CCI.png';
import ventera from './Assets/sponsorsLogos/ventera.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets

import jordan from './Assets/teami/jordanNew.jpg';
import erica from './Assets/teami/erica.jpg';
import hamsini from './Assets/teami/hamsini.jpg';
import kavya from './Assets/teami/kavya.jpg';
import annie from './Assets/teami/annieNew.jpg';
import hafsa from './Assets/teami/hafsa.jpg';
import mia from './Assets/teami/mia.jpg';
import tessa from './Assets/teami/tessa.jpg';
import haritha from './Assets/teami/harithaNew.jpg';
import maryann from './Assets/teami/maryann.jpg';
import jenna from './Assets/teami/jennaNew.jpg';
import diya from './Assets/teami/diyaNew.jpg';
import vivien from './Assets/teami/vivienNew.jpg';
import aditya from './Assets/teami/adityaNew.jpg';
import caroline from './Assets/teami/caroline.jpg';
import jinju from './Assets/teami/jinju.jpg';
import rakesh from './Assets/teami/rakesh.png';
import travis from './Assets/teami/travis.jpg';
import sherry from './Assets/teami/sherry.png';
import lauren from './Assets/teami/laure.jpg';

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
  // DISCORD_LINK: 'https://discord.gg/3h9pQuthfK',
  // JUDGES_FORM_LINK: 'https://forms.gle/2jszY3Gz2DUJWQPz7',
  HACKERS_REGISTRATION_FORM_LINK: 'https://tally.so/r/3xDlbJ'
  // MENTORSHIP_LINK: 'https://forms.gle/sFktpDqYkWpR9zXR8',
  // RUN_OF_SHOW: 'https://www.instagram.com/p/CoNBu4bONj5/?hl=en',
  // DEVPOST: 'http://hackviolet2023.devpost.com/'
};

/*
 * Social links
 */
const SOCIALS = {
  instagram: 'https://www.instagram.com/hackvioletvt/',
  //discord: 'https://discord.gg/3h9pQuthfK',
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
      type: 'Best Overall (2)',
      // prize1: '1st place: iPad 10.2 Inch & Apple Pencil',
      // prize2: '2nd place: Nintendo Switch Lite',
      content:
        'These prizes are awarded to the two teams whose projects excelled in all areas of judging.'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Best First Time (2) ',
      // prize1: '1st place: BenQ 27 in. Monitor',
      // prize2: '2nd place: Sonos Roam Smart Speaker',
      content:
        'These prizes are awarded to the two teams composed entirely of first time hackers whose projects excelled in all areas of judging.'
    },
    {
      icon: <i className=" third fas fa-4x fa-venus"></i>,
      type: 'Best Hack to Support Women (2)',
      // prize1: '1st place: Microsoft Surface Go 3',
      // prize2: '2nd place: Bose QuietComfort 45',
      content:
        'These are prizes awarded to the two teams whose projects creatively tackle issues that women face, aids female-empowerment, combats the gender gap in tech, etc.'
    }
  ],
  [
    //Array 2
    {
      icon: <i className=" fourth fas fa-4x fa-hand-holding-heart"></i>,
      type: 'Best Hokie Spirit',
      // prize1: 'Prize: Amazon Gift Card',
      content:
        'This prize is awarded to the team whose project demonstrates what it means to be a Hokie and/or demonstrates Ut Prosim and Hokie Spirit.'
    },
    {
      icon: <i className="eighth fas fa-4x fa-glasses"></i>,
      type: 'Best Accessibility',
      //prize1: 'Prize: Tile Combo 4 Pack',
      content:
        'This prize is awarded to the team whose project promotes making technology more accessible and inclusive for people with disabilities.'
    },
    {
      icon: <i className=" fifth fa-4x fas fa-palette"></i>,
      type: 'Best UI/UX',
      //prize1: 'Prize: Mechanical Keyboard and Wireless Mouse',
      content:
        'This prize is awarded to the team whose project had the most intuitive, user-friendly, and aesthetic UX/UI design.'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-seedling"></i>,
      type: 'Best Data-Driven Hack',
      //prize1: 'Prize: Airpods Pro 2',
      content:
        'This prize is awarded the team whose project utilizes dataset(s) to provide valuable insights using AI/ML/data analytics concepts and/or data visualization techniques/software.'
    }
    // {
    //   icon: <i className="fas fa-4x first fa-keyboard"></i>,
    //   type: 'Best Web Hack Using Flask Sponsored by Peraton',
    //   prize1:
    //     'Prize: Peraton branded backpacks, swag, and a $100 Amazon giftcard',
    //   content:
    //     'This prize is awarded to the team whose project made the best use of Flask, the Python web framework.'
    // },
    // {
    //   icon: <i className="fas fa-4x seventh fa-bug"></i>,
    //   type: 'Most Innovative Sponsored by Bloomberg',
    //   prize1: 'Prize: Nintendo Switch',
    //   content:
    //     "This prize is awarded to the team whose project exemplifies Bloomberg's value of Innovation. Think bigger, see the world differently, and constantly challenge the status quo."
    // }
  ]
  // [
  //   //Array 4
  //   {
  //     icon: <i className="fas fa-4x sixth fa-code"></i>,
  //     type: 'Best Design Sponsored by RSM',
  //     prize1: 'Prize: Wifi Pineapple by Hak5',
  //     content:
  //       'This prize is awarded to the team that shows the most interesting implementation of a database, either through its unique design of its usefulness in the application. This prize is open to all coding languages!'
  //   },
  //   {
  //     icon: <i className="fas fa-4x fifth fa-robot"></i>,
  //     type: 'Best Diversity, Inclusion, and Belonging Hack Sponsored by CapTech',
  //     prize1: 'Prize: CapTech Swag Bags',
  //     content:
  //       'This prize is awarded to the team who creates the best hack to promote diversity, inclusion and belonging.'
  //   },

  //   {
  //     icon: <i className="fas fa-4x eighth fa-microscope"></i>,
  //     type: 'Best Digital Forensics Related Hack Sponsored by Cipher Tech',
  //     prize1: 'Prize: $100 in Amazon giftcards and Cipher Tech Swag bags',
  //     content:
  //       'This prize is awarded to the team who designs the best application that pertains in some way to digital forensics.'
  //   }
  // ]
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
      Name: 'Lauren Scheerer',
      role: 'Lauren Scheerer - Webmaster',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lscheerer/',
      img: lauren
    },
    {
      Name: 'Diya Khilnani',
      role: 'Diya Khilnani - Sponsorship Director',
      github: '',
      linkedin: 'https://www.linkedin.com/in/gurleen-singh-in/',
      img: diya
    }
  ],
  [
    //Array 6
    {
      Name: 'Hamsini Madanapalli',
      role: 'Hamsini Madanapalli - Company Relations',
      github: '',
      linkedin: 'https://www.linkedin.com/in/hamsini-madanapalli',
      img: hamsini
    },
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
  [] //Array 1 - violet
  // [{src: cci}, {src: captech}, {src: cipher}], //Array 2 - gold
  // [{src: geico}, {src: bloomberg}] //Array 3 - silver
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
          'Any student enrolled in a high school, undergraduate, or graduate program. We are not a female (trans and cis)-only event. We invite students of all genders, majors, and backgrounds. There is absolutely no experience necessary!'
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
