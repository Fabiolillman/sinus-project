import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000/api"

export async function getItemFromId(itemId) {
    return await axios.get('/items/'+itemId)
}

export async function getItemsFromCategory(category) {
    return await axios.get('/items/?category='+category)
}