import axios from '../../node_modules/axios/index';

class NewsService {

  async getWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.541&lon=126.986&appid=${process.env.REACT_APP_WEATHER_KEY}`,
      );
      return response.data.weather[0].description;
    } catch (e) {
      console.log(e);
    }
  }

  async getNews(query) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_KEY}`,
      );

      //  https://newsapi.org/v2/top-headlines?country=kr&category=news-viewer&apiKey=98e2a5c908f541c79f48db6c6ed77d61
      return response.data.articles;
    } catch (e) {
      console.log(e);
    }
  }


}
export default NewsService;