const CPP = 'C++';
const CSS = 'CSS';
const EMBEDDED_SYSTEMS = 'Embedded Systems';
const FLASK = 'Flask';
const HTML = 'HTML';
const IOT = 'IOT';
const JAVASCRIPT = 'Javascript';
const MATLAB = 'MATLAB';
const MYSQL = 'MySQL';
const NODE = 'Node.js';
const PHP = 'PHP';
const PYTHON = 'Python';
const REACT = 'React';

const PROJECT_DATA = [
  {
    name: "Macro Tracking App",
    description: "Macronutrition tracking app made using React, Node, and MySQL.",
    summary: "This was initially just a project to get some practice with SQL, but it ended up being a really good option to make something with React due to it being a dynamic data-driven single page application. The front-end was made using React.js and Google's Material design styling, which connects to a backend API made using Node.js that handles user validation and database interactions.",
    image: "images/macro.png",
    technologies: [REACT, NODE, MYSQL],
  },
  {
    name: "Black Hole IO Game",
    description: "Online multiplayer game implementing 2D gravity physics created with html canvas, javascript, and node.js.",
    summary: "This is an online multiplayer \"io\" game implementing 2D gravity physics created with html canvas, javascript, and node.js. The networking is handled using a binary messaging protocol built on top of WebSockets. This is a work in progress, so future game logic optimizations and added features like mobile support will hopefully improve the game.",
    image: "images/blackhole-sm.png",
    technologies: [HTML, JAVASCRIPT, NODE, MYSQL],
  },
  {
    name: "Still-Frame Motion Tracking",
    description: "Motion tracking and video extraction from a still camera frame.",
    summary: "This was a project for my image processing class. The idea came from another one of my projects where I wanted to cut down on the blank space in some dance videos. It uses MATLAB and basic image processing filters.",
    image: "images/tracking-sm.jpg",
    technologies: [MATLAB],
  },
  {
    name: "Database of Dance",
    description: "Accessible database of dance videos made using flask and compiled python based webscraping.",
    summary: "This project was something a friend and I started at a hackathon and then continued to work on until it was more presentable. The idea was to collect a bunch of youtube videos linked from libraryofdance.org and make them easily accessible from a single interface. Beautiful Soup was used to scrape the data from the original website which was organized in a .csv file. Then, with the aid of a python library called youtube_dl, all of these videos were downloaded and downsampled to a lower resolution in order to reduce load time. We then used flask to dynamically populate html templates according to our .csv database and create the website for us. The current live version was deployed using gunicorn and an nginx webserver.",
    image: "images/dbod-sm.jpg",
    technologies: [FLASK, PYTHON, JAVASCRIPT, HTML, CSS],
  },
  {
    name: "LED Bike Display",
    description: "Device that produces images on a bike wheel using rotating LEDs.",
    summary: "This project uses Matlab, an Arduino, and some individually addressable RGB LEDs (WS2812B) mounted to a bike wheel. Matlab is used to convert various images to arrays of color-averaged radial and transverse components, which are then manually loaded onto an arduino. The RPMs are calculated using a magnetic switch on the wheel. The position of the LED strip is approximated using this tempo, and the corresponding color for each LED is then selected from the array.",
    image: "images/bike-sm.jpg",
    technologies: [MATLAB, CPP, EMBEDDED_SYSTEMS],
  },
  {
    name: "IOT Desk Lights",
    description: "Control my desk lights anytime, anywhere.",
    summary: "This project uses PHP, Javascript, HTML, and an Arduino. HTML/JS is used for the user interface, and PHP is used to read and write color values to a server-side .txt file. A program running on my computer polls this .txt file, sends the value to an arduino via USB serial connection, which then controls the led strip through a digital I/O pin using the Adafruit NeoPixel library.",
    image: "images/desk-red-sm.jpg",
    technologies: [PHP, JAVASCRIPT, HTML, EMBEDDED_SYSTEMS, IOT],
  },
  {
    name: "Lyric Scroller",
    description: "Hands-free solution for reading large blocks of text on small screens.",
    summary: "A hands-free solution for reading large blocks of text on small screens. Uses CSS, HTML, javascript and just a wee bit of JQuery.",
    image: "images/lyric-scroll.png",
    technologies: [JAVASCRIPT, HTML, CSS],
  },
];

export default PROJECT_DATA;