import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "89a84486686d25175f04193081430919",
  domain: "commercerl-shop.myshopify.com"
});

export const fetchAllProducts = () => {
  client.product.fetchAll().then(products => {
    console.log(products);
  });
};

export const fetchProductById = (productId) => {
    client.product.fetch(productId).then(product => {
      console.log(product);
    });
  };
