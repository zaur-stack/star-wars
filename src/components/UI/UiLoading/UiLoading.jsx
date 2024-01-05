import PropTypes from 'prop-types';
import styles from './UiLoading.module.css';
import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import { useEffect, useState } from 'react';
import cn from 'classnames'


const UiLoading = ({theme = 'white', isShadow = true}) => {
  const [loaderIcon, setLoaderIcon] = useState(null)
  useEffect(() =>{
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'white': setLoaderIcon(loaderWhite); break;
      case 'blue': setLoaderIcon(loaderBlue); break;

      default: setLoaderIcon(loaderWhite)
        break;
    }
  }, [])
  return (
    <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderIcon} alt="Loader" />
  );
}

UiLoading.propTypes = {
   theme: PropTypes.string,
   isShadow: PropTypes.bool,
}

export default UiLoading;