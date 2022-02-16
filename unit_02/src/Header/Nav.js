function Nav(props) {
    let data = props.nav;
    let listItem = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
    return (
        <div className="Nav-site">
            <nav>
                <ul className="main-navigation">
                    {listItem}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;