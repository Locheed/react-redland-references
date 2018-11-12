import React from 'react';
import './Synopsis.css';

export default function Synopsis(props) {
  return (
    <div className={`synopsis-container ${props.visible}`} onClick={props.closeSynopsis}>
      <div className="reference-item-full">
        <div className="reference-item-image-full">
          <span className="closeButton" onClick={props.closeSynopsis}>Close &times;</span>
          <img src={props.imageFull} alt={props.imageAlt} />
          <h2 className="reference-item-heading-full">{props.heading}</h2>
          <p className="reference-item-tagline-full">{props.tagline}</p>
        </div>
        <div className="synopsis">
          <h2 className="synopsis-case-heading">Case study</h2>
          <p className="synopsis-description" dangerouslySetInnerHTML={{
            __html: props.synopsis
          }}></p>
        </div>
      </div>
    </div>
  )
}
