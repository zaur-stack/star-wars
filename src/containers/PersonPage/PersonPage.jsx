import { withErrorApi } from '@hoc-helpers/withErrorApi';
import React, { Suspense } from 'react';
import styles from './PersonPage.module.css';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network'
import { useEffect, useState } from 'react';
import { API_PERSON } from '@constants/api';
import PropTypes from 'prop-types'
import {getPeopleImg} from '@services/getPeopleData'
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms') )



const PersonPage = ({setErrorApi}) => {

  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setPersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const {id} = useParams()
  const storeData = useSelector( state => state.favouriteReducer)
  
  
       useEffect(() =>{
        (async () =>{
          const res = await getApiResource(`${API_PERSON}/${id}/`)
          setPersonFavorite(!!storeData[id]);
          
          setPersonId(id)
          if (res) {
            setPersonInfo([
              { title: 'Height', data: res.height },
              { title: 'Mass', data: res.mass },
              { title: 'Hair color', data: res.hair_color },
              { title: 'Skin color', data: res.skin_color },
              { title: 'Eye color', data: res.eye_color },
              { title: 'Birth year', data: res.birth_year },
              { title: 'Gender', data: res.gender },
            ])
            setPersonName(res.name)
            setPersonPhoto(getPeopleImg(id))
            setPersonFilms(res.films)
            setErrorApi(false)
            
          }
        })()
       }, [])
       
       
  return (
  <>
  
  <PersonLinkBack />
    <div className={styles.wrapper}>      
      <span className={styles.person__name}>{personName}</span>
     <div className={styles.container}>

      <PersonPhoto personFavorite={personFavorite} setPersonFavorite={setPersonFavorite} personId={personId} personPhoto={personPhoto} personName={personName} />

      {personInfo && <PersonInfo personInfo={personInfo} />}
      
      {personFilms && (
        <Suspense fallback={<UiLoading theme='white' isShadow />}>
          <PersonFilms personFilms={personFilms}/>
        </Suspense>
      )}
      ы
     </div>
    </div>
  </>

  );
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}


export default withErrorApi(PersonPage);