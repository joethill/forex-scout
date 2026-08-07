// Forex Scout V3 - Signal Engine

function analyze(pair, price){

    let signal = "WAIT";
    let confidence = 50;


    // Basic framework (we will upgrade this with real indicators next)

    if(pair === "EUR_USD"){

        signal = "BUY";
        confidence = 78;

    }


    if(pair === "GBP_USD"){

        signal = "WAIT";
        confidence = 60;

    }


    if(pair === "USD_JPY"){

        signal = "SELL";
        confidence = 74;

    }


    return {

        pair: pair,
        price: price,
        signal: signal,
        confidence: confidence

    };

}
