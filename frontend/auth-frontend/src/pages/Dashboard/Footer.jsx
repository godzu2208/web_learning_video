import "./Footer.css";

const Footer = () => {
    return (
        <footer className="fixed-footer">
            <p>© {new Date().getFullYear()} Hexagon E-Learning.</p>
        </footer>
    );
};

export default Footer;