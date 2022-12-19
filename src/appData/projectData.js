const CPP = 'C++';
const CSS = 'CSS';
const DJANGO = 'Django';
const DOCKER = 'Docker';
const EMBEDDED_SYSTEMS = 'Embedded Systems';
const FLASK = 'Flask';
const GRAPHQL = 'GraphQL';
const HTML = 'HTML';
const IOT = 'IOT';
const JAVA = 'Java';
const JAVASCRIPT = 'Javascript';
const KAFKA = 'Kafka';
const MATLAB = 'MATLAB';
const MONGO = 'MongoDB'
const MYSQL = 'MySQL';
const NODE = 'Node.js';
const PHP = 'PHP';
const PRESTO = 'Presto';
const PYTHON = 'Python';
const REACT = 'React';
const RUBY = 'Ruby';
const SIGNALFX = 'SignalFX';
const SORBET = 'Sorbet';
const SPLUNK = 'Splunk';
const SPRING = 'Spring';
const TERRAFORM = 'Terraform';
const TYPESCRIPT = 'Typescript';

const PROJECT_DATA = [
  {
    name: "Stripe Issuing",
    description: "Create physical and virtual cards for your business.",
    summary: "I spent a year working at Stripe on the issuing team. Some highlights of this were building out the Issuing Tokens API from scratch and improving monitoring, servicing, and reliability for Stripe Issuing disputes.",
    imageThumbnail: "images/stripe-logo.png",
    imageMain: "images/stripe-issuing.png",
    technologies: [GRAPHQL, MONGO, PRESTO, REACT, RUBY, SIGNALFX, SORBET, SPLUNK, TERRAFORM, TYPESCRIPT],
    repositoryLink: null,
    demoLink: "https://stripe.com/issuing",
  },
  {
    name: "Indeed Hiring Events",
    description: "Hosted online and in-person recruiting events.",
    summary: "I worked on Indeed Hiring Events for about a year. During this time, I helped build and maintain a scalable event-driven notification pipeline for servicing 50k+ Email and SMS messages per day. This involved migrating functionality from a legacy Django monolith into a more manageable and efficient micro-service based architecture.",
    imageThumbnail: "images/indeed-hiring-events-logo.png",
    imageMain: "images/indeed-hiring-events.png",
    technologies: [PYTHON, DJANGO, JAVA, SPRING, MYSQL, DOCKER, TERRAFORM, KAFKA],
    repositoryLink: null,
    demoLink: "https://www.indeed.com/employers/hiring-events",
  },
  {
    name: "Indeed Hire",
    description: "Recruiting services focused on helping employers manage hiring from start to finish.",
    summary: "I worked on Indeed Hire for almost 2 years. During this time, I maintained and augmented in-house recruiting software, including working with product members to design and implement new features for managing 40k+ daily applicants.",
    imageThumbnail: "images/indeed-hire-logo.png",
    imageMain: "images/indeed-hire.png",
    technologies: [PYTHON, DJANGO, JAVA, JAVASCRIPT, REACT, MYSQL, DOCKER],
    repositoryLink: null,
    demoLink: "https://www.indeed.com/hire",
  },
  {
    name: "Macro Tracking App",
    description: "Macronutrition tracking app made using React, Node, and MySQL.",
    summary: "The initial motivation for this project was to gain more experience with SQL, but it ended up being the perfect candidate for learning React as well due to it being a dynamic data-driven single page application. The front-end was made using React.js and Google's Material design styling, which connects to a backend API made using Node.js that handles user validation and database interactions.",
    imageThumbnail: "images/macro.png",
    imageMain: "images/macro-lg.png",
    technologies: [REACT, NODE, MYSQL],
    repositoryLink: "https://github.com/mkogerd/macro-tracker",
    demoLink: null,
  },
  {
    name: "Black Hole IO Game",
    description: "Online multiplayer game implementing 2D gravity physics created with html canvas, javascript, and node.js.",
    summary: "This is an online multiplayer \"io\" game implementing 2D gravity physics created with html canvas, javascript, and node.js. The networking is handled using a custom binary messaging protocol built on top of WebSockets.",
    imageThumbnail: "images/blackhole-sm.png",
    imageMain: "images/blackhole.png",
    technologies: [HTML, JAVASCRIPT, NODE, MYSQL, DOCKER],
    repositoryLink: "https://github.com/mkogerd/gravity-game",
    demoLink: null,
  },
  {
    name: "Database of Dance",
    description: "Accessible database of dance videos made using flask and compiled python based webscraping.",
    summary: "This project was something a friend and I started at a hackathon and then continued to work on until it was more presentable. The idea was to collect a bunch of youtube videos linked from libraryofdance.org and make them easily accessible from a single interface. Beautiful Soup was used to scrape the data from the original website which was organized in a .csv file. Then, with the aid of a python library called youtube_dl, all of these videos were downloaded and downsampled to a lower resolution in order to reduce load time. We then used flask to dynamically populate html templates using our .csv data and create the website for us. The current live version is deployed using gunicorn and an nginx webserver.",
    imageThumbnail: "images/dbod-sm.jpg",
    imageMain: "images/dbod.png",
    technologies: [FLASK, PYTHON, JAVASCRIPT, HTML, CSS],
    repositoryLink: "https://github.com/mkogerd/database-of-dance",
    demoLink: null,
  },
  {
    name: "Still-Frame Motion Tracking",
    description: "Motion tracking and video extraction from a still camera frame.",
    summary: "This was a project for my image processing class. The idea came from another one of my projects where I wanted to cut down on the blank space in some dance videos. It uses MATLAB and basic image processing filters.",
    imageThumbnail: "images/tracking-sm.jpg",
    imageMain: "images/tracking2.mp4",
    technologies: [MATLAB],
    repositoryLink: "https://github.com/mkogerd/EE371R-Motion-Tracking",
    demoLink: "https://github.com/mkogerd/EE371R-Motion-Tracking/blob/master/Darden(mkd788)_project_report.pdf",
  },
  {
    name: "LED Bike Display",
    description: "Device that produces images on a bike wheel using rotating LEDs.",
    summary: "This project uses Matlab, an Arduino, and some individually addressable RGB LEDs (WS2812B) mounted to a bike wheel. Matlab is used to convert various images to arrays of color-averaged radial and transverse components, which are then manually loaded onto an arduino. The RPMs are calculated using a magnetic switch on the wheel. The position of the LED strip is approximated using this tempo, and the corresponding color for each LED is then selected from the array.",
    imageThumbnail: "images/bike-sm.jpg",
    imageMain: "images/bike.gif",
    technologies: [MATLAB, CPP, EMBEDDED_SYSTEMS],
    repositoryLink: "https://github.com/mkogerd/BikeDisplay",
    demoLink: null,
  },
  {
    name: "IOT Desk Lights",
    description: "Control my desk lights anytime, anywhere.",
    summary: "This project uses PHP, Javascript, HTML, and an Arduino. HTML/JS is used for the user interface, and PHP is used to read and write color values to a server-side .txt file. A program running on my computer polls this .txt file, sends the value to an arduino via USB serial connection, which then controls the led strip through a digital I/O pin using the Adafruit NeoPixel library.",
    imageThumbnail: "images/desk-blue-sm.jpg",
    imageMain: "images/desk-red.jpg",
    technologies: [PHP, JAVASCRIPT, HTML, EMBEDDED_SYSTEMS, IOT],
    repositoryLink: "https://github.com/mkogerd/iot-leds",
    demoLink: null,
  },
  {
    name: "Lyric Scroller",
    description: "Hands-free solution for reading large blocks of text on small screens.",
    summary: "A hands-free solution for reading large blocks of text on small screens. Uses CSS, HTML, javascript and just a wee bit of JQuery.",
    imageThumbnail: "images/lyric-scroll.png",
    imageMain: "images/lyric-scroll.png",
    technologies: [JAVASCRIPT, HTML, CSS],
    repositoryLink: "https://github.com/mkogerd/lyric-scroll",
    demoLink: null,
  },
];

export default PROJECT_DATA;