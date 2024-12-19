/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Taymoor Ghazanfar",
  title: "Hi, I'm Taymoor",
  subTitle: emoji(
    "A Passionate Android Developer 🚀 Delivering High-Performance Apps Used by Over 20M+ Users"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/taymoorgr",
  linkedin: "https://www.linkedin.com/in/taymoorgr/",
  gmail: "taymoor.gr@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/23787625/taymoor-ghazanfar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Craft interactive, high-performance mobile apps that drive meaningful impact for users & businesses",
  skills: [
    emoji(
      "⚡ Expert in architecting scalable, high-performance Android apps with MVVM and Clean Architecture"
    ),
    emoji("⚡ Proficient in leveraging Jetpack components and modern Android development practices with Kotlin"),
    emoji("⚡ Skilled in resolving complex bugs and optimizing performance using profiling tools and analytics")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-brands fa-korvue"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-brands fa-java"
    },
    {
      skillName: "Android SDK",
      fontAwesomeClassname: "fab fa-brands fa-android"
    },
    {
      skillName: "Jetpack Compose",
      fontAwesomeClassname: "fab fa-brands fa-uikit"
    },
    {
      skillName: "Coroutines/Flows",
      fontAwesomeClassname: "fas fa-solid fa-code"
    },
    {
      skillName: "MVVM",
      fontAwesomeClassname: "fas fa-solid fa-sitemap"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-solid fa-globe"
    },
    {
      skillName: "Google Play Console",
      fontAwesomeClassname: "fab fa-brands fa-google-play"
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "UI/UX Design",
      fontAwesomeClassname: "fas fa-duotone fa-regular fa-mobile"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-brands fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International Islamic University",
      logo: require("./assets/images/iiui_logo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2017 - August 2021",
      desc: "Developed an innovative carpool solution for Android and authored the thesis, focusing on optimizing ride-sharing efficiency and and cost-effectiveness for businesses."
    },
    {
      schoolName: "Pakistan International School Jeddah",
      logo: require("./assets/images/pisj_logo.jpg"),
      subHeader: "FSc Computer Science",
      duration: "May 2014 - May 2016"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Threads & Structured Concurrency",
      progressPercentage: "80%"
    },
    {
      Stack: "Profiling & Optimizations", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Android Developer",
      company: "Tectah",
      companylogo: require("./assets/images/tectah_logo.jpg"),
      date: "Jul 2024 – Present",
      descBullets: [
        "Led development of a feature-rich EPOS application with seamless hardware integration and optimized performance.",
        "Reduced build times by 25% and achieved a 0% crash and ANR rate for exceptional app stability.",
        "Supported company expansion by driving a 50% increase in customer acquisition through innovative solutions."
      ]
    },
    {
      role: "Android Developer",
      company: "Funsol Technologies",
      companylogo: require("./assets/images/funsol_logo.jpg"),
      date: "Sep 2023 – Jun 2024",
      descBullets: [
        "Developed AI-powered antivirus and multi-tool Android apps, driving 10M+ downloads and a 15% revenue increase through effective monetization strategies.",
        "Led workshops on Android best practices, fostering team growth and enhancing development standards.",
        "Recognized with the Emerging Talent of the Year award for outstanding contributions and impact."
      ]
    },
    {
      role: "Android Developer",
      company: "CodesOrbit",
      companylogo: require("./assets/images/codesorbit_logo.jpg"),
      date: "Dec 2022 – Aug 2023",
      descBullets: [
        "Engineered the Frankzone food delivery app, integrating real-time tracking, 3D secure payments, and video conferencing features.",
        "Developed reusable library modules hosted on jitpack.io, improving team efficiency by 25%.",
        "Architected a cloud storage app that reduced file upload sizes by 30%, optimizing app performance."
      ]
    },
    {
      role: "Android Developer",
      company: "Mawgif",
      companylogo: require("./assets/images/mawgif_logo.png"),
      date: "Nov 2021 – Oct 2022",
      descBullets: [
        "Crafted and maintained the Mawgif car parking app, serving 500,000+ users with seamless functionality.",
        "Utilized advanced Android technologies (MVVM, Dagger, Retrofit, RxJava) to build a scalable and maintainable app.",
        "Integrated payment gateways, location services, and multilingual support for enhanced user experience."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Companies, and apps where I’ve built and shaped the technology.",
  projects: [
    {
      image: require("./assets/images/app_foodb.png"),
      projectName: "Foodb",
      projectDesc:
        "An Award-winning EPOS and payment provider serving across the UK",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodb.co.uk/products/epos"
        }
      ]
    },
    {
      image: require("./assets/images/app_mawgif.png"),
      projectName: "Mawgif",
      projectDesc:
        "Parking solutions app for 500,000+ users across the Middle East.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.mawgif"
        },
        {
          name: "Visit Website",
          url: "https://www.mawgif.com/"
        }
      ]
    },
    {
      image: require("./assets/images/app_tap_donate.png"),
      projectName: "Tap Donate",
      projectDesc:
        "Secure and efficient kiosk platform for quick, contactless donations for charities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tapdonate.co.uk/"
        }
      ]
    },
    {
      image: require("./assets/images/app_antivirus.png"),
      projectName: "Anti-virus",
      projectDesc:
        "AI Powered antivirus app with virus removal, app scanning, and network protection.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.antivirus.viruscleaner.mobilesecurity"
        }
      ]
    },
    {
      image: require("./assets/images/app_cosmo.png"),
      projectName: "Cosmo Watch",
      projectDesc:
        "Smartwatch app for kids safety with messaging, calls, GPS tracking, and safety alerts",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.cosmo.smartwatch"
        },
        {
          name: "Visit Website",
          url: "https://cosmotogether.com/"
        }
      ]
    },
    {
      image: require("./assets/images/app_phoneskope.png"),
      projectName: "Phone Skope",
      projectDesc:
        "A smart video editor designed specifically for wildlife & nature photographers.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.phonescope.camera2"
        },
        {
          name: "Visit Website",
          url: "https://codesorbit.com/portfolio/phoneskope/"
        }
      ]
    },
    {
      image: require("./assets/images/app_blissiree.png"),
      projectName: "Blissiree",
      projectDesc:
        "A minimalist mental health app with a comforting UI to overcome anxiety & depression.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.blissiree"
        },
        {
          name: "Visit Website",
          url: "https://codesorbit.com/portfolio/phoneskope/"
        }
      ]
    },
    {
      image: require("./assets/images/app_voice_analyzer.png"),
      projectName: "Real-time Voice Analyzer",
      projectDesc: "A cutting-edge voice detection tool for identifying respiratory viruses.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.embarcadero.AIVA.RealTime"
        },
        {
          name: "Visit Website",
          url: "https://codesorbit.com/portfolio/real-time-voice-analyzer/"
        }
      ]
    },
    {
      image: require("./assets/images/app_phone_cleaner.png"),
      projectName: "Phone Cleaner",
      projectDesc:
        "Clean your phone in one tap: junk removal, large files finder, duplicate finder.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=phonecleaner.viruscleaner.junkcleaner.cachecleaner.androidmaster"
        }
      ]
    },
    {
      image: require("./assets/images/app_multi_tools.png"),
      projectName: "Smart Tools",
      projectDesc:
        "App locker, scan documents, translate languages, read PDFs, weather updates and more!",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=tools.qrcode.scanner.language.translator.live.weather.forcast.applock"
        }
      ]
    },
    {
      image: require("./assets/images/app_business_card.png"),
      projectName: "Business Card Maker",
      projectDesc:
        "Design stunning business cards: customizable templates, logos, QR codes, and more.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.business.visiting.card.creator.editor"
        }
      ]
    },
    {
      image: require("./assets/images/app_garden_editor.png"),
      projectName: "Photo Frame Editor",
      projectDesc:
        "Transform your photos with nature inspired backgrounds, frames, and stickers.",
      footerLink: [
        {
          name: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.flower.garden.photo.frames.editor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors and Accomplishments 🏆"),
  subtitle:
    "Achievements, Awards and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Top Talent of the Year",
      subtitle:
        "Honored with the Top Talent of the Year award for consistently delivering quality projects on time, exceeding expectations, and contributing to process improvements.",
      image: require("./assets/images/funsol_logo_2.jpg"),
      imageAlt: "Funsol Logo",
      footerLink: []
    },
    {
      title: "Pull Shark",
      subtitle:
        "Recognized for significant contributions to open source projects through GitHub pull requests.",
      image: require("./assets/images/pull_shark_logo.png"),
      imageAlt: "Pull Shark Logo",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/users/taymoorgr/achievements/pull-shark"
        }
      ]
    },

    {
      title: "Arctic Code Vault Contributor",
      subtitle:
        "Recognized for contributing to open-source projects preserved in the GitHub Arctic Code Vault, a digital archive of software history.",
      image: require("./assets/images/arctic_vault_logo.png"),
      imageAlt: "Arctic Vault Logo",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/users/taymoorgr/achievements/arctic-code-vault-contributor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out to discuss a project or simply connect—my inbox is always open.",
  number: "+92-306-918-5958",
  email_address: "taymoor.gr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
