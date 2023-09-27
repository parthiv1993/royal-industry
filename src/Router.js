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

// eslint-disable-next-line no-undef
const baseurl = process.env.PUBLIC_URL;

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: 'about',
          Component: About,
        },
        {
          path: 'products',
          children: [
            {
              index: true,
              Component: Products,
            },
            {
              path: 'bio-hazard-bags',
              Component: BioHazardBags,
            },
            {
              path: 'garbage-bags',
              Component: GarbageBags,
            },
            {
              path: 'garbage-bag-rolls',
              Component: GarbageBagRolls,
            },
            {
              path: 'ldpe-grocery-bags',
              Component: LDPEGroceryBags,
            },
            {
              path: 'ldpe-shrink-films',
              Component: LDPEShrinkFilms,
            },
            {
              path: 'nursery-bags',
              Component: NurseryBags,
            },
            {
              path: 'plastic-carry-bags',
              Component: PlasticCarryBags,
            },
            {
              path: 'polythene-bags',
              Component: PolytheneBags,
            },
            {
              path: 'stretch-film-rolls',
              Component: StretchFilmRolls,
            },
          ],
        },
        {
          path: 'contact',
          Component: Contact,
        },
      ],
    },
  ],
  { basename: baseurl },
);

export default router;
