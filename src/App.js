import React from 'react';
import { render } from 'react-dom'
import {BrowserRouter as HashRouter, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import './projectStyling.css';
import './contactStyling.css';

import Footer from './components/General/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from "./pages/WorkPage";
import GoCorsicanaPage from "./pages/GoCorsicanaPage";
import TrackerPage from "./pages/TrackerPage";
import CatalogPage from "./pages/CatalogPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Piper Hayden",
      navLinks:[
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
        { title: 'Contact', path: '/work'},
      ],
      home: {
        title: 'Piper Hayden',
        subTitle: "Designing Human-Centric Experiences",
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Connect'
      },
      work: {
        title: 'Projects'
      },
    }
  }

  render() {
    return (
      <HashRouter basename='/'>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Link to="/"> <Navbar.Brand>PIPER HAYDEN</Navbar.Brand> </Link>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link ClassName="nav-link" to="/work">Work</Link>
                  <Link ClassName="nav-link" to="/about">About</Link>
                  <Link ClassName="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/GoCorsicanaPage" component={GoCorsicana} />
          <Route path="/TrackerPage" component={Tracker} />
          <Route path="/CatalogPage" component={Catalog} />

          {/*<Footer />*/}

        </Container>
      </HashRouter>
    );
  }
}
const Home = () => <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text} />
const About = () => <AboutPage title={this.state.about.title} />
const Contact = () => <ContactPage title={this.state.contact.title} />
const Work = () => <WorkPage title={this.state.work.title} />
const GoCorsicana = () => <GoCorsicanaPage/>
const Tracker = () => <TrackerPage/>
const Catalog = () => <CatalogPage/>

export default App;
