import Link from 'next/link';
import React from 'react';

const SocialLinks = ({socialSite}) => {

  const urlInstagram = socialSite.site_instagram_account;
  const urlYoutube = socialSite.site_youtube_channel;
  
  const social_links=[
    {link: `${urlInstagram}`, target: '_blank', icon: 'fab fa-instagram'},
    {link: `${urlYoutube}`, target: '_blank', icon: 'fab fa-youtube'}
  ]

  return (
    <>{social_links.map((l, i) => <Link key={i} href={l.link}
    target={l.target ? l.target:''}><i className={l.icon}></i></Link>)}</>
  );
};

export default SocialLinks;