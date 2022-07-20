const getAllRoutes = (routes, params = {}) => {
  let troutes = [...routes];
  return troutes
    .map((route) => [route])
    .flat(Infinity)
    .map(({ path, ...rest }) => ({
      path: Object.keys(params).length
        ? Object.keys(params).reduce(
            (path, param) => path.replace(`:${param}`, params[param]),
            path
          )
        : path,
      ...rest,
    }));
};

const getCurrentRoute = (pathname, routes, params = {}) => {
    let currentRoute = getAllRoutes(routes, params).find(
      (route) => route.path === pathname || (route.root && pathname === '/')
    );
    return currentRoute;
};

const routes = [
    {
        name: 'All Cards',
        path: '/',
    },
    {
        name: 'All Cards',
        path: '/all-cards',
    },
    {
        name: 'Card',
        path: '/card/:id',
    },
    {
        name: 'Decks',
        path: '/decks',
    },
]

export {
    getAllRoutes,
    getCurrentRoute
};