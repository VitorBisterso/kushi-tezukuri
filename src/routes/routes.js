import Home from '../screens/Home'
import About from '../screens/About'
import OurStore from '../screens/OurStore'
import Products from '../screens/Products'

const allRoutes = [
  {
    name: 'home',
    Component: Home,
    path: '/',
    isExact: true,
  },
  {
    name: 'about',
    Component: About,
    path: '/about',
    isExact: false,
  },
  {
    name: 'ourStore',
    Component: OurStore,
    path: '/ourStore',
    isExact: false,
  },
  {
    name: 'products',
    Component: Products,
    path: '/products',
    isExact: false,
  },
]

const getPathToRoute = routeName =>
  allRoutes.find(route => route.name === routeName).path

export { allRoutes, getPathToRoute }
