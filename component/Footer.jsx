const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer className="py-2 text-center bg-dark">
            © {year} «4mobile». Все права защищены.
        </footer>
    )
}

export default Footer;