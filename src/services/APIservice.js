import axios from "axios";

const BASE_URL = 'http://localhost:1337/'

//music

export async function newsLetterApi(email) {
    const url = BASE_URL+'newsletters'
    const result = await axios.post(url, email)

    return result
}

export async function getAllmusics() {
    const response = await axios.get(BASE_URL+'music')
    
    return response.data
}

export async function getAllArtists() {
    const response = await axios.get(BASE_URL+'artists')

    return response.data
}

export async function getAllAlbum() {
    const response = await axios.get(BASE_URL+'albums')

    return response.data
}

export async function getAlbum(id) {
    const response = await axios.get(BASE_URL+'albums/'+id)

    return response.data
}

export async function Music(music) {
    const url = BASE_URL+'music'
    const result = await axios.post(url, music)

    return result
}

//======================================================

// export async function contactApi(contact) {
//     const url = BASE_URL+'contacts'
//     const result = await axios.post(url, contact)

//     return result;
// }

// export async function getAllArticles() {
//     const response =  await axios.get(BASE_URL+'posts')

//     return response.data
// }

// export async function loginApi(email, pwd) {
//     const url = BASE_URL + `users?email=${email}&pwd=${pwd}`
//     const result = await axios.get(url)

//     return result.data
// }

// export async function getArticleById(id) {
//     const result = await axios.get(BASE_URL + 'posts/'+ id)
    
//     return result.data
// }

// export async function registerApi(data) {
//     const url = BASE_URL + 'users'
//     const result = await axios.post(url, data)

//     return result.data    
// }