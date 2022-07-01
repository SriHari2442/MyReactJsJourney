import TimelineView from './components/TimelineView'

import './App.css'

const timelineItemsList = [
  {
    id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'Navbar with Context',
    description:
      'When the dark theme image is clicked in the respective route.The dark theme image should be changed to light theme image.when the light theme image is clicked in the Respective route',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-output.gif',
    duration: '1 hr',
    projectUrl: 'https://bsrbarcontext.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'Navbar',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'Home',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
        name: 'About',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
        name: 'NotFound',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'Events Application',
    description:
      'Initially, the page should have the No Active Event View.When the image of an event item with registrationStatus is clicked, then the Yet To Register View should be displayed',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/events-output.gif',
    duration: '1 hr',
    projectUrl: 'https://harievents.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'Events',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'EventItem',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'ActiveEventRegistrationDetails',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'NotFound',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e644',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'Meme Generator',
    description:
      'The Image URL that has been provided should be applied as a background-image for the generated meme.The given Top and Bottom text values should be at the top and bottom of the generated meme',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/meme-generator-output.gif',
    duration: '1 hr',
    projectUrl: 'https://bsrmemegen.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'APP.js',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'Meme Generator',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'React Application',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'CSS',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e627',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'Registration Form',
    description:
      'Display an error message with the text Required for an empty field on blur.Display the Registration Success View on successful submit',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/registration-form-output-v2.gif',
    duration: '1 hr',
    projectUrl: 'https://hariform.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'APP.js',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'Registration Form',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'React Application',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'CSS',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e6A5',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'StopWatch',
    description:
      'When the Start button is clicked, then the Stopwatch should start running.When the Stop button is clicked, then the Stopwatch should stop running.When the Reset button is clicked, then the Stopwatch should be reset to zero',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/stopwatch-output-v2.gif',
    duration: '1 hr',
    projectUrl: 'https://haristop.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'APP.js',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'StopWatch',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'React Application',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'CSS',
      },
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6eA16',
    categoryId: 'PROJECT',
    title: 'React Application',
    projectTitle: 'Appointments App',
    description:
      'When non-empty values are provided for title and date and the Add button is clicked,A new appointment should be added to the list of appointments.When the Star on an appointment is clicked, the appointment should be starred',
    imageUrl:
      'https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif',
    duration: '1 hr',
    projectUrl: 'https://haripoints.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'APP.js',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'Appointments',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'React Application',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'Appointment Item',
      },
    ],
  },
  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: 'Javascript Application',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://wikiseaarch.ccbp.tech/',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac1300A1',
        name: 'HTML',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac1300A2',
        name: 'CSS',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac1300A3',
        name: 'JavaScript',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac1300A4',
        name: 'API',
      },
    ],
  },
]

const App = () => <TimelineView timelineItemsList={timelineItemsList} />

export default App
