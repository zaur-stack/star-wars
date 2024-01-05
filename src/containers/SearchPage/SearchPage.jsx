import PropTypes from 'prop-types';
import styles from './SearchPage.module.css';
import { useCallback, useEffect, useState } from 'react';
import { getApiResource} from '../../utils/network'
import { API_SEARCH } from '../../constants/api';
import {withErrorApi} from '../../hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import { debounce} from 'lodash'
import UiInput from '../../components/UI/UiInput/UiInput';


const SearchPage = ({setErrorApi}) => {

  const [inputSearchValue, setInputSearchValue ] = useState('')
  const [people, setPeople] = useState([])

  const getResponce = async param =>{
    const res = await getApiResource(API_SEARCH + param)

    if (res){
      setErrorApi(false)
      const peopleList = res.results.map(({name, url}) =>{

        const id = getPeopleId(url)
        const img = getPeopleImg(id)
        return {
          id,
          name,
          img
        }
      })
      setPeople(peopleList);
    } else{
      setErrorApi(true)
    }
  }

  useEffect(() =>{
    getResponce('')
  }, [])

  const debouncedGetResponce = useCallback(
      debounce(value => getResponce(value), 300),
      []
  )

  const handleInputChange = (value) =>{
    setInputSearchValue(value)
    debouncedGetResponce(value)
  }

  return (
    <>
        <h1 className='header__text'>Search</h1>

        <UiInput value={inputSearchValue}
                 handleInputChange={handleInputChange}
                 placeholder='Input characters name'
                 classes={styles.input__search}
        />
        
        <SearchPageInfo people={people} />
    </>
  );
}

SearchPage.propTypes = {
  text: PropTypes.string
}

export default withErrorApi(SearchPage);