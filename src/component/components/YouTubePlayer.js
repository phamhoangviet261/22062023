import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  const videoId = 'PmOqnjhLLTk';

  useEffect(() => {
    // Load the YouTube IFrame API asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player when the API is ready
    window.onYouTubeIframeAPIReady = onYouTubePlayerAPIReady;
  }, []);

  const onYouTubePlayerAPIReady = () => {
    new window.YT.Player('player', {
      height: '315',
      width: '560',
      videoId: videoId,
      playerVars: {
        autoplay: 1, // Autoplay the video
      },
    });
  };

  return <div id="player"></div>;
};

export default YouTubePlayer;
