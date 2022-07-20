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
import Crypto from 'crypto-js';
export const cardsUrl = 'https://swapi.dev/api/people/';

export const processCards = async (response, fullFetch = false) => {
  const rawCards = fullFetch ? [response] : response.results;
  return Promise.all(rawCards.map(async (cardData) => {
    let card = {
          ...cardData,
          homeworld_name: await getAttribute(cardData.homeworld, 'name'),
          species_names: await Promise.all(cardData.species.map(async (attrib) => await getAttribute(attrib, 'name'))),
          vehicle_names: [],
          starship_names: [],
          complete: false,
    }
    card = fullFetch ? loadCardDetails(card) : card;
    return card;
  })).catch((err) => []);
};

export const loadCardDetails = async (card) => {
  return {
    ...card,
    vehicle_names: await Promise.all(card.vehicles.map(async (attrib) => await getAttribute(attrib, 'name'))),
    starship_names:  await Promise.all(card.starships.map(async (attrib) => await getAttribute(attrib, 'name'))),
    complete: true,
    // film_names: await Promise.all(card.films.map(async (attrib) => await getAttribute(attrib, 'title')))
  }
}

export const getAttribute = async (url, key) => {
  return await fetchWithCache(url, { timeout: 5000 }).then(async (res) => res.body[key]).catch((error) => 'Unknown');
};

export const fetchCards = async (url = cardsUrl, fullFetch = false) => {
    return await fetchWithCache(url, { timeout: 25000 })
      .then(async(response) => await processCards(response.body, fullFetch))
      .catch((err) => []);
}


async function fetchWithCache(resource, options = {}) {
  const cleanOpts = JSON.parse(JSON.stringify(options));
  const cacheId = Crypto.MD5(JSON.stringify({resource, cleanOpts}));
  const cacheStore = localStorage.getItem(cacheId);

  if(cacheStore && cacheStore.length > 10)
    return JSON.parse(cacheStore);
  
  const response = await fetchWithTimeout(resource, {
    ...options,
  });
  
  const responseData = {
    ...response,
    body: await response.json(),
  }

  if([200, 304].includes(response.status)) localStorage.setItem(cacheId, JSON.stringify(responseData))

  return responseData;
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