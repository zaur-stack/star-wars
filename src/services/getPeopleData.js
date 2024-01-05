
import {HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, URL_IMG_PERSON, GUIDE_IMG_EXTENSION} from '@constants/api'

export const getId = (url, category) =>{
  const id = url
  .replace(HTTPS + SWAPI_ROOT + category, '')
  .replace(/\//g, '')

  return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImg = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`