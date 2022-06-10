import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/steel_pirate'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://github.com/codes-and-games'><FaGithub /></a>
    </div>
    <div>
      <a href='https://instagram.com/divyesh__idhate__'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;