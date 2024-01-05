import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './ChooseSide.module.css';
import {useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from '../../../context/ThemeProvider'
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgNeitralSide from './img/falcon.jpg'


const ChooseSideItem = ({theme, text, img, classes}) =>{
    const isTheme = useTheme()
  return (
      <div onClick={() => isTheme.change(theme)} className={cn(styles.item, classes)}>
        <div className={styles.item__header}>{text}</div>
        <img className={styles.item__img} src={img} alt={text} />
     </div>
  )
}


const ChooseSide = () => {

  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light side',
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark side',
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: 'Neitral side',
      img: imgNeitralSide,
      classes: styles.item__neitral,
    }
  ]
  
  return (
    <div className={styles.container}>
      {elements.map(({theme, text, img, classes}, index) => (
         <ChooseSideItem key={index} theme={theme} text={text} img={img} classes={classes} />
         ))}
    </div>  
  );
}

ChooseSide.propTypes = {
  // text: PropTypes.string
}

export default ChooseSide;