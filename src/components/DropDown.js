import React from 'react';

const DropDown = ({ title, content, className }) => {
  return (
    <div className={className}>
      <button className="dropdown-toggle">{title}</button>
      <div className="dropdown-content">
        {Array.isArray(content) ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default DropDown;