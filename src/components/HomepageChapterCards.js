import React from 'react';
import clsx from 'clsx';
import styles from './HomepageChapterCards.module.css';
import Link from '@docusaurus/Link';

const ChapterCardList = [
  {
    title: 'Part 1: Foundations',
    link: '/docs/part1-foundations/chapter1-what-is-physical-ai',
    description: (
      <>Understand the fundamental concepts of Physical AI and robotics.
      </>
    ),
  },
  {
    title: 'Part 2: ROS 2',
    link: '/docs/part2-ros2/chapter3-ros2-architecture',
    description: (
      <>Explore the Robot Operating System 2 (ROS 2) and its architecture.
      </>
    ),
  },
  {
    title: 'Part 3: Digital Twin',
    link: '/docs/part3-digital-twin/chapter5-simulation-fundamentals',
    description: (
      <>Delve into the world of digital twins and simulation environments.
      </>
    ),
  },
  {
    title: 'Part 4: Isaac',
    link: '/docs/part4-isaac/chapter7-isaac-sim',
    description: (
      <>Learn about NVIDIA Isaac Sim for AI training and robotics development.
      </>
    ),
  },
  {
    title: 'Part 5: VLA',
    link: '/docs/part5-vla/chapter9-vla-systems-overview',
    description: (
      <>Discover Vision-Language-Action (VLA) systems for intelligent robots.
      </>
    ),
  },
  {
    title: 'Part 6: Hardware',
    link: '/docs/part6-hardware/chapter11-hardware-overview',
    description: (
      <>Get an overview of the hardware ecosystem in Physical AI and robotics.
      </>
    ),
  },
  {
    title: 'Part 7: Conclusion',
    link: '/docs/part7-conclusion/chapter12-review-next-steps',
    description: (
      <>Review the book's content and explore next steps in your learning journey.
      </>
    ),
  },
];

function ChapterCard({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link to={link} className={styles.featureLink}>
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <Link
              className="button button--primary button--block"
              to={link}>
              Read More
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageChapterCards() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ChapterCardList.map((props, idx) => (
            <ChapterCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
