import { useState, useEffect } from 'react';
import moment from 'moment';
import {useTheme, useThemeUpdate, useFilter} from '../store/ThemeContext.js';
import NavContents from './NavContents';
import CurrentTime from './CurrentTime';
import SelectedTime from './SelectedTime';
import {FaCheck, FaBars, FaTimes} from 'react-icons/fa';
import ReactDOM from 'react-dom';
import styles from './Header.module.css';


const DesktopContents = () => {
	return (
		<>
		ReactDOM.createPortal(<NavContents />, document.getElementById('navbar')) <SelectedTime /> <CurrentTime/>
		</>
	)
}

const MobileContents = () => {
	return (
		<>
		ReactDOM.createPortal(<><NavContents /><SelectedTime /><CurrentTime /></>, document.getElementById('navbar'))
		</>
	)
}




const Header = ({ className }) => {
	const [sidebarActive, setSidebarActive] = useState(false);
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();

	const lightToggle = theme === true ? styles.active : null;

	const showSidebar = () => setSidebarActive(!sidebarActive);
	console.log(sidebarActive)

	const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
	  });
	  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
  	    setDomReady(true)
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

    return (
    	<>
      <header className={`${lightToggle} p-2 drop-shadow flex justify-between items-center leading-tight`}>
      <FaBars size={27} onClick={showSidebar}/>

      {!domReady ? null :  windowSize.width < 1024 ? <>{ReactDOM.createPortal(<><NavContents /><SelectedTime /><CurrentTime /></>, document.getElementById('navbar'))}</> : <>{ReactDOM.createPortal(<NavContents />, document.getElementById('navbar'))} <SelectedTime /> <CurrentTime/></>}	

      </header>

      <nav id="navbar" className={"shadow-md " + (sidebarActive ? `active` : null)}>
      	<FaTimes  size={27}  onClick={showSidebar}/>

      </nav>
      </>
    );
};

Header.displayName = 'Header';


export default Header;
