import { Link } from 'react-router-dom';
import React from 'react';
import FeatureCard from '../components/UI/FeatureCard';
import heroImage from '../assets/hero-image.webp';

const features = [
  {
    id: 1,
    title: 'Smart Scheduling',
    description: 'Plan your study sessions with an intuitive calendar interface',
    icon: '📅'
  },

     {
    id: 2,
    title: 'Progress Tracking',
    description: 'Visualize your learning progress with charts and analytics',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Task Management',
    description: 'Organize your study materials and assignments efficiently',
    icon: '✅'
  }
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Organize Your Study Routine Effectively</h1>

   
   <p>Boost your productivity with our smart study planner</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Study Planner Interface" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </div>
  );
}