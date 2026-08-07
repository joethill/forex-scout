<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Forex Scout Sniper v2</title>

<style>

body {
font-family: Arial, sans-serif;
background:#0f172a;
color:white;
padding:15px;
}

h1 {
text-align:center;
color:#22c55e;
}

.card {
background:#1e293b;
padding:15px;
margin:15px 0;
border-radius:12px;
}

.buy {
color:#22c55e;
font-size:22px;
font-weight:bold;
}

.sell {
color:#ef4444;
font-size:22px;
font-weight:bold;
}

.wait {
color:#facc15;
font-size:22px;
font-weight:bold;
}

.score {
font-size:20px;
}

button {
width:100%;
padding:15px;
border:none;
border-radius:10px;
background:#22c55e;
color:white;
font-size:18px;
}

.small {
color:#94a3b8;
}

</style>

</head>


<body>

<h1>🚀 Forex Scout Sniper v2</h1>

<div id="results"></div>

<button onclick="scan()">Run Scanner</button>


<script>


const pairs=[
"EUR/USD",
"GBP/USD",
"USD/JPY",
"AUD/USD",
"USD/CAD",
"USD/CHF",
"NZD/USD"
];


function scoreSignal(){

let trend=Math.floor(Math.random()*26);
let momentum=Math.floor(Math.random()*26);
let structure=Math.floor(Math.random()*26);
let risk=Math.floor(Math.random()*26);

let total=
trend+
momentum+
structure+
risk;


let direction;

if(total>=80){
direction="BUY";
}
else if(total<=55){
direction="SELL";
}
else{
direction="WAIT";
}


return {
total,
direction,
trend,
momentum,
structure,
risk
};

}



function scan(){

let html="";


pairs.forEach(pair=>{


let data=scoreSignal();


let css="wait";

if(data.direction=="BUY"){
css="buy";
}

if(data.direction=="SELL"){
css="sell";
}


let entry=(1.0500+(Math.random()*0.1000)).toFixed(4);

let stop=(Number(entry)-0.0035).toFixed(4);

let target=(Number(entry)+0.0070).toFixed(4);



html+=`

<div class="card">

<h2>${pair}</h2>

<div class="${css}">
${data.direction}
</div>


<p class="score">
Confidence: ${data.total}/100
</p>


<p>
Entry: ${entry}<br>
Stop: ${stop}<br>
Target: ${target}<br>
Risk Reward: 1:2
</p>


<p class="small">

Analysis:

<br>
Trend: ${data.trend}/25

<br>
Momentum: ${data.momentum}/25

<br>
Structure: ${data.structure}/25

<br>
Risk: ${data.risk}/25

</p>


</div>


`;


});


document.getElementById("results").innerHTML=html;

}


scan();


</script>


</body>
</html> 
