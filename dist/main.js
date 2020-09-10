class Cities {

    constructor() {
        cityData = []
    }

    getDataFromDB() {
        this.cityData.length = 0
        $.get('/cities', function(citiesDB) {
            citiesDB.forEach(city => this.cityData.push(city))
        })
    }

    async getCityData(cityName) {
        const city = await $.get(`/city/${cityName}`)
        this.cityData.push(city)
    }

    saveCity(city) {
        $.post(`/city`, city, function(cityDB) {
            this.cityData.push(cityDB)
        })
    }

}