import React from 'react';
import styles from '../css/LandingPage.module.css';

export default function AboutSection() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About The Book</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutImage}>
                        <img
                            src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Engineering Workspace"
                        />
                    </div>
                    <div className={styles.aboutText}>
                        <p>
                            "AI Humanoid Robotics" is more than just a textbook. It's a comprehensive journey into the convergence of Artificial Intelligence and Mechanical Engineering.
                        </p>
                        <p>
                            Whether you are a student, a researcher, or a hobbyist, this book provides the foundational knowledge and advanced concepts needed to master the art of creating machines that move and think like humans.
                        </p>
                        <p>
                            From kinematics and control systems to computer vision and neural networks, we cover every aspect of the modern robotics stack.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
