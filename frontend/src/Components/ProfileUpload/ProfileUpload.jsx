import { useState} from 'react';
import styles from '../../styles/AuthForm.module.scss';

const ProfileUpload = ({ profileUrl, setProfileUrl }) => {
    const [isDragging, setIsDragging] = useState(false);
    
    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };
    
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };
    
    const handleFile = (file) => {
        // Ici vous pouvez uploader le fichier vers un serveur
        // Pour l'exemple, nous utilisons une URL locale
        const reader = new FileReader();
        reader.onload = () => {
            setProfileUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    
    return (
        <div 
            className={`${styles.profileUpload} ${isDragging ? styles.dragging : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            {profileUrl ? (
                <img 
                    src={profileUrl} 
                    alt="Profile" 
                    className={styles.profileImage}
                />
            ) : (
                <div className={styles.uploadContent}>
                    <span>Glissez ou cliquez pour sélectionner</span>
                </div>
            )}
            
            <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
            />
            
            <button 
                type="button" 
                className={styles.uploadButton}
                onClick={() => document.querySelector(`.${styles.fileInput}`).click()}
            >
                 Choisir une image
            </button>
        </div>
    );
};

export default ProfileUpload;