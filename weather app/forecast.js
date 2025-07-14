const key = '9yfpVGDtyDZbzpinRhB7ijhSsQHbFmMi';

const getweather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const querry = `${id}?apikey=${key}`

    const response = await fetch(base + querry);
    const data = await response.json();

    return data[0];
};

const getcity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const querry = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + querry);
    const data = await response.json();

    return data[0];

}

