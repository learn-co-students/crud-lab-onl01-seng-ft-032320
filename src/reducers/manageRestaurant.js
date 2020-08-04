import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
   state = {
      restaurants: [],
      reviews: []
   }, action) {
   switch (action.type) {

      case "ADD_RESTAURANT":

         const restaurant = { id: cuid(), text: action.text }

         return {
            ...state,
            restaurants: [...state.restaurants, restaurant]
         }

      case "ADD_REVIEW":
         const review = { id: cuidFn(), 
                          restaurantId: action.review.restaurantId, 
                          text: action.review.text }

         return {
            ...state,
            reviews: [...state.reviews, review]
         }

      case "DELETE_RESTAURANT":
         return {
            ...state,
            restaurants: [...state.restaurants.filter(r => { return r.id !== action.id})]
         }

      case "DELETE_REVIEW":
         return {
            ...state,
            reviews: [...state.reviews.filter(r => r.id !== action.restaurantId)]
         }

      default:
         return state
   }
}