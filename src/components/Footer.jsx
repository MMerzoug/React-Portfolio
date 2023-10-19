import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faHouse, faHandshake, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer({ setPage }) {
    return (
        <footer>
            <div class="icon-bar">
                <a href="#" onClick={() => setPage('about')}>
                <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="#" onClick={() => setPage('contact')}>
                <FontAwesomeIcon icon={faHandshake} />
                </a>
                <a href="mailto:monique.merzoug1@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/monique-merzoug">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/sneekymoniquey/">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/MMerzoug?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>

    )
}