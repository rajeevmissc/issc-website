import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faEnvelope, faUserCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// Helper function to get the correct icon
const getIcon = (iconName) => {
  switch (iconName) {
    case 'faChartLine': return faChartLine;
    case 'faEnvelope': return faEnvelope;
    case 'faUserCircle': return faUserCircle;
    default: return faGlobeAmericas;
  }
};

function Budge({ budge }) {
  return (
    <div className='budge' style={styles.budge}>
      <FontAwesomeIcon icon={getIcon(budge.icon)} size="3x" color={budge.color} />
      <h6 style={styles.title}>{budge.title}</h6>
      <h6 style={styles.value}>{budge.value}</h6>
    </div>
  );
}

// ✅ Styles
const styles = {
  budge: {
    textAlign: 'center',
    padding: '15px',
    borderRadius: '10px',
    background: '#f4f4f4',
    width: '150px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    margin: '10px 0 5px',
    fontSize: '14px',
  },
  value: {
    fontWeight: 'bold',
    fontSize: '18px',
  }
};

export default Budge;
