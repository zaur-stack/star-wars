import PeoplePage from "@containers/App/PeoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";
import FavouritePage from "../containers/FavouritePage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from '../components/ErrorMessage'

const routesConfig = [
  {
    path: '/',
    element: HomePage
  },
  {
    path: '/people',
    element: PeoplePage
  },
  {
    path: '/people/:id',
    exact: false,
    element: PersonPage,
  },
  {
    path: '/favourites',
    element: FavouritePage,
  },
  {
    path: '/search',
    element: SearchPage,
  },
  {
    path: '/fail',
    element: ErrorMessage,
  },
  {
    path: '/not-found',
    element: NotFoundPage,
  },
  {
    path: '*',
    exact: false,
    element: NotFoundPage
  },

]

export default routesConfig