// import images
import Logo from '../src/img/header/logo.svg';
// import icons
import { TiSocialFacebook } from 'react-icons/ti';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
  socials: [
    { href: '/', icon: <TiSocialFacebook />, delay: '400' },
    { href: '/', icon: <IoLogoInstagram />, delay: '600' },
    { href: '/', icon: <IoLogoPinterest />, delay: '800' },
    { href: '/', icon: <IoLogoTwitter />, delay: '1000' },
    { href: '/', icon: <IoLogoYoutube />, delay: '1200' },
  ],
};

export const navData = {
  items: [
    { href: '/', name: 'Home', delay: '400' },
    { href: '/', name: 'About', delay: '600' },
    { href: '/', name: 'Gallery', delay: '800' },
    { href: '/', name: 'Interview', delay: '1000' },
    { href: '/', name: 'Articles', delay: '1200' },
    { href: '/', name: 'Contact', delay: '1200' },
  ],
};

export const heroData = {
  title: 'I’m Void Sir.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  textBtn: 'read more',
};
