import React from 'react';
import { SocialIcon } from 'react-social-icons'

function Description() {
  return (
    <div className="Description">
      <div className="full-name">
        <h1>Zea Evans</h1>
        <p>Web Developer</p>
      </div>
      <div id="description-paragraph">
        <p>
          Highly competent application software developer with three years of experience developing a wide range of applications. I have proven expertise in building customer relationship management, email, and messenger apps. Knowledgable in project lifecycle and capable of building from design, testing code, creating documentation and support. Currently seeking long-term and short-term contract positions which will allow me to further improve my development skills.
        </p>
        <div className="social-links">
          <SocialIcon url="https://www.linkedin.com/in/zeaevans/" />
          <SocialIcon url="https://github.com/twilight-princess" />
          <SocialIcon url="https://www.upwork.com/freelancers/~0168a74b0381cbb095" />
          <SocialIcon url="https://angel.co/zea-evans" />
          <SocialIcon url="mailto:zeaevans@gmail.com" />
        </div>
      </div>

    </div>
  )
};

export default Description;