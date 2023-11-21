import React, { useState } from 'react';

const WelcomePage = () => {
  const [activeTab, setActiveTab] = useState('Welcome'); // This state will determine the active tab

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <iframe
        className="video-iframe"
        src="https://www.veed.io/embed/e4cf3764-60f6-4160-b859-367d0a6afd51"
        width="744"
        height="504"
        frameBorder="0"
        title="1.2 version"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  );
}


export default WelcomePage;
