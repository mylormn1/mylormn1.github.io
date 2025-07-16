const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateui = (data) => {

    console.log(data);

    const {citydetails,weatherdetails} = data;

    icon.innerHTML=`
    <div class="icon pg-light mx-auto text-center">
    <img src="" alt="">
    </div>
    `;

    details.innerHTML = `
    <h5 class="my-3"> ${citydetails.LocalizedName}</h5>
    <div class="my-3">${weatherdetails.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherdetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    //images and icon managing
    const iconsrc = `./img/icons/${weatherdetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);  // This will work if 'icon' is already the <img>


    let timesrc= weatherdetails.IsDayTime ? 'weatherapp/img/day.svg' : 'weatherapp/img/night.svg';
    
    time.setAttribute('src',timesrc)

    //remove d-none class if not removed
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
    
}

const updatecity = async (city) =>{
    const citydetails = await getcity(city);
    const weatherdetails = await getweather(citydetails.Key);

    return{ citydetails , weatherdetails }

}

cityform.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    scrollTo(200,200);
    //get city value
    const city = cityform.city.value.trim();
    cityform.reset();

    //update ui with new city

    updatecity(city)
        .then(data => updateui(data))
        .catch(err => console.log(err))
    //scroll to card
    
});
