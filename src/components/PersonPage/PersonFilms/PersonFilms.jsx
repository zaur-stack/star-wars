import PropTypes from 'prop-types';
import styles from './PersonFilms.module.css';
import { makeConcurrentRequest } from '@utils/network';
import { useEffect, useState } from 'react';


const PersonFilms = ({personFilms}) => {
  const [filmsName, setFilmsName] = useState([])

  useEffect( () =>{
    (async () =>{
      const responce = await makeConcurrentRequest(personFilms)
      setFilmsName(responce)
    })()
  },[])

  
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName.sort((a, z) => a.episode_id - z.episode_id).map( ({title, episode_id}) =>
          <li className={styles.list__item} key={ episode_id}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}

export default PersonFilms;