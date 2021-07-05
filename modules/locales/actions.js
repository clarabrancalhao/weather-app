import axios from 'axios'
//import Snackbar from 'react-native-snackbar'

export const GET_COORDINATES_PENDING = 'GET_COORDINATES_PENDING'
export const GET_COORDINATES_COMPLETED = 'GET_COORDINATES_COMPLETED'
export const GET_COORDINATES_REJECTED = 'GET_COORDINATES_REJECTED'
export const GET_CURRENT_COORDINATES = 'GET_CURRENT_COORDINATES'
export const GET_LOCALE_COMPLETED = 'GET_LOCALE_COMPLETED'
export const PENDING = 'PENDING'

export const getCoordinates = ({ city, navigation }) => {
  return (dispatch) => {
    dispatch(getCoordinatesPending())
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?key=e85809527b0341b18712ec1bacc3aab9&q=${city}`
      )
      .then((response) => {
        dispatch(getLocaleCompleted(response.data?.results[0].components))
        dispatch(getCoordinatesCompleted(response.data?.results[0].geometry))
        navigation.push('Weather')
      })
      .catch((error) => {
        dispatch(getCoordinatesRejected())
      })
  }
}

const getLocaleCompleted = (locale) => ({
  type: GET_LOCALE_COMPLETED,
  payload: {
    city: locale?.town ? locale?.town : locale?.city,
    state: locale?.state_code,
    country: locale['ISO_3166-1_alpha-2'],
  },
})

const getCoordinatesPending = () => ({
  type: GET_COORDINATES_PENDING,
})

export const getCoordinatesCompleted = (coordinates) => ({
  payload: coordinates,
  type: GET_COORDINATES_COMPLETED,
})

const getCoordinatesRejected = () => ({
  type: GET_COORDINATES_REJECTED,
})

export const getCurrentLocale = ({ latitude, longitude, navigation }) => {
  return (dispatch) => {
    dispatch(getCoordinatesPending())
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e85809527b0341b18712ec1bacc3aab9`
      )
      .then((response) => {
        dispatch(getLocaleCompleted(response.data.results[0].components))
      })
      .catch((error) => {
        dispatch(getCoordinatesRejected(error))
      })
  }
}

export const pending = () => ({
  type: PENDING,
})
