# Open Weather Map API and storing cities in the MongoDB database

https://open-weather-map-api-mongodb.herokuapp.com/

https://github.com/coding-to-music/open-weather-map-api-mongodb

By Idan Shalem https://github.com/IdanShalem

https://github.com/IdanShalem/WeatherApp

# Installation

```java
npm i
```

modify .env file

```java
npm start
```

# Deploy to Heroku

```java
heroku create open-weather-map-api-mongodb
```

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/OpenWeatherMapWeatherDB?retryWrites=true&w=majority"
```

```java
git push heroku
```

```java
heroku logs --tail
```
