import api from "./api"

/*/
WITH THIS API IT IS POSSIBLE TO SEARCH AND CHOOSE THE LANGUAGE!
*/

const newsSearch = async (lang, search) => {
    return await api.get(`search?q="${search}"&lang=${lang}`).then(
        (response) => {
            return response.data.articles
        }
    )  

}
export default newsSearch