import * as ActionTypes from "./ActionTypes";
import { BASE_URL } from "../shared/api";

export const productsLoading = (isLoading) => ({
    type: ActionTypes.GET_PRODUCTS_LOADING,
    payload: isLoading
});

export const productFailed = (errMessage) => ({
    type: ActionTypes.GET_PRODUCTS_FAILED,
    payload: errMessage
});

export const getProduct = (products) => ({
    type: ActionTypes.GET_PRODUCTS,
    payload: products
})


export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));
    return fetch(BASE_URL + "/getProducts")
    .then(response => {
        let error = new Error('Error' + response.status + ': ' + response.statusText);
        if (!response.ok) {
            error.response = response;
            throw error;
        }
        return response;
    },
    error => {
        let errmess = new Error(error.message);
        throw errmess;
    })
    .then ((response) => response.json())
    .then(async ({ products }) => {
        products.map((product) => {
            product.imageUrl = `${BASE_URL}/getProductImage/${product.id}/`;
            return product;
          })
        dispatch(getProduct(products))
    })
    .catch(error => dispatch(productFailed(error.message)))
}