export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  products: {
    path: "/products/",
    getHref: () => "/products/",
  },
  admin: {
    path: "/admin/",
    getHref: () => "/admin/",
    products: {
      path: "products/",
      getHref: () => "products/",
    },
  },
};
