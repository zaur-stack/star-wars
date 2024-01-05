import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.css';
import icon from './img/bookmark.png'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Favorite = () => {
  const storeData = useSelector( state => state.favouriteReducer)

  const [count, setCount] = useState()

  useEffect(()=>{
    const length = Object.keys(storeData).length
    length.toString().length > 2 ? setCount('...') : setCount(length)
    setCount(length)
  })

  return (
    <div className={styles.container}>
      <Link to={'/favourites'}>
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorites" />
      </Link> 
    </div>
  );
}

Favorite.propTypes = {
  text: PropTypes.string
}

export default Favorite