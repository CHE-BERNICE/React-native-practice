import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Db-Hlmx_6FiicaEyuMrStlE6CeZpXY89Vdz-mbWUnlkFq5wvKXXtFPPdvPJplP9elSvCBk7JP5LrT61KgYQR864QwjP6uJlsOGuSOCZM9BuzVSrFPFxBX_TY7sMjZHYx'
    }
});