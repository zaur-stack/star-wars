import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList'
import styles from './FavouritePage.module.css';
import { useEffect, useState } from 'react';


const FavouritePage = () => {
  const storeData = useSelector(state => state.favouriteReducer)
  const [people, setPeople] = useState([])

  useEffect(() => {
    const arr = Object.entries(storeData)
    if (arr.length) {
      const res = arr.map( item =>{
        return {
          id: item[0],
          ...item[1]
        }
      })
      setPeople(res)
    }
  }, [])
  return (
    <>
      <h1 className='header__text'>Favorites Page</h1>
      {people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No Data</h2>}
    </>
  );
}



export default FavouritePage;