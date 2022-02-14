import { useState, useEffect } from 'react';
import moment from 'moment';
import {useTheme, useThemeUpdate, useFilter} from '../store/ThemeContext.js';
import NavContents from './NavContents';
import {FaCheck, FaBars, FaTimes} from 'react-icons/fa';
import ReactDOM from 'react-dom';
import styles from './Header.module.css';








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
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

    return (
    	<>
      <header className={`${lightToggle} p-2 shadow flex justify-between`}>
      <FaBars className="block lg:hidden" onClick={showSidebar}/>

      
  	  {windowSize.width < 1024 ? ReactDOM.createPortal(<NavContents />, document.getElementById('navbar')) : <NavContents />}	

      </header>

      <nav id="navbar" className={sidebarActive ? `active` : null}>
      	<FaTimes  onClick={showSidebar}/>

      </nav>
      </>
    );
};

Header.displayName = 'Header';


export default Header;
