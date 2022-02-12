import api from "./api"

/*/
WITH THIS API IT IS POSSIBLE TO SEARCH AND CHOOSE THE LANGUAGE!
*/

const newsData = async (lang) => {
    return await api.get(`search?q="tecnologia"&lang=${lang}`).then(
        (response) => {
            return response.data.articles
        }
    )  

}
export default newsData