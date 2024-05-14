import { React } from "react";
import Card from "react-bootstrap/Card";

import './mix.scss'

const DescSection = () => {
  return (
    <div className='card-wrapper'>
        <Card>
      <Card.Body>
        <Card.Text>
          Established in 2004, Photodrones is the UK's original Aerial Imaging
          Company. With unrivalled experience, technical knowledge and safety
          record, Photodrones holds unique and privileged permissions to fly in
          congested areas and cities worldwide, including the USA.
        </Card.Text>
        <button className='CTA-btn'>Watch our show reel</button>
      </Card.Body>
    </Card>
    </div>
    
  );
};


export default DescSection;