// import images
import Logo from '../src/img/header/logo.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
  social: [
    { href: '/', icon: <GrFacebookOption /> },
    { href: '/', icon: <IoLogoInstagram /> },
    { href: '/', icon: <IoLogoPinterest /> },
    { href: '/', icon: <IoLogoTwitter /> },
    { href: '/', icon: <IoLogoYoutube /> },
  ],
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Gallery' },
    { href: '/', name: 'Interview' },
    { href: '/', name: 'Articles' },
    { href: '/', name: 'Contact' },
  ],
};

export const heroData = {
  title: 'I’m Void Sir.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  textBtn: 'read more',
};
