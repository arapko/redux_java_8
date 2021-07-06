export default class Api{

    static baseUrl = "http://api.openweathermap.org/data/2.5/";

    // http://api.openweathermap.org/data/2.5/weather?q=Haifa&appid=c3bd24f13cecf13f96cfdc182bc8d4e8&units=metric
    static async getWeatherInCity(cityName,token){
        const url = `${this.baseUrl}weather?q=${cityName}&appid=${token}&units=metric`;
        console.log(url);
        const request = await fetch(url);
        if(!request.ok){
            throw Error("Error");
        }
        return await request.json();
    }

    //http://open.mapquestapi.com/geocoding/v1/reverse?key=cHs20kNR8i5YWUWbCnc8i4NPDYuRZLp1&location=32.820320,34.959728&includeRoadMetadata=true&includeNearestIntersection=true
    static async getCityByLocation(latitude,longitude){
        const url = `http://open.mapquestapi.com/geocoding/v1/reverse?key=cHs20kNR8i5YWUWbCnc8i4NPDYuRZLp1&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`;
        const request = await fetch(url);
        if(!request.ok){
            throw Error("Error");
        }
        return await request.json();
    }

}