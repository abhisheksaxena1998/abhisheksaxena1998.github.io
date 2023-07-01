import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  movie_ticket_booking_system,
  autonomous_indoor_drone,
  chrome_extension,
  confusion_matrix,
  malicious_url_detector,
  gunlaws_stance_detector,
  threejs,
  content_analysis,
  flair_detector,
  voice_assistant,
  technoutsav,
  smart_india_hackathon,
  flipkart_grid,
  amex,
  serum_ledger_archtitecture,
  serum_ledger_notification_demo,
  serum_ledger,
  ai_phishing_detector_extension_usage_statistics,
  ai_phishing_detector_extension_statistics,
  ticket_booking_system_usecases,
  amazon_products_analysis_nlp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    links: [
      {
        technology: "JavaScript",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        technology: "ReactJS",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/3459/3459528.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    icon: mobile,
    links: [
      {
        technology: "Machine Learning",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/2083/2083213.png",
      },
      {
        technology: "NLP",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/2845/2845825.png",
      },
    ],
  },
  {
    title: "Backend Developer",
    icon: backend,
    links: [
      {
        technology: "Python",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      },
      {
        technology: "Django",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/9307/9307630.png",
      },
    ],
  },
  {
    title: "Cloud",
    icon: creator,
    links: [
      {
        technology: "AWS",
        technology_icon:
          "https://cdn.icon-icons.com/icons2/2407/PNG/512/aws_icon_146074.png",
      },
      {
        technology: "GCP",
        technology_icon:
          "https://cdn-icons-png.flaticon.com/512/873/873117.png",
      },
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SOFTWARE ENGINEER II",
    company_name: "",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2022 – Present",
    points: ["Worked on: Python/Django, ReactJS, GraphQL, AWS"],
  },
  {
    title: "SOFTWARE ENGINEER I",
    company_name: "",
    icon: creator,
    iconBg: "#383E56",
    date: "Jun 2021 - July 2022",
    points: ["Worked on: Python/Django, ReactJS, GraphQL"],
  },
  {
    title: "SOFTWARE ENGINEER INTERN",
    company_name: "",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jun 2021",
    points: ["Worked on: Python/Django, ReactJS, Google Cloud Platform"],
  },
];

const testimonials = [
  {
    event: "Finalist CodeStreet 2020",
    testimonial:
      "Among top 12 finalist teams, received appreciation from jury for innovative prototype.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: amex,
    github_link: "https://github.com/",
    repo_url: null,
    redirect_url: null,
    points: [
      " Among top 12 finalist teams.",
      " Received appreciation from jury for innovative prototype.",
    ],
  },
  {
    event: "Flipkart Grid 2.0",
    testimonial:
      "Qualified pre-final round for Flipkart GRiD 2.0 - Robotics Challenge under the problem statement Autonomous Indoor Drone.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: flipkart_grid,
    github_link: "https://github.com/",
    repo_url:
      "https://github-readme-stats.vercel.app/api/pin/?username=abhisheksaxena1998&repo=ADR&title_color=ffffff&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21",
    redirect_url: "https://github.com/abhisheksaxena1998/ADR",
    visitors:
      "https://visitor-badge.laobi.icu/badge?page_id=abhisheksaxena1998/ADR",
    stars: "https://img.shields.io/github/stars/abhisheksaxena1998/ADR",
    forks: "https://img.shields.io/github/forks/abhisheksaxena1998/ADR",
    points: [
      " Qualified pre-final round for Flipkart GRiD 2.0 - Robotics Challenge under the problem statement Autonomous Indoor Drone.",
    ],
  },
  {
    event: "Semi-Finalist Technoutsav 3.0",
    testimonial: "TechE thread, theme data science/machine learning.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: technoutsav,
    github_link: "https://github.com/",
    redirect_url: null,
    repo_url: null,
    points: [" TechE thread.", " Theme Data Science/Machine Learning."],
  },
  {
    event: "Smart India Hackathon 2020 (Software Edition)",
    testimonial:
      "Nominated for Smart India Hackathon 2020 (Software Edition) from Jaypee Institute of Information Technology.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: smart_india_hackathon,
    github_link: "https://github.com/",
    redirect_url: "https://github.com/abhisheksaxena1998/Malicious-Urlv5",
    repo_url:
      "https://github-readme-stats.vercel.app/api/pin/?username=abhisheksaxena1998&repo=Malicious-Urlv5&title_color=ffffff&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21",
    visitors:
      "https://visitor-badge.laobi.icu/badge?page_id=abhisheksaxena1998/Malicious-Urlv5",
    stars:
      "https://img.shields.io/github/stars/abhisheksaxena1998/Malicious-Urlv5",
    forks:
      "https://img.shields.io/github/forks/abhisheksaxena1998/Malicious-Urlv5",
  },
];

const projects = [
  {
    name: "Serum Ledger",
    description:
      "A web application to make Blood/Plasma donations in efficient way, equipped with a Browser Extension",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: serum_ledger,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Emergency-Blood-Plasma-Notification-System#emergency-notification-system",
    detailed_content: {
      title: "Serum Ledger",
      description:
        "A web application to make Blood/Plasma donations in efficient way with an always on extension that detects live location (Latitude, Longitude) reverse geocodes it and notifies if there are any acceptors and donors in vicinity with measured accuracy.",
      image: serum_ledger_archtitecture,
      image_text: "Serum Ledger overall flow",
      demonstration: {
        title: "Chrome extension",
        description: "Notification System demonstration",
        resource: serum_ledger_notification_demo,
      },
    },
  },

  {
    name: "Anti-Phishing solution",
    description:
      "Revamped Malicious URL Detector, that increased its accuracy by 25% and has enabled Continuous Delivery and a Toolchain which can be used to automate builds, tests, deployments. Django REST framework is used here that uses a REST API call.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM/blob/master/Images/mudv5.gif?raw=true",
    source_code_link:
      "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM",
    detailed_content: {
      title: "Anti-Phishing solution using Machine Learning",
      description:
        "Revamped Malicious URL Detector, that increased its accuracy by 25% and has enabled Continuous Delivery and a Toolchain which can be used to automate builds, tests, deployments. Django REST framework is used here that uses a REST API call.",
      image:
        "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM/blob/master/Images/mudv5.gif?raw=true",
      image_text: "A.I. Anti-Phishing solution",
      demonstration: {
        has_youtube_content: true,
        youtube_embed_link: "https://www.youtube.com/embed/-6fd996HWrQ",
      },
    },
  },
  {
    name: "A.I. Powered Safe Browsing Extension (Chromium and Firefox based)",
    description:
      "Always-on detection system (Browser Extension) to provide protection within limited internet connectivity restricted networks, or while connected to a risky WIFI network.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chrome_extension,
    source_code_link:
      "https://github.com/abhisheksaxena1998/ChromeExtension-Malicious-URL-v5-IBM",

    detailed_content: {
      title:
        "A.I. Powered Safe Browsing Extension (Chromium and Firefox based)",
      description:
        "Implemented through REST APIs and JavaScript an Always-on detection system (Browser Extension) to provide protection within limited internet connectivity restricted networks, or while connected to a risky WIFI network. Web Browser extension that consumes very little data and is extremely fast. Machine Learning backend based on dynamic features like WHOIS, ALEXA RANK to predict safety status of a URL. Django REST API that is linked to machine learning model through an endpoint of web application. Though the Chrome browser enables safe browsing by default but that is not sufficient against exponentially growing phishing sites. It is proved that this Extension is efficient than Google safe browsing. Being prepared with Safe Browsing Extension can help world deal with cybercriminals better.",
      image: ai_phishing_detector_extension_statistics,
      image_text: "Firefox addon statistics",
      demonstration: {
        title: "Firefox addon's statistics",
        description: "ACTIVE USERS IN 22 COUNTRIES INCLUDING (US, FR, IN, GB)",
        resource: ai_phishing_detector_extension_usage_statistics,
      },
    },
  },
  {
    name: "Movie ticket booking system using REST APIs",
    description:
      "An endpoint to book a ticket using a user's name, phone number, and timings.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Backend",
        color: "pink-text-gradient",
      },
    ],
    image: movie_ticket_booking_system,
    source_code_link: "https://github.com/abhisheksaxena1998/Assignment",
    detailed_content: {
      title: "Movie ticket booking system using REST APIs",
      description: "Implemented a Movie ticket booking system using REST APIs",

      demonstration: {
        title: "Supported usecases",
        description: "",
        resource: ticket_booking_system_usecases,
      },
    },
  },
  {
    name: "Autonomous Indoor Drone.",
    description:
      "An Autonomous drone that scans and analyzes the environment, computes information about open paths on the track through which it passes autonomously.",
    tags: [
      {
        name: "image-processing",
        color: "blue-text-gradient",
      },
      {
        name: "rplidar",
        color: "green-text-gradient",
      },
      {
        name: "drone",
        color: "pink-text-gradient",
      },
    ],
    image: autonomous_indoor_drone,
    source_code_link: "https://github.com/abhisheksaxena1998/ADR",
    detailed_content: {
      title: "Autonomous Indoor Drone.",
      description:
        "A level 3 autonomous drone that can pass through gates/windows in indoor environment.",
      image:
        "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM/blob/master/Images/mudv5.gif?raw=true",
      image_text: "Autonomous Indoor Drone.",
      demonstration: {
        has_youtube_content: true,
        youtube_embed_link: "https://www.youtube.com/embed/diFjEheEhRY",
      },
    },
  },
  {
    name: "Classify species of monkeys using CNN (Convolutional Neural Network)",
    description:
      "A Deep Learning Classifier to classify various species of Monkeys. ResNet architecture is used here as it tackles the degradation problem most common in deep networks, where the model accuracy gets saturated and then degrades rapidly. Confusion Matrix : The diagonal elements represent the number of images for which the predicted label is equal to the true label, while off-diagonal elements are those that are mislabeled by the classifier.",
    tags: [
      {
        name: "image-processing",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: confusion_matrix,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Deep-Learning-Image-Classification",
    detailed_content: {
      title: "Classify species of monkeys using CNN",
      description:
        "A Deep Learning Classifier to classify various species of Monkeys. ResNet architecture is used here as it tackles the degradation problem most common in deep networks, where the model accuracy gets saturated and then degrades rapidly. Confusion Matrix : The diagonal elements represent the number of images for which the predicted label is equal to the true label, while off-diagonal elements are those that are mislabeled by the classifier.",

      demonstration: {},
    },
  },
  {
    name: "Malicious URL Detector Application",
    description:
      "A tool that detects whether URL is legitimate or malicious using machine learning. Integrated with Google Chrome Extension to detect whether the page is safe or not. Implemented with an API that returns status of safe or unsafe site.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: malicious_url_detector,
    source_code_link: "https://github.com/abhisheksaxena1998/Malicious-Urlv5",
    detailed_content: {
      title: "Malicious URL Detector Application",
      description:
        "A tool that detects whether URL is legitimate or malicious using machine learning. Integrated with Google Chrome Extension to detect whether the page is safe or not. Implemented with an API that returns status of safe or unsafe site.",

      demonstration: {},
    },
  },
  {
    name: "Gun laws Stance Detector",
    description:
      "Detects stance for controversial topic 'Gun-laws' in USA, using Data Science, Machine Learning and Deep Learning Models. It prompts for a tweet from a user and returns appropriate stance, along with detailed Data Analysis.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: gunlaws_stance_detector,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Gunlaws-Stance-Detectorv1",
    detailed_content: {
      title: "Gun laws Stance Detector",
      description:
        "Detects stance for controversial topic 'Gun-laws' in USA, using Data Science, Machine Learning and Deep Learning Models. It prompts for a tweet from a user and returns appropriate stance, along with detailed Data Analysis.",

      demonstration: {},
    },
  },
  {
    name: "YouTube Content Analysis Application",
    description:
      "This is a YouTube Content Analysis application that prompts for a YouTube video URL and returns live content analysis of that respective like number of hate speech or offensive language used in that video.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: content_analysis,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Youtube-Content_analysis",
    detailed_content: {
      title: "YouTube Content Analysis Application",
      description:
        "This is a YouTube Content Analysis application that prompts for a YouTube video URL and returns live content analysis of that respective like number of hate speech or offensive language used in that video.",

      demonstration: {},
    },
  },

  {
    name: "Amazon's Product Case Study using NLP",
    description:
      "This Project answers following questions using Data Science and Machine Learning on webscrapped Amazon reviews.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: amazon_products_analysis_nlp,
    source_code_link:
      "https://github.com/abhisheksaxena1998/amazon-live-analysis",
    detailed_content: {
      title: "Amazon's Product Case Study using NLP",
      description:
        "This Project answers following questions using Data Science and Machine Learning on webscrapped Amazon reviews.",

      demonstration: {},
    },
  },

  {
    name: "Reddit Flair Detector Application",
    description:
      "It is a Reddit Flair Detector that takes a dynamic website as an input and predicts 'flair' for the given URL based upon its title, top comments of other users and URL based upon a trained machine learning model.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: flair_detector,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Reddit-Flair-Detector-Application",
    detailed_content: {
      title: "Reddit Flair Detector Application",
      description:
        "It is a Reddit Flair Detector that takes a dynamic website as an input and predicts 'flair' for the given URL based upon its title, top comments of other users and URL based upon a trained machine learning model.",

      demonstration: {},
    },
  },

  {
    name: "Voice Assistant Windows Application",
    description:
      "A voice assistant based on python, It performs tasks using commands user give through voice.It can automate tasks and in the end of the day can save your keystrokes as well as your time.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: voice_assistant,
    source_code_link:
      "https://github.com/abhisheksaxena1998/Voice-Assistant-Windows-application-",
    detailed_content: {
      title: "Voice Assistant Windows Application",
      description:
        "A voice assistant based on python, It performs tasks using commands user give through voice.It can automate tasks and in the end of the day can save your keystrokes as well as your time.",

      demonstration: {
        has_youtube_content: true,
        youtube_embed_link: "https://www.youtube.com/embed/5rh-TRjJh3g",
      },
    },
  },
];

export { services, technologies, experiences, testimonials, projects };
