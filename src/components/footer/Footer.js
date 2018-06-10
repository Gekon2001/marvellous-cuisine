import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';


export default function Footer(props) {
  return (
    <footer className={'app-footer'}>
      <ul className={'footer-column-container'}>
        <li className={'contacts-block col-sm-offset-3 col-sm-2'}>
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
        <li className={'social-block col-sm-2'}>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </li>
      </ul>
      <div className={'subfooter'}>

      </div>
    </footer>
  );
}


