import './Footer.css';
import GithubLogo from '../../images/Logos/Github-footer.png';

const Footer = () => {

    return (
        <footer className="footer">
            <a href="https://github.com/garaluzardo/proyecto-spa-front" target="_blank" rel="noopener noreferrer">
                <img
                    src={GithubLogo}
                    alt="GitHub Logo"
                    style={{ cursor: "pointer" }}
                />
            </a>
        </footer>
    );
};

export default Footer;
