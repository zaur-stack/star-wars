import iconBack from './img/left-arrow.png'
import { useNavigate } from 'react-router';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {

  const navigate = useNavigate()

  const handleGoBAck = e => {
    e.preventDefault()
    navigate(-1)
  }
  return (

    <a href="/" onClick={handleGoBAck} className={styles.link}>
      <i class={styles.left}></i>
      <span>Go back</span>
    </a>
    
  
  );
}


export default PersonLinkBack;