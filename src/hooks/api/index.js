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

export const processCards = async (rawCards, fullFetch = false) => {
  return Promise.all(rawCards.map(async (card) => ({
        ...card,
        homeworld_name: await getAttribute(card.homeworld, 'name'),
        species_names: await Promise.all(card.species.map(async (attrib) => await getAttribute(attrib, 'name'))),
        vehicle_names: !fullFetch ? [] : await Promise.all(card.vehicles.map(async (attrib) => await getAttribute(attrib, 'name'))),
        starship_names: !fullFetch ? [] : await Promise.all(card.starships.map(async (attrib) => await getAttribute(attrib, 'name')))
  }))).catch((err) => []);
};

export const getAttribute = async (url, key) => {
  return await fetch(url).then(async (res) => await res.json().then((json)=> json[key])).catch((error) => 'Unknown');
};

export const fetchCard = async (url) => {
    return await fetch(url)
      .then(async(rawResponse) => await rawResponse.json().then(async (response) => (await processCards([response], true))[0]))
      .catch((err) => null);
}

export const fetchCards = async () => {
    return await fetch(cardsUrl)
      .then(async(rawResponse) => await rawResponse.json().then(async (response) => await processCards(response.results)))
      .catch((err) => []);
}