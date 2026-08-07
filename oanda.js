// Forex Scout V3 - OANDA Connector

const OANDA_URL = "https://api-fxpractice.oanda.com";

let apiToken = "";


function setToken(token){
    apiToken = token;
}


async function getPrice(pair){

    if(!apiToken){
        return null;
    }

    try {

        let response = await fetch(
            `${OANDA_URL}/v3/accounts/YOUR_ACCOUNT_ID/pricing?instruments=${pair}`,
            {
                headers:{
                    "Authorization": "Bearer " + apiToken
                }
            }
        );


        let data = await response.json();

        let price =
        data.prices[0].closeoutBid;


        return price;


    } catch(error){

        console.log(error);

        return null;
    }

}
