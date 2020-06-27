import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import logo from './Playpen-logo.png';
import { Card } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="PlayPen" />
      <Card className="info about">
        <h2 className="headings">About</h2>
        <p>Play pen daycare offers a rich, simulative and educational environment for children aged 6 weeks to 12 years.
        We are a family day care that goes beyond what standard day care provides. Our goal is to build a strong foundation
          for each and everyone of our students during these formative years, so that they will succeed in all aspects of their future.</p>
      </Card>
      <Card className="info director">
        <h2 className="headings">Director</h2>
        <p>Ms. Namalie Renuka is a fully qualified day care teacher, with more than 15 years of experience in the field.
        She noticed that most family daycares lack a curriculum and structure, and felt that placing a child in front
        of the TV during daycare hours is highly detrimental to his or her development. She started PlayPen with the
        goal of offering a structured education to children who attend day care, ensuring that they are provided with
           ample opportunities in order to reach age-appropriate social, emotional and physical milestones.</p>
      </Card>
      <Card className="info mission">
        <h2 className="headings">Mission</h2>
        <p>We believe that children should be provided with the optimal nurturing in order to facilitate physical, mental,
        social and emotional growth. We do our best to give individual care and attention for each child. We have also
        established a curriculum that will help expand your child's knowledge and provide them with a head start in their
        education. Our schedule is specifically designed to balance work and play, and our aim is to make learning as fun
           as possible for our students.</p>
      </Card>
      <Card className="info programs">
        <h2 className="headings">Programs</h2>
        

        <p className="program-info"><h3>Infant Program ( 6 weeks - 12 months )</h3>
        <ul>
        <li>Daily, written reports are provided to keep parents informed about their child’s day</li>
        <li>Breast milk, formula and cereal supplied by parents will be stored and served safely</li>
        <li>Breakfast with milk provided</li>
        <li>Cribs and crib sheets provided and laundered on site</li>
        <li>Diapers/pull-ups and wipes supplied by parents</li>
        </ul>
        </p>

        

        <p className="program-info"><h3>Toddler Program ( 1 - 2 years )</h3>
        <ul>
        <li>Includes all features in the infant program</li>
        <li>Indoor activities to help encourage children reach developmental milestones</li>
        <li>Outdoor play and summer time water play included.</li>
        <li>Reading books, singing songs, circle time</li>
        <li>When developmentally appropriate – toilet learning will be supported</li>
        </ul>
        </p>

        

        <p className="program-info"><h3>Pre-school Program ( 2 - 5 years )</h3>
        <ul>
        <li>Includes all features of the toddler program</li>
        <li>Help develop reading and writing skills</li>
        <li>Encourage independence in daily activities</li>
        <li>Learning about self and others (social/emotional development)</li>
        <li>Prepare children for kindergarten</li>
        </ul>
        </p>

      </Card>
      <Card className="info contact">
        <h3 className="headings">Contact Us</h3>
        <p className="contact-info"><span>Phone: </span>301-349-5010<br/>
        <span>Hours: </span>7:00 AM - 6:30 PM<br/>
        <span>Email: </span>contact (AT) playpencc.com<br/>
        <span>Address: </span>11009 Nicholas Dr, Silver Spring, MD 20902</p>
      </Card>
    </div>
  );
}

export default App;
