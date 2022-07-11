/*export const People = async (
    await fetch("https://swapi.dev/api/people")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if (data.results !== []) {
                return [data.results]
            }
        })
)*/

export const cardsUrl = 'https://swapi.dev/api/people/';

export const processCards = async (response, fullFetch = false) => {
  const rawCards = fullFetch ? [response] : response.results;
  return Promise.all(rawCards.map(async (card) => ({
        ...card,
        homeworld_name: await getAttribute(card.homeworld, 'name'),
        species_names: await Promise.all(card.species.map(async (attrib) => await getAttribute(attrib, 'name'))),
        vehicle_names: !fullFetch ? [] : await Promise.all(card.vehicles.map(async (attrib) => await getAttribute(attrib, 'name'))),
        starship_names: !fullFetch ? [] : await Promise.all(card.starships.map(async (attrib) => await getAttribute(attrib, 'name'))),
        // film_names: !fullFetch ? [] : await Promise.all(card.films.map(async (attrib) => await getAttribute(attrib, 'title')))
  }))).catch((err) => []);
};


export const getAttribute = async (url, key) => {
  return await fetchWithTimeout(url, { timeout: 2000 }).then(async (res) => await res.json().then((json)=> json[key])).catch((error) => 'Unknown');
};

export const fetchCards = async (url = cardsUrl, fullFetch = false) => {
    return await fetch(url)
      .then(async(rawResponse) => await rawResponse.json().then(async (response) => await processCards(response, fullFetch)))
      .catch((err) => []);
}

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);
  return response;
}