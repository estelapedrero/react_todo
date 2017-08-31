import React from 'react';
import IconLink from '../IconLink';

const rrss = [
  {name: 'github', link: 'https://github.com/estelapedrero'},
  {name: 'twitter', link: 'https://twitter.com/sala_de_star'},
  {name: 'instagram', link: 'https://instagram.com/sala_de_star'}
];

class Footer extends React.Component {
  render() {
    return (
      // className={styles.title}
      <footer>
        <p>made with * by estelapedrero</p>
        <ul>
          {rrss.map((link, index) => <IconLink key={index} name={link.name} link={link.link}/>)}
        </ul>
      </footer>
    );
  }
}

export default Footer;
