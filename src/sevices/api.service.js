export async function fetchByName(name) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'K9GJ60Q-AP2498H-GB2BRZ8-021M8BQ',
    },
  };

  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`,
    options
  );

  const data = await response.json();

  if (data.statusCode === 403) {
    alert('лимит запросов превышен');
    return;
  }

  return data;
}

export async function fetchById(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'K9GJ60Q-AP2498H-GB2BRZ8-021M8BQ',
    },
  };

  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    options
  );

  const data = await response.json();

  return data;
}

export async function fetchByPage(page, name) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'K9GJ60Q-AP2498H-GB2BRZ8-021M8BQ',
    },
  };

  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=10&query=${name}`,
    options
  );

  const data = await response.json();

  return data;
}
