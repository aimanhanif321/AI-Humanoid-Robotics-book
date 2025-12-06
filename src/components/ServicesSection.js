import React from 'react';
import styles from '../css/LandingPage.module.css';

const FeatureList = [
    {
        title: 'Foundations of AI',
        description: 'Learn the core algorithms that power modern artificial intelligence.',
        icon: '🧠',
    },
    {
        title: 'Robotic Kinematics',
        description: 'Master the physics of movement and how to control mechanical limbs.',
        icon: '🦾',
    },
    {
        title: 'Computer Vision',
        description: 'Understand how robots perceive and interpret the world around them.',
        icon: '👁️',
    },
    {
        title: 'Ethical Design',
        description: 'Explore the moral implications and responsibilities of building humanoid robots.',
        icon: '⚖️',
    },
];

function Feature({ title, description, icon }) {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{icon}</div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceDesc}>{description}</p>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section className={`${styles.section} ${styles.sectionAlternate}`} id="features">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Key Topics Covered</h2>
                <div className={styles.servicesGrid}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
