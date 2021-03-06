import React, { Component } from "react";
import headshot from "./Images/headshot.jpg";
import { Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div className="about">
      <Row>
        <Col className="about_bio_col">

      <h3 className="about_heading_top"><img id="inline_headshot" src={headshot} alt="headshot"/>About Steve</h3>
        <p className="about_text_bio">
          Steve Edelstein is a (mostly) retired lawyer from Atlanta. Until he and his wife
          moved to Hilton Head Island, South Carolina in 2018, he considered himself
          a street photographer. Shortly after they moved to the Island, however,
          Steve's wife “commissioned” him to take some photos of the herons, egrets,
          ibis, storks, and other shore birds and wildlife that make the Island
          (indeed, all of Beaufort County) an ideal place for nature lovers. He
          was hooked immediately. Since then, street photography has taken a
          backseat to beach, lagoon and salt marsh photography.
        </p>
        </Col>
        <Col xs={3}>
        <img id="headshot" src={headshot} alt="headshot"/>
        </Col>
      </Row>
        <Row className="about_row">
        <Col xs={12} md={6}className="about_col">
        <h3 className="about_heading">Group Shows and Awards</h3>
        
          <ul className="about_list">
            <li>Browns Guide to Georgia Magazine (1st Place)</li>
            <li>The Atlanta Journal Constitution (2nd Place)</li>
            <li>State Bar of Georgia Juried Art Exhibit (2nd Place)</li>
            <li>Photographer’s Forum Magazine (Award of Excellence)</li>
            <li>Atlanta Magazine (Honorable Mention)</li>
            <li>
              South Cobb Arts Alliance – 21st National Juried Exhibition
              (Honorable Mention)
            </li>
            <li>
              High Museum of Art (Electric Blanket Outdoor Juried Exhibit)
            </li>
            <li>
              Hastings Seed Gallery (Judged by the Whitney Museum of American
              Art)
            </li>
            <li>
              Photography Southeast Juried Exhibit – Arts Festival of Atlanta
            </li>
            <li>
              Jubilee Arts Festival Juried Exbibit</li>
              <li>Art of the Golden
              Generation Juried Exhibit (Kennesaw State University)
            </li>
          </ul>
        </Col>
          <Col xs={12} md={6} className="about_col">
        <h3 className="about_heading">Recent Awards</h3>
        <p className="about_text" id="recent">
          First Place - Society of Bluffton Artists 25th Annual Judged Show
          (2019)
        </p>
        <h3 className="about_heading">Individual Shows</h3>
        
          <ul className="about_list">
            <li>Hall-Hays Gallery (Atlanta Photography Group)</li>
            <li>Spruill Center for the Arts (Library Gallery)</li>
            <li>Atlanta Celebrates Photography (Radial Café)</li>
            <li>Backdrop Gallery.</li>
          </ul>
    
        </Col>
        </Row>
      </div>
    );
  }
}
