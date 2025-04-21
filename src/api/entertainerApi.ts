import axios from 'axios';

const API_URL = 'https://is413finalhoopes-d8g4b3afaxc0hggt.eastus-01.azurewebsites.net/api/Entertainers';

export const getEntertainers = () => axios.get(API_URL);
export const getEntertainerById = (id: number) => axios.get(`${API_URL}/${id}`);
export const addEntertainer = (entertainer: any) => axios.post(API_URL, entertainer);
export const updateEntertainer = (id: number, entertainer: any) => axios.put(`${API_URL}/${id}`, entertainer);
export const deleteEntertainer = (id: number) => axios.delete(`${API_URL}/${id}`);