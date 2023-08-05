// src/components/Screenshots.js
import React from 'react';

const Screenshots = () => {
  return (
    <section className="screenshots">
      <h2>Screenshots</h2>
      {/* Add screenshots of your app */}
      <div className="screenshot">
        <img src={require('../images/IMG_1984.PNG')} alt="Screenshot 1" />
      </div>
      <div className="screenshot">
        <img src={require('../images/IMG_1987.PNG')} alt="Screenshot 2" />
      </div>
      {/* Add more screenshots */}
    </section>
  );
};

export default Screenshots;
