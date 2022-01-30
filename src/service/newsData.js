import api from "./api"

/*/
WITH THIS API IT IS POSSIBLE TO SEARCH AND CHOOSE THE LANGUAGE!
*/

const newsData = async () => {
    return await api.get(`search?q="tecnologia"&lang=En`).then(
        (response) => {
            console.log(response)
            console.log(response.data.articles)
            return response.data.articles
        }
    )  

}
export default newsData