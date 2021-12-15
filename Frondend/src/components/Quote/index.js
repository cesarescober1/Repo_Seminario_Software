import { useState } from 'react'
import { publicAxios } from '../../store/utils/Axios';

import { PrimaryButton } from '../UI/Button';



const Quote = () => {

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
        }
    };

    axios.request(options).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.error(error);
    });
    const onBtnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        publicAxios.post(
            '/api/quote', axios);


    };
    return ( <
        div style = {
            { width: "100%", padding: '0.5em', marginTop: '1em' }
        } >
        <
        PrimaryButton onClick = { onBtnClick }
        background_Color = "#fff" > Obtener Quote < /PrimaryButton>  < /
        div >
    );
}
export default Quote;