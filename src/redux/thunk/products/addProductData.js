import { addDProduct } from "../../actions/productAction"

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://moon-tech-server-one.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(addDProduct({ _id: data.insertedId, ...product }))
            alert('Your Product Added Successfully')
        }
    }
}

export default addProductData