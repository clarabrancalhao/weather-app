import {
  GET_COORDINATES_PENDING,
  GET_COORDINATES_COMPLETED,
  GET_COORDINATES_REJECTED,
  GET_CURRENT_COORDINATES,
  GET_LOCALE_COMPLETED,
} from './actions'

const initialState = {
  latitude: 0,
  longitude: 0,
  loading: false,
}

const localesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES_PENDING:
      return {
        ...state,
        loading: true,
      }
    case GET_COORDINATES_COMPLETED:
      return {
        ...state,
        loading: false,
        latitude: action.payload.lat,
        longitude: action.payload.lng,
      }
    case GET_COORDINATES_REJECTED:
      return {
        loading: false,
      }
    case GET_CURRENT_COORDINATES:
      return {
        ...state,
        loading: false,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }
    case GET_LOCALE_COMPLETED:
      return {
        ...state,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
      }

    default:
      return {
        ...state,
      }
  }
}

export default localesReducer
