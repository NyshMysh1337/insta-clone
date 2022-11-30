import axios from 'axios'

const API_ENDPIONT = 'http://localhost:4000'

export const makeRequest = (config) => {
    config.url = `${API_ENDPIONT}${config.url}`

    return axios(config)
}

