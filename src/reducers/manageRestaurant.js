
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT': 
            return {...state, restaurants: [...state.restaurants, {text: action.payload, id: cuid()}]}
        
        case 'DELETE_RESTAURANT':
            let idx = state.restaurants.findIndex(rest => rest.id === action.payload)
            return {...state, restaurants: state.restaurants.slice(0,idx).concat(state.restaurants.slice(idx+1))}

        case 'ADD_REVIEW': 
            return {...state, reviews: [...state.reviews, {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}]}

        case 'DELETE_REVIEW' : 
            let ind = state.reviews.findIndex(rev => rev.id === action.payload)
            return {...state, reviews: state.reviews.slice(0,ind).concat(state.reviews.slice(ind+1))}

        default: 
            return state 
    }
}
