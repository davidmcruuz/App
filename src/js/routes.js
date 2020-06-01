import cards from '../pages/cards.f7.html';
import Postres from '../pages/postres.f7.html';
import Perfil from '../pages/perfil.f7.html';
import HomePage from '../pages/home.f7.html';


var routes = [
  {
    path: '/cards/',
    component: cards,
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
    path: '/',
    component: HomePage,
  },
];

export default routes;
