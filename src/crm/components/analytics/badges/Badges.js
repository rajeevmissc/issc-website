import React, { useState, useEffect } from 'react';
import Budge from './Badge';

// ✅ Dummy Data
const dummyBudges = [
  { icon: 'faChartLine', title: 'Growth', value: '12%', color: '#2E86C1' },
  { icon: 'faEnvelope', title: 'New Messages', value: '24', color: '#E74C3C' },
  { icon: 'faUserCircle', title: 'New Users', value: '8', color: '#27AE60' },
  { icon: 'faGlobeAmericas', title: 'Active Regions', value: '5', color: '#F1C40F' },
];

function Budges() {
  const [budges, setBudges] = useState([]);

  useEffect(() => {
    // Simulating API call delay
    setTimeout(() => {
      setBudges(dummyBudges);
    }, 1000);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard Metrics</h2>
      <div style={styles.budgesGrid}>
        {budges.map((b, index) => (
          <Budge key={index} budge={b} />
        ))}
      </div>
    </div>
  );
}

// ✅ Styles for full-screen UI
const styles = {
  container: {
    minHeight: '70vh', // Full-screen height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  budgesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Responsive layout (max 4 per row)
    gap: '20px',
    width: '80%',
    maxWidth: '800px',
    justifyContent: 'center',
  },
};

export default Budges;
