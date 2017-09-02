import React from 'react';
import IconLink from '../IconLink';
import styles from './styles.scss';

const rrss = [
  { name: 'github', link: 'https://github.com/estelapedrero' },
  { name: 'twitter', link: 'https://twitter.com/sala_de_star' },
  { name: 'instagram', link: 'https://instagram.com/sala_de_star' },
];

const Footer = () => (
  <footer className={styles.footer}>
    <p>made with * by estelapedrero</p>
    <ul className={styles.rrss_list}>
      {rrss.map((link, index) => <IconLink key={index} name={link.name} link={link.link} />) }
    </ul>
  </footer>
);

export default Footer;
