// import images
import Logo from '../src/img/header/logo.png';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
 
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navigation = {
  items: [
    { href: 'home', name: 'Home' },
    { href: 'about', name: 'About' },
    { href: 'gallery', name: 'Gallery' },
    { href: 'interview', name: 'Interview' },
    { href: 'skills', name: 'Skills' },
    { href: 'contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://m.facebook.com/people/Truetattoorethimno/100063557830164/', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/truetattoo_rethimno/?hl=en', icon: <IoLogoInstagram /> },
];

export const heroData = {
  title: 'True Tattoo & Piercing',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  btnText: 'Call us',
  btnIcon: <FaPhoneAlt />,
};

export const aboutData = {
  title: 'Our Story:',
  subtitle1:
    'We are proudly owned and operated in Rethymno, Crete. Our doors have been open to the public since 2018 for walk-ins and appointments for larger custom work. Feel free to look through our artist work to find the right fit for you. Whenever you are in the area, stop in so we can talk about your next tattoo!',
  subtitle2:
    '',

  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Check Our Gallery:',
 
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Great little Tattoo-Shop...nice staff, very friendly. And of course great tattoos they make. Will come back for sure, next time visiting Crete 👍😊👍",
    name: 'Michael Grigoleit',
    occupation: '',
  },
 
  {
    quoteImg: QuoteImg,
    message:
      'My partner and I got our matching tattoos here and had a great experience. Our tattooist was funny and cracked many jokes to help us relax. ',
    name: 'Grace Smith',
    occupation: '',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Shortly decided, appointment and a new tattoo in the blink of an eye. Very good work.',
    name: 'Larissa Frank',
    occupation: '',
  },
  {
    quoteImg: QuoteImg,
    message:
      ' Super perfect.. highly recommended a master tattoo artist!! Thank you again and again',
    name: 'Karin Zahnd',
    occupation: '',
  },
];

export const contactData = {
  title: 'Get in touch with Us:',
  info: [
    {
      title: 'Rethymno office',
      subtitle:
        'At the heart of rethymno city ',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Arkadiou 105-Chereti 3',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+302831506495',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'truetattoorethimno@yahoo.com',
      },
      link: 'Get location',
    },
    
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About True tattoo',
    subtitle:
      '',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Arkadiou 105-Chereti 3 rethimno.74100',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+302831506495',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'truetattoorethimno@yahoo.com',
    },
  },
  
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Sat / 11:00 am - 9:00 pm' },
      { name: 'Sun / Closed' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Get our latest news',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
