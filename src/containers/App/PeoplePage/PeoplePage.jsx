import styles from './PeoplePage.module.css';
import { getApiResource } from '@utils/network';
import { useEffect, useState } from 'react';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PropTypes from 'prop-types'
import { useQueryParams } from '../../../hooks/useQueryParams';
import PeopleNavigation from './PeopleNavigation';


const PeoplePage = ({setErrorApi}) => {

  const [people, setPeople] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)

  const query = useQueryParams()
  const queryPage = query.get('page')
  
  

  const getResource = async (url) =>{
    const res = await getApiResource(url)
    if (res){
      const peopleList = res.results.map( ({name, url}) =>{
        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        
          return{
            name,
            url,
            img,
            id
          }
      })
      setPeople(peopleList)
      setErrorApi(false)
      setPrevPage(res.previous)
      setNextPage(res.next)
      setCounterPage(Number(queryPage))
    
    } else{
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage)
  }, [queryPage])

  return (
    <div className={styles.PeoplePage}>    
          <h1>Navigation</h1>
          <PeopleNavigation getResource={getResource}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            counterPage={counterPage}
          />
          {people && <PeopleList people={people} />}    
    </div>
  );
}

PeopleList.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);


