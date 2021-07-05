import {
  GET_COORDINATES_PENDING,
  GET_COORDINATES_COMPLETED,
  GET_COORDINATES_REJECTED,
  GET_LOCALE_COMPLETED,
  PENDING,
} from './actions'

const initialState = {
  latitude: 0,
  longitude: 0,
  loading: false,
  curLocation: {},
  localesHistory: [],
}

const localesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        loading: true,
      }
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
        ...state,
        loading: false,
      }

    case GET_LOCALE_COMPLETED:
      const cur = {
        city: action.payload?.city,
        state: action.payload?.state,
        country: action.payload?.country,
      }

      const locales = state.localesHistory.slice(0, 2)

      const filteredLocales = locales.filter((locale) => locale.city !== action.payload.city)

      return {
        ...state,
        loading: false,
        curLocation: cur,
        localesHistory: [cur, ...filteredLocales],
      }

    default:
      return {
        ...state,
      }
  }
}

export default localesReducer
