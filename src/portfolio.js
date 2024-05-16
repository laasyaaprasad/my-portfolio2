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
  username: "Laasya A Prasad",
  title: "Hi all, I'm Laasya",
  subTitle: emoji(
    "As a passionate and analytical data science graduate student at Northeastern University, I thrive on the challenges of exploring and interpreting data to uncover meaningful insights. Proficient in Python and R, I leverage my skills to extract, transform, and analyze complex datasets. My expertise extends to building powerful ML models, drawing inferences from data, creating compelling visualizations and enhancing data-driven decision-making. Eager to contribute my skills and enthusiasm for data to impactful projects and collaborations. Let's connect!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/laasyaaprasad/",
  gmail: "laasyaaprasad@gmail.com",
  github: "https://github.com/laasyaaprasad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills Snapshot",
  subTitle: "Passionate Data Science Master's Student Ready to Drive Insights and Innovation",
  skills: [
    emoji("📊 Data Analysis: Proficient in analyzing large datasets to uncover patterns and insights"),
    emoji("🔬 Machine Learning: Experience applying ML algorithms to solve real-world problems and optimize processes"),
    emoji("📈 Data Visualization: Skilled in creating compelling visualizations to effectively communicate findings to stakeholders"),
    emoji("💻 Programming: Strong programming skills in Python for data manipulation, statistical analysis, and ML model development"),
    emoji("🔍 SQL: Proficient in SQL for data querying and manipulation in relational databases"),
    emoji("📚 Lifelong Learner: Committed to continuous learning and staying updated with the latest advancements in data science and technology"),
    emoji("🤝 Collaboration: Able to work effectively in cross-functional teams to drive projects from inception to delivery"),
    emoji("📊 Tools & Technologies: Familiar with popular data science libraries and tools including NumPy, pandas, scikit-learn, TensorFlow, and PyTorch"),
    emoji("📊 Data Wrangling: Experience cleaning and preprocessing data to ensure accuracy and reliability in analysis"),
    emoji("📊 Experimentation & Evaluation: Conducting experiments and evaluating model performance to iteratively improve solutions"),
    emoji("📈 Business Acumen: Ability to translate business requirements into data-driven solutions and actionable insights"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Git", 
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-table"
  },
  {
    skillName: "PowerBI",
    fontAwesomeClassname: "fas fa-chart-bar"
  }
],
display: true // Set false to hide this section, defaults to true
 // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2023 - Present (Expected Graduation: May 2025)",
      desc: "Relevant Courses: Data Processing and Management, Algorithms, Supervised Machine Learning, Unsupervised Machine Learning",
      descBullets: [
        "Assisted and guided students, clarified concepts through office hours and held one-on-one sessions",
        "Contributed to the evaluation of assignments and practicums for a class of 100 students, offering feedback for the course CS3800"
      ]
    },
    {
      schoolName: "BMS College of Engineering",
      logo: require("./assets/images/bmsLogo.png"),
      subHeader: "Bachelor of Engineering in Information Science Engineering",
      duration: "September 2019 - August 2023",
      desc: "GPA: 8.85/10",
      descBullets: [
        "Relevant Courses: Machine Learning, Statistics and Discrete Mathematics, Database Management Systems, Data Science Foundations, Programming in Python, Big Data Analysis, Deep Learning"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Languages",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing Platforms",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases",
      progressPercentage: "85%"
    },
    {
      Stack: "Toolkits/Software",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Science Libraries",
      progressPercentage: "90%"
    },
    {
      Stack: "Soft Skills",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software and Data Engineering Co-Op",
      company: "Cisco Systems",
      companylogo: require("./assets/images/ciscoLogo.png"),
      date: "Jan 2023 – June 2023",
      desc: "Conducted EDA on company data, orchestrated extraction, preprocessing and integration of Snowflake and Oracle databases for proactive customer escalation prediction on over 30+ product families. Applied data science techniques around model selection, training data set sampling strategy, model validation and monitoring. Built an ML model for evaluating metrics like precision, recall, and F1 score measurements, reinforced with insightful visualizations using Tableau to build scalable self-serving data tools and facilitate data-driven decision-making."
    },
    {
      role: "Data Science Co-Op",
      company: "KrtrimaIQ Cognitive Solutions",
      companylogo: require("./assets/images/krtrimaiqLogo.png"),
      date: "October 2022 – December 2022",
      desc: "Engineered an NLP model to streamline web scraping of educational websites, optimizing data categorization, particularly for text extraction and classification within unstructured data. Set up databases and further enhanced data processing capabilities through the integration of specialized libraries tailored for text tokenization and reduced latency by 30%. Expanded data accessibility by leveraging open-source APIs to translate extracted information into three regional languages."
    },
    {
      role: "Research and Development Summer Intern",
      company: "Hewlett Packard Enterprise",
      companylogo: require("./assets/images/hpeLogo.png"),
      date: "April 2022 – September 2022",
      desc: "Led a team of four in the development of an automated data preprocessing program utilizing Python, enhancing data preparation. Collaboratively implemented measures including node attestation, cloud service identity, and authentication, leveraging CNCF's SPIRE and SPIFFE technologies, resulting in a 20% security enhancement. Built a secure zero-trust environment, simulated the workload API interaction and data retrieval using a python script in a docker container. Secured 3rd place in HPE CTY program and won a research grant."
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "Projects showcasing technical skills and expertise",
  projects: [
    {
      image: require("./assets/images/diabetesPrediction.jpg"),
      projectName: "Early Diabetes Prediction",
      projectDesc: "Developed a comprehensive end-to-end machine learning model to forecast the onset of diabetes by employing advanced techniques such as feature selection, bagging, and boosting. Engineered, debugged, and fine-tuned the model, achieving an 86% accuracy rate, guiding actionable decisions in diabetes prediction."
    },
    {
      image: require("./assets/images/objectDetection.jpg"),
      projectName: "Object Detection in the Dark",
      projectDesc: "Created a Python script to enhance dark images and detect objects in low-lit environments using YOLOv5, v7, and v8. Improved model stability with batch normalization and, alongside the curation of a specialized dataset using web scraping and data augmentation and data modeling. Performed rigorous testing by curating a custom neural network that led to a 40% reduction in false positives values.",
      footerLink: [
        {
          name: "Visit IEEE Xplore",
          url: "https://ieeexplore.ieee.org/document/10170349"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, that I have done !",

  achievementsCards: [
    {
      title: "Data Science: R Basics",
      subtitle:
        "HarvardX - Issued Dec 2020 - Credential ID 7830ee6549114640abc7bf896c50d3f4",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "HarvardX Logo",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.edx.org/professional-certificate/harvardx-data-science"
        }
      ]
    },
    {
      title: "Blockchain Technology",
      subtitle:
        "University of California, Berkeley - Issued Jul 2020 - Credential ID a8c261831e4d4a08896694f2de51b13f",
      image: require("./assets/images/berkeleyLogo.png"),
      imageAlt: "University of California, Berkeley Logo",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.edx.org/professional-certificate/blockchain-fundamentals"
        }
      ]
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle:
        "IBM - Issued May 2020 - Credential ID 9JXP8XYUA4DV",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Show credential",
          url: "https://www.coursera.org/learn/cloud-computing"
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
    "Discuss co-op oppurtunities or just want to say hi? My Inbox is open for all.",
  number: "+1(425)326-2096",
  email_address: "laasyaaprasad@gmail.com"
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
