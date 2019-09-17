import PRODUCTS from '../../data/dummy-data'

const initialState = {
    availableProducts:PRODUCTS,
    userProducts: PRODUCTS.filter(prod =>prod.ownedId === 'ul')
}

export default (state = initialState, action) => {
    return state;

}