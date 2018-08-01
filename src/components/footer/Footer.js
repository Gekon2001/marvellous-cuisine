import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';


export default function Footer(props) {
  return (
    <footer className={'app-footer container'}>
      <ul className={'footer-column-container row'}>
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
            <i className={'fab fa-facebook-square'}></i>
          </div>
          <div>
            <i className={'fab fa-instagram'}></i>
          </div>
          <div>
            <i className={'fab fa-twitter'}></i>
          </div>
        </li>
      </ul>
      <div className={'subfooter'}>
        subfooter
      </div>
    </footer>
  );
}


