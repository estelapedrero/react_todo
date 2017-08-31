import React from 'react';

const trial = ['github', 'twitter'];
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
        <p>estelapedrero</p>
        <ul>
          {rrss.map((link, index) => <li key={index}><a href={link.link} target="_blank">{link.name}</a></li>)}
        </ul>
      </footer>
    );
  }
}

export default Footer;
