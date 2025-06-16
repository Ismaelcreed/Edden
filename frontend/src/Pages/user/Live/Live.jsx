import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Live.scss';

function Live() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const containerRef = useRef(null);

  // Récupérer des vidéos depuis l'API YouTube
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              maxResults: 10,
              key: 'AIzaSyCDZXehB1gnGImiXZ-51JeERE-NBq7NuFM',
              q: 'short',
              type: 'video'
            }
          }
        );
        
        const videosData = response.data.items.map(item => ({
          id: item.id.videoId,
          url: `https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1`,
          title: item.snippet.title
        }));
        
        setVideos(videosData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Gestion du défilement
  const handleScroll = (e) => {
    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const windowHeight = window.innerHeight;
    const newIndex = Math.round(scrollPosition / windowHeight);
    
    if (newIndex !== currentVideo) {
      setCurrentVideo(newIndex);
    }
  };

  return (
    <div 
      className="live-container" 
      ref={containerRef}
      onScroll={handleScroll}
      style={{ marginTop: '80px' }}
    >
      {videos.map((video, index) => (
        <div 
          key={video.id} 
          className={`video-item ${index === currentVideo ? 'active' : ''}`}
        >
          <iframe
            title={video.title}
            src={index === currentVideo ? video.url : ''}
            allow="autoplay; encrypted-media"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-overlay">
            <div className="user-info">
              <div className="avatar">👤</div>
              <div className="username">User_{index + 1}</div>
            </div>
            <div className="video-actions">
              <button className="action-button">❤️ 1.2K</button>
              <button className="action-button">💬 458</button>
              <button className="action-button">🔗</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Live;