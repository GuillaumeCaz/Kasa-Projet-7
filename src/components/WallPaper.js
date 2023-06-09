import React from 'react';
import wallpaperImage from '../assets/WallPaper/wallpaper.png';
import '../styles/WallPaper.css';

const WallPaper = () => {
  return (
    <div className="wallpaper-container">
      <img src={wallpaperImage} alt="Wallpaper" className="image" />
      <div className="text-overlay">
        <h2 className="text">Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
};

export default WallPaper;