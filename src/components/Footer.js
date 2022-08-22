import "./Footer.css";

const Footer = () => {
  return (
    <div className="Navbar">
        <footer className="Navheader">
            <ul className="Navul">
                <li className="icono">
                <img src="https://www.logocrea.com/wp-content/uploads/2016/07/helado1.png" alt="cono" width={60}/>
                </li>
                
                <li className="Navli">
                    <a className="link" href="https://walink.co/098759" >Whatsapp</a>
                    <img src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png" alt="logo" width={40}></img>
                </li>

                <li className="Navli">
                    <a className="link" href="https://www.instagram.com/?hl=es-la" >Instagram</a>
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="logo" width={40}></img>
                </li>

                <li className="Navli">
                    <a className="link" href="https://www.facebook.com/">Facebook</a>
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="logo" width={40}></img>
                </li>

                <li className="icono">
                <img src="https://www.logocrea.com/wp-content/uploads/2016/07/helado1.png" alt="cono" width={60}/>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default Footer;