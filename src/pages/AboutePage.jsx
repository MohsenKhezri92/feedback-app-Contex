import React from 'react';
import Card from '../components/shared/Card';

function AboutePage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>
          <a href='/'>Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutePage
