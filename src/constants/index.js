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
  meta,
  starbucks,
  tesla,
  shopify,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    links:[
      {
        technology:"JavaScript",
        technology_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEX/71f///8mJib/9Zn/71H/91kbHCV2bzUAACH/9ln/81j/8VckJCYiIiX/+Vn88Vc8OikdHiUPESMABiITFSMZGiQIDCL/+L22r0bg2FESFCPr5FQ1MyhSTy6rpEP161ZnYTKRjD1dWDAuLCdsaTR7dDdGQyydlz/Syk3FvUm6s0eFgTqWjT1WUy/NxUyknUHd0k8xMChAPiqBfTlNSi3x41SzqETUz07EwUuroEJiA+sPAAAIoklEQVR4nO2ciXLaOhSGue41SJYtYxtcjANmX8uSkJD2/V/s2gltwDreMoHqcPXPdNqZ2kKftZ5Fqv1z76r97QpcXYoQvxQhfilC/Po/EX7/dk/6DhB++/ee9A0krN2PFCF+KUL8UoT4pQjxSxHilyLEL0WIX4oQvxQhfilC/FKE+KUI8UsR4pcixC9FiF+KEL8UIX4pQvxShPilCPFLEeKXIsQvRYhfihC/FCF+KUL8UoT4pQjxSxHilyLEL0WIX4oQvxQhfilC/FKE+KUI8UsR4pcixC9FiF+KEL8UIX4pQvxShPilCPFLEUom9qZKr+AhZFSnth0lsu3430ZJ0JsTMmYLKm4Vg0f7znDSa441Sxs3e4PDbhvqvAzkzQn59KGZ0sOB5r7CeLSaPLh+q+6YpqnFfyyn7fpmbx7w4pa8PWGjbaXUaug5LzA9mLqeY2lpmVaLzDpG/tf5K4T1dFXrOYRM309IW6D7LYs8dgwj9wclJzTstSs8f9mS3mbP835QbkJ9/+Dm8iVyvH7elCM1od4h4vADRKZ2NqLMhHxOyvDF8gfZiBIT8l1ZQE3rjjKnVHkJaac8YIw4oRmtKC2h8eqbFQg1b5gxmOUlfHKqAMbTzRJeF2Ul5HO/GqBmtiKwn0pKyMKqgHExA3Dll5SQr1uVCTVvBfVTOQlZqGVNM4l1kSHSgJYMOQlpH+yksTHhao+aS3xgFmr7K3DBkJRwBE2k7sOPwOac28Fx46YesPxGBC/6UhKyF6gJydw+7bAZ5YvexZbcfVxm7b6lJDR+AtsZsjpnMIz1xzMWOWQ0YE1SQvpDnEn9+eVawPjc+92Azdcc80lKQj4QhqH1JFgP/NBN/sdpDWmelS8n4YOwIrTm4q7AmMXWY5GJLyehDnTShdgPWUAc0s9twJqkhIY40bRDYKTx4SjUi9yJUhIykdCBCGt2Cce3lIRAG7aCatGKD0lJSMUF38+w/oolJSEXPWztdf6MmS05CZ+E1cLUwIFYQnISTsSNd2taKtIkSkpCOu8KhBoZfg5RSkJw562Rtf2Z2UZKQth60tznxSeaUUrCGn0G4xWO3wgrM0pKOM8IOdXJNCjaiKYkJyELMl1tbTLZFsZ9zyUnYU0XLcSPx/3no12+s0pKyBZ5YRnLN4chL9lZJSWEzPxzmS3SWBQE8E+SlTC2bvMIk7fIZklLDEhZCWt6cXzU8War4r4qLSGjk+LQheWNVyi9GG9i0axEBNEiz9t8R4a8hEl4pkyQ1PEmYV5OlcSEMeI4P1vopHY7L6FGZsKaET0DZpQok2xCXF79P2L2tFxCRt3aZnk55CasMf3olcpYsPx+BqLkhLGZEY68UmknWT4A6QlrjHce3TKMMSL0vvyEcTNG83aZxAUyhxAxEMb7m3BNusXt6C2BGRUF4Vuq93DsF6Vimi3AqYqEMHkx6s9IwbxaH4n9FA9h3Fft7SAn5zsRkNyGiLCWHLsI1l03p7NaM2Ek4iJMBqS9a0IJQyd5QiNiI4yl26tN5oB0BulGREiYJNNseyRj8RCmU5SESWddZpxT8DupboqUMG5HOgSnHKEwtIRxM27bQE81x/fShrHoHgzCvVwORMyENbqEMvwWd0QIhje81FQjOWHB6VJjKYZS3V+XK+LtCcUshExCxhf5hbFwLOb4/bgs7XqEGUE+IOTSnsL+Uj2cerDd/vEjYrA4nXlzLcL488OV4z2xTgeI0LB37bZGXnOd9vpG/F63IaTRwSVgKpoO9Kuh2NzxpqWZHHyymjlHC+PfAb7XLQgZ7fgtzdlAAZdInOC78zQh04PN6XBlK/NQ2ltpjwJhd371ccj46+YNwz8CbbMVCf1O6jkarT+Mh7yhaGyBHL/jtVeLuHon+82yRLcJX4tGur+4qJNBj9q5Mx92ob2XJi49Gvl53RWf8dX4j+ev3ks7aZltiXvJ+vmAjaeoWcrl5K0zAi/wnia4JmE8fnrnh5PdRqpufCiGWuLJ5KzS4UQ83eyPwMALBSPhrdoVCWk0TDkY/MNFOgFfAkadM/nohcbOhVxNdUe8OyGebduA+eSk3W1fSBh3UNEq7fb2/H3rxRjlO8it6/Y/Km9kHP41/eeVzf9c3JKUFUxA/6k7v5r1xF5G0Ol5h0yWEdV1vRbsmmBC3sXAob0MD4zlO9NVaOg8ls6Cfs+Do6fe/mpeDGhtOjES7enp0SVwfMVsnncrBtp87w/WPeLMRoPB6KlLsvzfzuaKvraMQ4Nvlcs5F+nuLkYYH+aej7WcWDkRDHEN/sqZhjdL3fGQErlcNBmreoj7XNajsMn7SkL2WuWOgJNa63T6bADcRVNWJL09+uLVQs/vYZDMtrA/p0uv+D1YzuzKkRlmP1ftYS5wFQLvf6IvvMkLRFvri/c0IbQI58h6gIyjKnd+nIv0rx8hpYssb3tGnfaggcv75bITLuWDVshX77z1pVehFUknw2zgq8KAr1gY7Az5cuuJVkAk4sHQP8UE44q3KpADnMF3Bftwb5XKRtPMHMMvcdM0yl2h9C7Lu2HGkBGVyvFxuqtcP1oSXip9RY3ffL1l1hcz+t38cHss0guKUphpNK8XX/WlJRdG/IgyXXJX8kSFDVLP+f6WS/olDriymNErGtZWi0zDHG/VlbyJjAdTKyPcbtb9h7mdU6fzcnSjs+m6mXttq+0/DPNPCl3N58142B+1vdYlpem4ZDxZ2hVCMbGtuxuYxBX6REznNQ/LosMlV4xbMEpflsONRQjxfN/3kr/Hg/k2qnhwKSko2u4aT+5bSa77XpbzfOjsI/0v5+ozg+rs5fXnqnM8dpbbIKKcVrxC9lQQo7peC+OSjr9+/Tqufr6+sJKXtN4g9sQYMxJVvh8XKCguiVJaqSw8t+x+VooQvxQhfilC/FKE+KUI8UsR4lcG4T0JIvz+7Z70HSC8VylC/FKE+KUI8UsR4td/k6nhJTi5VrIAAAAASUVORK5CYII=",
      },
      {
        technology:"ReactJS",
        technology_icon:"https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
      }
    ]

  },
  {
    title: "Machine Learning",
    icon: mobile,
    links:[
      {
        technology:"Machine Learning",
        technology_icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAAgEMdKNdy63zmkKkZIi04uIgMYc-lQupQ",
      },
      {
        technology:"NLP",
        technology_icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4eNMwe-KkIWPEP8KUap1lJ0jSDliAzIo7w"
      }
    
    ]
    
  },
  {
    title: "Backend Developer",
    icon: backend,
    links:[
      {
        technology:"Python",
        technology_icon:"data:image/png;base64,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",
      },
      {
        technology:"Django",
        technology_icon:"https://w7.pngwing.com/pngs/609/443/png-transparent-django-original-logo-icon-thumbnail.png",
      },
    
    ]
    
  },
  {
    title: "Cloud",
    icon: creator,
    links:[
      {
        technology:"AWS",
        technology_icon:"data:image/png;base64,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",
      },
      {
        technology:"GCP",
        technology_icon:"data:image/png;base64,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",
      },
    
    ]
    
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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
    points: [
      "Worked on: Python/Django, ReactJS, GraphQL, AWS"
    ],
  },
  {
    title: "SOFTWARE ENGINEER I",
    company_name: "",
    icon: creator,
    iconBg: "#383E56",
    date: "Jun 2021 - July 2022",
    points: [
      "Worked on: Python/Django, ReactJS, GraphQL"
    ],
  },
  {
    title: "SOFTWARE ENGINEER INTERN",
    company_name: "",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jun 2021",
    points: [
      "Worked on: Python/Django, ReactJS, Google Cloud Platform"
    ],
  },
];

const testimonials = [
  {
    event:"Finalist CodeStreet 2020",
    testimonial:
      "Among top 12 finalist teams, received appreciation from jury for innovative prototype.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: amex,
    github_link: "https://github.com/",
    repo_url: null,
    redirect_url:null,
    points:[" Among top 12 finalist teams."," Received appreciation from jury for innovative prototype."]
  },
  {
    event:"Flipkart Grid 2.0",
    testimonial:
      "Qualified pre-final round for Flipkart GRiD 2.0 - Robotics Challenge under the problem statement Autonomous Indoor Drone.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: flipkart_grid,
    github_link: "https://github.com/",
    repo_url: "https://github-readme-stats.vercel.app/api/pin/?username=abhisheksaxena1998&repo=ADR&title_color=ffffff&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21",
    redirect_url:"https://github.com/abhisheksaxena1998/ADR",
    visitors:"https://visitor-badge.laobi.icu/badge?page_id=abhisheksaxena1998/ADR",
    stars:"https://img.shields.io/github/stars/abhisheksaxena1998/ADR",
    forks:"https://img.shields.io/github/forks/abhisheksaxena1998/ADR",
    points:[" Qualified pre-final round for Flipkart GRiD 2.0 - Robotics Challenge under the problem statement Autonomous Indoor Drone."]
  },
  {
    event:"Semi-Finalist Technoutsav 3.0",
    testimonial:
      "TechE thread, theme data science/machine learning.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: technoutsav,
    github_link: "https://github.com/",
    redirect_url:null,
    repo_url: null,
    points:[" TechE thread."," Theme Data Science/Machine Learning."]
  },
  {
    event:"Smart India Hackathon 2020 (Software Edition)",
    testimonial:
      "Nominated for Smart India Hackathon 2020 (Software Edition) from Jaypee Institute of Information Technology.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: smart_india_hackathon,
    github_link: "https://github.com/",
    redirect_url:"https://github.com/abhisheksaxena1998/Malicious-Urlv5",
    repo_url: "https://github-readme-stats.vercel.app/api/pin/?username=abhisheksaxena1998&repo=Malicious-Urlv5&title_color=ffffff&text_color=c9cacc&icon_color=2bbc8a&bg_color=1d1f21",
    visitors:"https://visitor-badge.laobi.icu/badge?page_id=abhisheksaxena1998/Malicious-Urlv5",
    stars:"https://img.shields.io/github/stars/abhisheksaxena1998/Malicious-Urlv5",
    forks:"https://img.shields.io/github/forks/abhisheksaxena1998/Malicious-Urlv5"
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
    image: "https://raw.githubusercontent.com/abhisheksaxena1998/FluidLedger/master/Images/serumger.gif?raw=true",
    source_code_link: "https://github.com/abhisheksaxena1998/Emergency-Blood-Plasma-Notification-System#overview",
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
    image: "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM/blob/master/Images/mudv5.gif?raw=true",
    source_code_link: "https://github.com/abhisheksaxena1998/Malicious-URL-v5-IBM",
  },
  {
    name: "A.I. Powered Safe Browsing Extension (Chromium and Firefox based)",
    description:
      "Always-on detection system (Browser Extension) to provide protection within limited internet connectivity restricted networks, or while connected to a risky WIFI network.",
    tags: [
      {
        name: "jsvascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chrome_extension,
    source_code_link: "https://github.com/abhisheksaxena1998/ChromeExtension-Malicious-URL-v5-IBM",
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
    source_code_link: "https://github.com/abhisheksaxena1998/Deep-Learning-Image-Classification",
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
    source_code_link: "https://github.com/abhisheksaxena1998/Gunlaws-Stance-Detectorv1",
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
    source_code_link: "https://github.com/abhisheksaxena1998/Youtube-Content_analysis",
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
    image: "https://github.com/abhisheksaxena1998/amazon-live-analysis/blob/master/realtime.gif?raw=true",
    source_code_link: "https://github.com/abhisheksaxena1998/amazon-live-analysis",
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
    source_code_link: "https://github.com/abhisheksaxena1998/Reddit-Flair-Detector-Application",
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
    source_code_link: "https://github.com/abhisheksaxena1998/Voice-Assistant-Windows-application-",
  },
];

export { services, technologies, experiences, testimonials, projects };
