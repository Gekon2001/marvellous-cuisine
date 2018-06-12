import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';


export default function Footer(props) {
  return (
    <footer className={'app-footer'}>
      <ul className={'footer-column-container'}>
        <li className={'contacts-block col-sm-5'}>
          Contacts will be here
        </li>
        <li className={'links-block col-sm-2'}>
          <div>
            <a>Home</a>
          </div>
          <div>
            <a>Shop</a>
          </div>
          <div>
            <a>Blog</a>
          </div>
          <div>
            <a>About</a>
          </div>
        </li>
        <li className={'social-block col-sm-5'}>
          <div>
            <FontAwesomeIcon icon={faFacebook} style={{fontSize: 40}}/>
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize: 40}}/>
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} style={{fontSize: 40}}/>
          </div>
        </li>
      </ul>
      <div className={'subfooter'}>

      </div>
    </footer>
  );
}


