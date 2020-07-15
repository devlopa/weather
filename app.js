
function toCelsius(temp){
    let result = temp - 273.15;
    return result;
}

let container = document.querySelector('.container');
let input = document.createElement('input');
    input.type = "text";
    input.setAttribute('id','search');
    input.style.cssText = "padding:10px;display:inline-block;width:80%";
    

    let btn = document.createElement('button');
    btn.type="button";
    btn.textContent = "Search...";
    btn.setAttribute('id','btn');
    btn.style.cssText = 'padding:10px;background-color:purple;color:white;width:20%;';
    
    container.appendChild(input);
    container.appendChild(btn);

    let loc = document.getElementById('search');
    
    

    

let button = document.getElementById('btn');
button.addEventListener('click',function(){
    getData(loc.value);
    });

    
function getData(location){
        
     let response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bf7e6be66511e0a19b272803d8a4f3d3`,{mode:'cors'})
     .then(result=>result.json())
     .then(result=>displayData(result));
      
     
     }
    
    
    function displayData(data){
        let latitude = data.coord.lat;
        let longitude = data.coord.lon;
        let humidity = data.main.humidity;
        let maxTemp = toCelsius(data.main.temp_max) + " C";
        let minTemp = toCelsius(data.main.temp_min) + " C";
        let name = data.name;
        let description = data.weather[0].description;
        let main = data.weather[0].main;
        
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class','wrap');
        container.appendChild(wrapper);

        let city = document.createElement('h1');
        city.innerHTML = "Location   : " + name;
        city.style.cssText = 'text-align:center;color:#fff;background-color:purple;padding:10px';
        
        let img = document.createElement('img');
        img.style.cssText = "width:150px; display: block; margin:0 auto; height:150px; border-radius:50%; margin-bottom:50px;";
        let resp = fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EqxXVBK69LByNR7jC23GodssP8ThubXE&s=${description}`,{mode:'cors'})
            .then(response=>response.json())
            .then(res=>{
                console.log(res.data.images.original.url);
                img.src= res.data.images.original.url;
            });
        wrapper.appendChild(img);
        
        let lat = document.createElement('p');
        let lon = document.createElement('p');
        let hum = document.createElement('p');
        let max = document.createElement('p');
        let min = document.createElement('p');
        let mai = document.createElement('p');
        let desc = document.createElement('p');

        lat.innerHTML = "Latitude : " + latitude;
        lon.innerHTML = "Longitude : " + longitude;
        hum.innerHTML = "Humidity : " + humidity;
        max.innerHTML = "Max Temprature : " + maxTemp;
        min.innerHTML = "Min Temprature : " + minTemp;
        mai.innerHTML = "Weather : " + main;
        desc.innerHTML = "Details : " + description;

        
        wrapper.appendChild(input);
        wrapper.appendChild(btn);
        wrapper.appendChild(city);
        wrapper.appendChild(lat);
        wrapper.appendChild(lon);
        wrapper.appendChild(hum);
        wrapper.appendChild(max);
        wrapper.appendChild(min);
        wrapper.appendChild(mai);
        wrapper.appendChild(desc);
        wrapper.style.cssText = "padding:30px;"

        
    }

    
    






