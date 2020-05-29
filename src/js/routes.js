
import HomePage from '../pages/home.f7.html';
import Postres from '../pages/postres.f7.html';
import Perfil from '../pages/perfil.f7.html';
import Login from '../pages/login.f7.html';


var routes = [
  {
    path: '/',
    component: HomePage,
  },
    {
    path: '/postres/',
    component: Postres,
  },
        {
    path: '/perfil/',
    component: Perfil,
  },
    {
    path: '/login/',
    component: Login,
  },
];

export default routes;
