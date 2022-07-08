const getAllRoutes = (routes, params = {}) => {
  let troutes = [...routes];
  return troutes
    .map((route) => getChildren(route, [], params))
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

const getChildren = (route, array = [], params = {}) => {
  if (route.children) {
    route.children.forEach((child) => {
      const path = `${route.path}/${child.path}`;
      array.push({ ...child, path });
      let descendants = child.children ? getAllRoutes(child.children, params) : [];
      descendants.forEach((desc) => getChildren(desc, array, params));
    });
  }
  return [route, array];
};

const getCurrentRoute = (pathname, routes, params = {}) => {
    let currentRoute = getAllRoutes(routes, params).find(
      (route) => route.path === pathname
    );
    return currentRoute;
};

export {
    getAllRoutes,
    getChildren,
    getCurrentRoute
};