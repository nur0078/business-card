import React from "react";
import DisPic from "../assets/images/og.png";

// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <div className="info">
        <img className="info--dp" src={DisPic} alt="anurodh" />
        <h1 className="info--name">Anurodh Pandey</h1>
        <h5 className="info--role">Junior Front End Developer</h5>
        <p className="info--website">
            <a
            className="info--siteLink"
            href="https://www.anurodhpandey.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            >
            anurodhpandey.com.np
            </a>
        </p>
        <div className="info--buttons">
            <address>
            <a href="mailto:anurodh3@gmail.com">
                <button className="button button--email">
                <FontAwesomeIcon icon={faPaperPlane} className='info--icon'/>&nbsp;
                Email
                </button>
            </a>
            </address>
            <a
            href="https://www.linkedin.com/in/pandeyanurodh/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className='info--icon'/>&nbsp;
                LinkedIn
            </button>
            </a>
        </div>
        </div>
    );
}