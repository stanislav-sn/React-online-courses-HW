import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Sidebar from './Main/Sidebar.js';
import Footer from './Footer/Footer.js';

const site = {
	site_name : "react test",
	site_title : "my first site with react",
	nav : [
    { link: "nav1", "text": "my link" },
    { link: "nav2", "text": "my link 2" },
    { link: "nav3", "text": "my link 3" },
  ]
}

function App() {
  return (
    <div className='container'>
      <Header siteData = {site}/>
      <Main />
      <Sidebar />
      <Footer siteData = {site}/>
    </div>
  );
}

export default App;
