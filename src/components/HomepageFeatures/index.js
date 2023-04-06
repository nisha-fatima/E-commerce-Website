import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Posts',
    Svg: require('@site/static/img/blog1.svg').default,
    description: (
      <>
        I'll be posting about Writing 
      </>
    ),
  },
  {
    title: 'Blogs',
    Svg: require('@site/static/img/blog2.svg').default,
    description: (
      <>
        I'll be also posting Blogs
      
      </>
    ),
  },
  {
    title: 'Articles',
    Svg: require('@site/static/img/blog3.svg').default,
    description: (
      <>
         I'll be also posting Articles
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
