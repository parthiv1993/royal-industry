import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import About from './Screens/About';
import Home from './Screens/Home';
import Products from './Screens/Products';
import ErrorPage from './ErrorPage';
import Contact from './Screens/Contact';
import BioHazardBags from './Screens/Products/ProductPages/BioHazardBags';
import GarbageBagRolls from './Screens/Products/ProductPages/GarbageBagRolls';
import GarbageBags from './Screens/Products/ProductPages/GarbageBags';
import LDPEGroceryBags from './Screens/Products/ProductPages/LDPEGroceryBags';
import LDPEShrinkFilms from './Screens/Products/ProductPages/LDPEShrinkFilms';
import NurseryBags from './Screens/Products/ProductPages/NurseryBags';
import PlasticCarryBags from './Screens/Products/ProductPages/PlasticCarryBags';
import PolytheneBags from './Screens/Products/ProductPages/PolytheneBags';
import StretchFilmRolls from './Screens/Products/ProductPages/StretchFilmRolls';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'products',
        Component: Products,
      },
      {
        path: 'products/bio-hazard-bags',
        Component: BioHazardBags,
      },
      {
        path: 'products/garbage-bags',
        Component: GarbageBags,
      },
      {
        path: 'products/garbage-bag-rolls',
        Component: GarbageBagRolls,
      },
      {
        path: 'products/ldpe-grocery-bags',
        Component: LDPEGroceryBags,
      },
      {
        path: 'products/ldpe-shrink-films',
        Component: LDPEShrinkFilms,
      },
      {
        path: 'products/nursery-bags',
        Component: NurseryBags,
      },
      {
        path: 'products/plastic-carry-bags',
        Component: PlasticCarryBags,
      },
      {
        path: 'products/polythene-bags',
        Component: PolytheneBags,
      },
      {
        path: 'products/stretch-film-rolls',
        Component: StretchFilmRolls,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
]);

export default router;
