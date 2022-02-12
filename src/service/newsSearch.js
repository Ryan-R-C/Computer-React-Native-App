import api from "./api"

/*/
WITH THIS API IT IS POSSIBLE TO SEARCH AND CHOOSE THE LANGUAGE!
*/

const newsSearch = async (lang, search) => {

    console.log(lang)
    // lang = 'PT'
    return await api.get(`search?q="${search}"&lang=${lang}`).then(
        (response) => {
            // console.log(response)
            // console.log(response.data.articles)
            return response.data.articles
        }
    )  

}
export default newsSearch