import React, { useEffect, useState } from 'react';
import './AvatarGenerator.scss';

export default function AvatarGenerator({ onAvatarGenerated }) {
  const [avatarUrl, setAvatarUrl] = useState(() => localStorage.getItem('legoAvatar') || '');

  useEffect(() => {
    if (avatarUrl) {
      localStorage.setItem('legoAvatar', avatarUrl);
      onAvatarGenerated(avatarUrl);
    }
  }, [avatarUrl, onAvatarGenerated]);

  const avatars = [
    'https://api.dicebear.com/7.x/bottts/svg?seed=lego1',
    'https://api.dicebear.com/7.x/bottts/svg?seed=lego2',
    'https://api.dicebear.com/7.x/bottts/svg?seed=lego3',
  ];

  return (
    <div className="avatar-generator">
      {!avatarUrl ? (
        <div className="lego-options">
          <h3>Choisissez votre avatar LEGO :</h3>
          <div className="avatar-options">
            {avatars.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="avatar"
                onClick={() => setAvatarUrl(url)}
                style={{ cursor: 'pointer', width: 100, margin: 10 }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="preview">
          <p>✅ Avatar sélectionné !</p>
          <img src={avatarUrl} alt="Avatar" style={{ width: 120 }} />
          <button className="btn" onClick={() => {
            setAvatarUrl('');
            localStorage.removeItem('legoAvatar');
          }}>
            Modifier l’avatar
          </button>
        </div>
      )}
    </div>
  );
}
