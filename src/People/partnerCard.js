import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartnerCard({ image, title, description }) {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;