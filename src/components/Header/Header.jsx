import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Favorite from '../Favorite';
import vaider from './img/darth-vader.png'
import lightSaber from './img/lightsaber.png'
import falcon from './img/millennium-falcon.png'
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../context/ThemeProvider';
import { useEffect, useState } from 'react';

const Header = () => {
  const [icon, setIcon] = useState(vaider)
  const isTheme = useTheme()
  useEffect(()=>{
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(lightSaber);   break;
      case THEME_DARK: setIcon(vaider);   break;
      case THEME_NEITRAL: setIcon(falcon);   break;

      default: setIcon(falcon)
    }
  },[isTheme])
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="logo" />
      <ul className={styles.list__container}>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/people/?page=1'}>People</NavLink></li>
        <li><NavLink to={'/not-found'}>Not Found</NavLink></li>
        <li><NavLink to={'/search'}>Search</NavLink></li>
        <li><NavLink to={'/fail'}>Fail</NavLink></li>
      </ul>
      <Favorite />
    </div>
  );
}



export default Header;