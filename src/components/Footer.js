import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
        <a
            href="https://github.com/nur0078"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faGithub} className="footer--icon"/>
        </a>
        <a
            href="https://www.linkedin.com/in/pandeyanurodh/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
        </a>
        </footer>
    );
}