// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import peraton from "./Assets/sponsorsLogos/Peraton.png";
import leidos from "./Assets/sponsorsLogos/leidos.png";
import rsm from "./Assets/sponsorsLogos/rsmt.png";
import protiviti from "./Assets/sponsorsLogos/protivitit.png";
import cvent from "./Assets/sponsorsLogos/cvent.png";
import captech from "./Assets/sponsorsLogos/captech.png";
import bloomberg from "./Assets/sponsorsLogos/bloomberg.png";
import carmax from "./Assets/sponsorsLogos/carmax.png";
import willowtree from "./Assets/sponsorsLogos/willowtree.png";
import ventera from "./Assets/sponsorsLogos/ventera.png";


/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets

import jordan from "./Assets/teami/jordan.jpeg";
import morgan from "./Assets/teami/morgan.jpg";
import annemarie from "./Assets/teami/annemarie.jpg";
import kavya from "./Assets/teami/kavya.jpg";
import annie from "./Assets/teami/annie.jpg";
import terjani from "./Assets/teami/terjani.jpg";
import karen from "./Assets/teami/karen.jpg";
import rathi from "./Assets/teami/bharathi.jpg";
import haritha from "./Assets/teami/haritha.jpg";
import tanya from "./Assets/teami/tanya.jpg";
import jenna from "./Assets/teami/jenna.jpg";
import diya from "./Assets/teami/diya.jpg";
import vivien from "./Assets/teami/vivien.jpg";
import aditya from "./Assets/teami/aditya.jpg";
import kaylin from "./Assets/teami/kaylin.jpg";
import jan from "./Assets/teami/jan.jpg";

/* 
*  Text and links on home page
*/
const TOP_SECTION = {
  TITLE: "HackViolet 2023",
  Typed_effect: ["Hack to Empower.", "Hack to Win."],
  SHORT_DESCRIPTION:
    "Join us on February 4-5th, 2023 at the Virginia Tech campus for a weekend of innovation and fun!",
  IMG_SRC: 'https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg',
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "",
  HACKERS_REGISTRATION_FORM_LINK:
    ""
};

/*
 * Social links
*/
const SOCIALS = {
  instagram: "https://www.instagram.com/hackvioletvt/",
  discord: "",
  linkedin: "https://www.linkedin.com/company/hackviolet-vt/",
  twitter: "https://twitter.com/hackvioletvt",
  devpost: "https://hackviolet.devpost.com/",
  email: "mailto:hackvioletvt@gmail.com",
  mail: "hackvioletvt@gmail.com"
};


/*
* Middle section about hackviolet and logo
*/
const MIDDLE_SECTION = {
  TITLE: "What is HackViolet?",
  LONG_DESCRIPTION:
    "HackViolet is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech. Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.",
  LOGO_EFFECT: true,
  LOGO: ""
};


/*
* footer links
*/
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: ""
  },
  JOIN_TEAM: {
    required: true,
    src: ""
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
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
}


 const schedule = [
  {
      "day": "8-11-2022",
      "events": [
          {
              "title": "Intro to phycycology",
              "timings": "12 AM - 1 Pm",
               "link" : "https://google.com"
          }
      ]
  },
  {
      "day": "8-12-2022",
      "events": [
          {
              "title": "Intro to deep learning",
              "timings": "12 AM - 1 Pm",
              "link" : "https://google.com"
          },
          {
              "title": "Intro to HTML",
              "timings": "1 Pm - 2 Pm",
              "link" : "https://google.com"
          }
      ]
  },
  {
      "day": "9-20-2022",
      "events": [
          {
              "title": "Sign up",
              "timings": "12 AM - 1 Pm",
              "link" : "https://google.com"
          }
      ]
  }
]



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
      type: "Best Overall (2)",
      content:
        "These prizes are awarded to the two teams whose projects excelled in all areas of judging."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Best First Time (2) ",
      content:
        "These prizes are awarded to the two teams composed entirely of first time hackers whose projects excelled in all areas of judging."
    },
    {
      icon: <i className=" third fas fa-4x fa-venus"></i>,
      type: "Best Hack to Support Women (2)",
      content:
        "These are prizes awarded to the two teams whose projects creatively tackle issues that women face, aids female-empowerment, combats the gender gap in tech, etc."
    }
  ],
  [
    //Array 2
    {
      icon: <i className=" fourth fas fa-4x fa-glasses"></i>,
      type: " Biggest Visionary",
      content:
        "This prize is awarded to the team whose project demonstrated a powerful, creative vision regardless of whether they were able to fully execute the idea."
    },
    {
      icon: <i className="eighth fas fa-4x fa-hand-holding-heart"></i>,
      type: "Ut Prosim (That May I Serve) Hack",
      content: "This prize is awarded to the team whose project exemplifies Virginia Tech’s school motto of Ut Prosim (That I May Serve) by supporting VT students, professors, and/or the VT community."
    },
    {
      icon: <i className=" fifth fa-4x fas fa-briefcase-medical"></i>,
      type: "Best Health Hack",
      content: "This prize is awarded to the team whose project excelled in improving mental and/or physical health."
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-graduation-cap"></i>,
      type: "Best High School Hack",
      content: "This prize is awarded to a team of all high school hackers whose project excelled in all areas of judging."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "Best Low Code Hack",
      content: "This prize is awarded to a team whose project utilized low-code tools and platforms such as Figma, Power BI, Tableau, Appian, and Mockplus to make their vision come to life. "
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
      Name: "Kaylin Pham",
      role: "Kaylin Pham - Co-Executive Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/kaylinpham/",
      img: kaylin
    },
    {
      Name: "Morgan Pham",
      role: "Morgan Pham - Co-Executive Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/morgan-pham/",
      img: morgan
    },
    {
      Name: "Kavya Sundaram",
      role: "Kavya Sundaram - External Operations Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/kavyasundaram/",
      img: kavya
    },
  ],
  [
    //Array 2
    {
      Name: "Annie Tran",
      role: "Annie Tran - Judging",
      github: "",
      linkedin: "https://www.linkedin.com/in/annieseinna/s",
      img: annie
    },
    {
      Name: "Rathi Ganesan",
      role: "Rathi Ganesan - Judging",
      github: "",
      linkedin: "https://www.linkedin.com/in/ganesan-bharathi/",
      img: rathi
    },
    {
      Name: "Jenna Krebs",
      role: "Jenna Krebs - Mentorship",
      github: "",
      linkedin: "http://www.linkedin.com/in/jenna-krebs-a76352198",
      img: jenna
    },
  ],
  [
    //Array 3
    {
      Name: "Jan Michalak",
      role: "Jan Michalak - Internal Operations Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/jan-michalak-a65159207s",
      img: jan
    },
    {
      Name: "Terjani Desai",
      role: "Terjani Desai - Events",
      github: "",
      linkedin: "https://www.linkedin.com/in/terjanidesai/",
      img: terjani
    },
    {
      Name: "Vivien Pang",
      role: "Vivien Pang - Logistics",
      github: "",
      linkedin: "https://www.linkedin.com/in/vivien-p-bb63a3186/",
      img: vivien
    }
  ],
  [
    //Array 4
    {
      Name: "Tanya Acharya",
      role: "Tanya Acharya - Marketing Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/tanya-acharya/",
      img: tanya
    },
    {
      Name: "Karen Tran",
      role: "Karen Tran - Graphic Design",
      github: "",
      linkedin: "https://www.linkedin.com/in/karentran01/",
      img: karen
    },
    {
      Name: "Annemarie Ching",
      role: "Annemarie Ching - Technology",
      github: "",
      linkedin: "https://www.linkedin.com/in/annemarie-ching/",
      img: annemarie
    }
  ],
  [
    //Array 5
    {
      Name: "Jordan Horrall",
      role: "Jordan Horrall - Webmaster 💜",
      github: "",
      linkedin: "https://www.linkedin.com/in/jordan-horrall-958222201/",
      img: jordan
    },
    {
      Name: "Aditya Poudyal",
      role: "Aditya Poudyal - Sponsorship Director",
      github: "",
      linkedin: "https://www.linkedin.com/in/adityapoudyal",
      img: aditya
    },
    {
      Name: "Gurleen Singh",
      role: "Gurleen Singh - Company Relations",
      github: "",
      linkedin: "https://www.linkedin.com/in/gurleen-singh-in/",
      img: morgan
    }
  ],
  [
    //Array 6
    {
      Name: "Haritha Chode",
      role: "Haritha Chode - Company Relations",
      github: "",
      linkedin: "https://www.linkedin.com/in/harithachode/",
      img: haritha
    },
    {
      Name: "Diya Khilnani",
      role: "Diya Khilnani - Finance Chair",
      github: "",
      linkedin: "",
      img: diya
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

const sponsorLogos = [
  [{src: peraton}, {src: leidos}, {src: rsm}], //Array 1
  [{src: protiviti}, {src: cvent}, {src: captech}], //Array 2
  [{src: bloomberg}, {src: carmax}, {src: willowtree}], //Array 3
  [{src: ventera}] //Array 4
];

/** Instructions
 * Follow the structure provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        TITLE: "What is HackViolet?",
        label: "What is our mission?",
        content:
        'We strive to educate as many people as we can about the obstacles females (trans and cis) and other minorities face in computing and hope to inspire more unified action through our hackathon. Above all, we believe that people of all genders working together is key to creating an inclusive environment of mutual respect.'      },
      {
        label: "What is a hackathon?",
        content: "A hackathon is an innovative event where teams work on developing tech projects in a limited period of time. Hackathons typically consist of workshops, activities, food, swag, meeting other awesome people in tech, and so much more to keep hackers engaged and fueled throughout the night. "
      },
      {
        label: "Who can attend HackViolet?",
        content: "Any student enrolled in a high school, undergraduate, or graduate program. We are not a female (trans and cis)-only event. We invite students of all genders, majors, and backgrounds. There is absolutely no experience necessary!"
      },
      {
        label: "Female-Empowerment vs. Female-Only",
        content: "HackViolet is a female-empowerment event, but not female-only. We believe in the value of hosting events that bring together people of all genders under a common goal: to make tech an inclusive space that celebrates women (trans and cis) and other minorities. Those who do not identify as female are highly encouraged to participate in the event and join us for a weekend of innovation, camaraderie, and female-empowerment."
      }
    ],
    [
      {
        label: "Do I need to know how to code?",
        content: "Absolutely not! We encourage participants of all skill levels to join us. We will have introductory workshops and access to mentors to teach you everything you need to know!"
      },
      {
        label: "What? Where? When?",
        content: "HackViolet is a 24-hour female-empowerment hackathon and will take place on February 4-5th, 2023 at the Virginia Tech campus. HackViolet will be fully in-person this 2023 season!"
      },
      {
        label: "Do I need a team?",
        content: "If you are planning to demo your project to compete for a prize, you must be in a team of 2-4 people. If you don't have a team yet, no worries! We'll have team formation activities and plenty of ways for you to meet other people!"
      }
      ,
      {
        label: "I have other questions!",
        content: "Feel free to contact us at hackvioletvt@gmail.com"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
 // JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
