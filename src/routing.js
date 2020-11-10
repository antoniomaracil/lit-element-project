import { Router } from '@vaadin/router';

import './views/home-view';

export const routing = (outlet) => {
  const router = new Router(outlet);

  var routes = [{ path: '/', component: 'home-view' }];

  router.setRoutes(routes);
};
