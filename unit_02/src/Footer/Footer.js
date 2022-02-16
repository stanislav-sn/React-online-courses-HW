import Nav from '../Header/Nav.js';

function Footer(props) {
    return (
        <div className="Footer-site">
            <footer>
	            <h3>{props.siteData.site_name}</h3>
	            <Nav nav={props.siteData.nav}/>
            </footer>
        </div>
    )
}

export default Footer;