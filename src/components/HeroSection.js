import React from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/LandingPage.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Building the Future of <br />
                    <span style={{ color: 'var(--ifm-color-primary)' }}>Humanoid Robotics</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Discover the comprehensive guide to understanding, designing, and building the next generation of intelligent humanoid robots.
                </p>
                <div className={styles.heroButtons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/part1-foundations/chapter1-what-is-physical-ai">
                        Start Reading
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="#about">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className={styles.heroImage}>
                <div className={styles.floatingCard}>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Futuristic Robot"
                    />
                </div>
            </div>
        </section>
    );
}
