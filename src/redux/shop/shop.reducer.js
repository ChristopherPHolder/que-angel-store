import SHOP_DATA from './shop.data';

const INICIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default shopReducer;