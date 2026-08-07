// Forex Scout V3 - OANDA Live Connection

const OANDA_URL = "https://api-fxpractice.oanda.com";

let apiToken = "";
let accountID = "";


function setCredentials(token, account){

    apiToken = token;
    accountID = account;

}



async function getPrice(pair){

    try {

        const response = await fetch(

        `${OANDA_URL}/v3/accounts/${accountID}/pricing?instruments=${pair}`,

        {

            headers: {

                "Authorization":
                "Bearer " + apiToken,

                "Content-Type":
                "application/json"

            }

        });


        const data = await response.json();


        if(data.prices){

            return data.prices[0].closeoutAsk;

        }


        return null;


    }

    catch(error){

        console.log(error);

        return null;

    }

}
