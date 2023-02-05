import { removeProduct } from "../../actions/productAction"

const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-one.vercel.app/product/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
        const data = await res.json()

        if (data.data.acknowledged) {
            removeProduct(id)
        }
    }
}

export default deleteProduct