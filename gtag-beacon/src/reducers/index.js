import {
    ITEM_ADDED_TO_CART,
    NAME_ENTERED,
    EMAIL_ENTERED,
    PHONE_NUMBER_ENTERED,
    CREDIT_CARD_NUMBER_ENTERED,
    LOCATION_CHANGE,
} from '../actions/action-types';

const initialState = {
    cart: [],
    items: {
        'Hubble_o2fXhV': {
            name: 'Hubble',
            price: 14,
            img: 'https://solarsystem.nasa.gov/system/content_pages/main_images/995_s125e012033_1.jpg',
            description: `The Hubble Space Telescope is a space telescope
      that was launched into low Earth orbit in 1990, and remains in
      operation.`,
        },
        'Cassini_ANs1tM': {
            name: 'Cassini',
            price: 3.3,
            img: 'https://solarsystem.nasa.gov/internal_resources/1517/',
            description: `Cassini-Huygens is one of the most ambitious
      missions ever launched into space. Loaded with an array of
      powerful instruments and cameras, the spacecraft is capable of
      taking accurate measurements and detailed images in a variety of
      atmospheric conditions and light spectra.`,
        },
        'Curiosity_N0CEFy': {
            name: 'Curiosity',
            price: 2.6,
            img: 'https://solarsystem.nasa.gov/system/content_pages/main_images/871_pia19142-figa-main_malhi-mojave-labeled_small.jpg',
            description: `Curiosity is a car-sized robotic rover exploring
      Gale Crater on Mars as part of NASA's Mars Science Laboratory
      mission (MSL).`,
        },
    },
    name: '',
    email: '',
    phoneNumber: '',
    ccNumber: '',
    route: '',
};

export function reducer(state = initialState, action) {
    const update = sliceOfState => Object.assign({}, state, sliceOfState);
    switch (action.type) {
        case LOCATION_CHANGE:
            return update({ route: action.payload });
        case ITEM_ADDED_TO_CART:
            return update({ cart: state.cart.concat(action.payload) });
        case NAME_ENTERED:
            return update({ name: action.payload });
        case EMAIL_ENTERED:
            return update({ email: action.payload.toLowerCase() });
        case PHONE_NUMBER_ENTERED: {
            const phoneNumber = action.payload.replace(/(\s|[^\d])/g, '').slice(0, 10);
            return update({ phoneNumber });
        }
        case CREDIT_CARD_NUMBER_ENTERED:
            return update({ ccNumber: action.payload.replace(/(\s|[^\d])/g, '').slice(0, 16) });
        default:
            return state;
    }
}
