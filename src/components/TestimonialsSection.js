import React from 'react';
import styles from '../css/LandingPage.module.css';

const Testimonials = [
    {
        name: 'Dr. Sarah Connor',
        role: 'Robotics Researcher',
        quote: "This book is the definitive guide I've been waiting for. It perfectly balances theory with practical application.",
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'John Anderson',
        role: 'AI Engineer',
        quote: "A must-read for anyone serious about getting into the field of humanoid robotics. The examples are top-notch.",
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Emily Chen',
        role: 'Student',
        quote: "Clear, concise, and incredibly inspiring. It helped me build my first walking robot prototype!",
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
];

export default function TestimonialsSection() {
    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>What Readers Say</h2>
                <div className={styles.testimonialsGrid}>
                    {Testimonials.map((item, idx) => (
                        <div key={idx} className={styles.testimonialCard}>
                            <p className={styles.testimonialQuote}>"{item.quote}"</p>
                            <div className={styles.testimonialAuthor}>
                                <img src={item.avatar} alt={item.name} className={styles.authorAvatar} />
                                <div className={styles.authorInfo}>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
