import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonToFavorite } from '../../../store/actions';
import iconFavorite from './img/favorite.png'
import iconFavoriteWhite from './img/favoriteWhite.png'



const PersonPhoto = ({personPhoto, personName, personId, personFavorite, setPersonFavorite}) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () =>{
    if (personFavorite){
      dispatch(removePersonToFavorite(personId))
      setPersonFavorite(false)
    } else{
      dispatch(setPersonToFavorite({
        [personId]:{
          name: personName,
          img: personPhoto,
        }
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img className={styles.favorite} onClick={dispatchFavoritePeople} src={personFavorite ? iconFavorite : iconFavoriteWhite } alt="" />
      </div>
      

    </>
  );
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;