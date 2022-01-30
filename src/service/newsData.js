import api from "./api"

const newsData = async () => {
    return await api.get(`search?q=Tesla`).then(
        (response) => {
            console.log(response)
            console.log(response.data.articles)
            return response.data.articles
        }
    )  

}
export default newsData