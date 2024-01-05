import PropTypes from 'prop-types';
import styles from './PeopleNavigation.module.css';
import { Link } from 'react-router-dom';
import UiButton from '../../../../components/UI/UiButton';

const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage, theme = 'dark'}) => {

  const handleChangeNext = () => getResource(nextPage)
  const handleChangePrev = () => getResource(prevPage)

  return (
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/people/?page=${counterPage - 1}`}>
        <UiButton text='Previous' onClick={handleChangePrev}  disabled={!prevPage}   />
      </Link>
      <Link className={styles.buttons} to={`/people/?page=${counterPage + 1}`}>
        <UiButton text='Next' onClick={handleChangeNext}  disabled={!nextPage}  />
      </Link>
    </div>
  );
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
  theme: PropTypes.string,
}

export default PeopleNavigation;