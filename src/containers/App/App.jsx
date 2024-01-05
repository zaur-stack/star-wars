
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import routesConfig from '../../Routes/routesConfig';
import Header from '@components/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>

        <Header />
      <Routes>
        {routesConfig.map( (route, index) =>(
            <Route key={index} path={route.path} element={<route.element />} exact={route.exact} />
        )
         )}
      </Routes>

      
    </div>
  );
}

export default App;



