import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/Katynguyen1130" target="_blank">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/katy-nguyen-431594121/" target="_blank">
                    <BsLinkedin />
                </a>

            </div>
            <div>
                <a href="https://www.facebook.com/nguyen.nhumai.7/" target="_blank">
                    <FaFacebookF />
                </a>

            </div>
        </div>
    )
}

export default SocialMedia