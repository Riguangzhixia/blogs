import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powered by docusaurus',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        基于Docusaurus开发
      </>
    ),
      url: "https://github.com/facebook/docusaurus",
  },  {
    title: 'Deployed by github Actions',
    Svg: require('@site/static/img/ogp.svg').default,
    description: (
      <>
        由actions-gh-pages在github action中自动部署
      </>
    ),
        url: "https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus",
    },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}>{title}</a>
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
