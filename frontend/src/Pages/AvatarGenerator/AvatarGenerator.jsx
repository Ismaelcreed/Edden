import React, { useEffect, useState } from 'react';
import './AvatarGenerator.scss';

export default function AvatarGenerator() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const handleMessage = (event) => {
      const json = event.data;

      if (typeof json === 'string') {
        const data = JSON.parse(json);
        if (data.source === 'readyplayerme' && data.eventName === 'v1.avatar.exported') {
          setAvatarUrl(data.data.url);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="avatar-generator">
      {!avatarUrl ? (
        <iframe
          title="Ready Player Me Avatar Creator"
          src="https://demo.readyplayer.me/avatar?frameApi"
          style={{ width: '100%', height: '600px', border: 'none' }}
          allow="camera *; microphone *"
        />
      ) : (
        <div className="preview">
          <p>✅ Avatar créé !</p>
          <img src={`${avatarUrl}&scene=fullbody-portrait-v1`} alt="Avatar" />
          <button className="btn" onClick={() => setAvatarUrl('')}>
            Modifier l’avatar
          </button>
        </div>
      )}
    </div>
  );
}
