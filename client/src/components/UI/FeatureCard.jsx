import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <span role="img" aria-label={feature.title}>
          {feature.icon}
        </span>
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
};

export default FeatureCard;