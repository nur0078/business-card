import React from "react";
import DisPic from "../images/og.png";

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
                LinkedIn
            </button>
            </a>
        </div>
        </div>
    );
}