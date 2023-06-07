import { swellFetch } from ".";
import { getProductsQuery } from "./queries/product";

swellFetch(getProductsQuery)
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})