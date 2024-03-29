import { Link } from 'react-router-dom';
import styles from './PeopleList.module.css';
import PropTypes from 'prop-types'



const PeopleList = ({people}) => {
  
  return (
      <ul className={styles.list__container}>
        {people.map( ({name, id, img}) =>
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={id} />
              <p>{name}</p>
            </Link>
          </li>
        )}
        </ul>  
  );
}

PeopleList.propTypes = {
  people: PropTypes.array
}

export default PeopleList;


