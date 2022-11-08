const getEpisodsUrl = "https://rickandmortyapi.com/api/episode";
var getEpisods: any
function getAllEpisods() {
    try {
        fetch(getEpisodsUrl).then(response => response.json())
            .then((responseJson: Episods) => {
                return responseJson.results
            }).then((episods: resultObject[]) => {
                episods.forEach(async function (characters: any, index: number) {
                    characters.characters.map(async function (char: any, ind: number) {
                        const posts = await fetch(char).then(resp => {
                            return resp.json();
                        })
                        episods[index].characters[ind] = posts
                        getEpisods = episods
                        console.log('string is manipulated with object!!!!!...', getEpisods)
                    });
                });
            }).catch(error => console.error('its error', error))
    }
    catch (err) {
        console.log(err)
    }
}
getAllEpisods()

interface Episods {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: number
    },
    results: resultObject[]
}
interface resultObject {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[]
}