import axios from "axios";

export const getSearch = async ({ type, method = 'get', data, params }) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_SEARCH_API_URL,
            url: `${type}`,
            method,
            data,
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY, ...params },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data
    }
    catch (error) {
        console.log('Api message:', error)
    }
};

export const getDetails = async ({ type, method = 'get', key }) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_DETAILS_API_URL,
            url: `${type}/${key}`,
            method,
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }
    catch (error) {
        console.log('Api message:', error)
    }
};

export const getImageConfig = async () => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_IMAGE_CONFIG_API_URL,
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data.images;
    }
    catch (error) {
        console.log('Api message:', error)
    };
};

export const getImage = async ({ size, key }) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_IMAGE_API_URL,
            url: `${size}${key}`,
            method: 'get',
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })

        return response.data;
    }
    catch (error) {
        console.log('Api message:', error)
    }
};

export const getCast = async ({ type, method = 'get', key }) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_DETAILS_API_URL,
            url: `${type}/${key}/credits`,
            method,
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }
    catch (error) {
        console.log('Api message:', error)
    }
};

export const getCredits = async ({ type, method = 'get', key }) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_DETAILS_API_URL,
            url: `person/${key}/${type}_credits`,
            method,
            params: { 'api_key': process.env.REACT_APP_THE_MOVIE_DB_API_KEY },
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data;
    }
    catch (error) {
        console.log('Api message:', error)
    }
};
