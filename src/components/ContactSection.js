import React from 'react';
import styles from '../css/LandingPage.module.css';

export default function ContactSection() {
    return (
        <section className={`${styles.section} ${styles.sectionAlternate}`} id="contact">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Information</h3>
                        <p className={styles.formLabels}>Have questions? We'd love to hear from you.</p>

                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📍</span>
                            <div>
                                <h4>Address</h4>
                                <p>123 Innovation Drive, Tech City, TC 90210</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📧</span>
                            <div>
                                <h4>Email</h4>
                                <p>contact@roboticsbook.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.infoIcon}>📱</span>
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <h3>Send Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabels}>Name</label>
                                <input type="text" className={styles.formInput} placeholder="Your Name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabels}>Email</label>
                                <input type="email" className={styles.formInput} placeholder="Your Email" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabels}>Message</label>
                                <textarea className={styles.formTextarea} rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button className="button button--primary button--lg" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
