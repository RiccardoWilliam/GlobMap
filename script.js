var map = L.map('map', {
    maxZoom: 20,
    minZoom: 5,
    maxBounds: [
    //south west
    [3.162456,-132.280274],
    //north east
    [55.973798,164.162766]
    ], 
}).setView([40.207174, 18.311443], 9);

var acqua = L.icon({
    iconUrl: "acqua levissima.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var acquaP= L.marker([46.467621, 10.378150], { icon: acqua }).addTo(map);

var airpods = L.icon({
    iconUrl: "air pods.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var airpodsP =L.marker([21.027763,105.834160], { icon:airpods }).addTo(map);
var biscotti = L.icon({
    iconUrl: "biscotti selex.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var biscottiP =L.marker([45.589039,11.367050], { icon: biscotti }).addTo(map);
var burrocacao = L.icon({
    iconUrl: "burro cacao bottega verde.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var burrocacaoP =L.marker([44.171940,12.221460], { icon: burrocacao}).addTo(map);
var uriage = L.icon({
    iconUrl: "burro cacao uriage.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var uriageP=L.marker([48.856613,2.352222], { icon: uriage }).addTo(map);
var cremamani = L.icon({
    iconUrl: "crema mani argan bottega verde.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var cremamaniP=L.marker([33.971588,-6.849813], { icon: cremamani }).addTo(map);
var dentrificio = L.icon({
    iconUrl: "dentrificio.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var dentrificioP=L.marker([52.520008,13.404954], { icon: dentrificio }).addTo(map);
var dexal = L.icon({
    iconUrl: "dexal vetri.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var dexalP=L.marker([46.113811,13.092080], { icon: dexal }).addTo(map);
var manga = L.icon({
    iconUrl: "fumetto giapponese.jpg",
    iconSize: [250,350],
    iconAnchor: [125,125],
})
var mangaP=L.marker([35.689487,139.691711], { icon: manga}).addTo(map);
var monster = L.icon({
    iconUrl: "monster.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var monsterP=L.marker([37.090240,-95.712891], { icon: monster }).addTo(map);
var mouse = L.icon({
    iconUrl: "mouse gaming.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var mouseP=L.marker([22.543097,114.057861], { icon: mouse }).addTo(map);
var pan = L.icon({
    iconUrl: "pan di stelle.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var panP=L.marker([40.997501,15.652370], { icon: pan }).addTo(map);
var pellet = L.icon({
    iconUrl: "pellet.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var pelletP=L.marker([45.421532,-75.697189], { icon: pellet }).addTo(map);
var redmi = L.icon({
    iconUrl: "redmi.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var redmiP=L.marker([39.904202,116.407394], { icon: redmi }).addTo(map);
var shampoo = L.icon({
    iconUrl: "shampoo bottega verde.png",
    iconSize: [250,350],
    iconAnchor: [125,125],
})
var shampooP=L.marker([40.734470,14.571730], { icon: shampoo}).addTo(map);
var vino = L.icon({
    iconUrl: "vino negramaro.png",
    iconSize: [250,450],
    iconAnchor: [125,125],
})
var vinoP=L.marker([40.353291,18.174009], { icon: vino }).addTo(map);
var wurstel = L.icon({
    iconUrl: "wurstel eurospin.png",
    iconSize: [250,250],
    iconAnchor: [125,125],
})
var wurstelP = L.marker([44.647129, 10.925227], { icon: wurstel }).addTo(map);
var scuola = L.icon({
    iconUrl: "school icon.png",
    iconSize: [250,250],
    iconAnchor:[125,125]
})
var scuolaP = L.marker([40.207174, 18.311443], { icon: scuola }).addTo(map)
scuolaP.bindPopup("<b>Scuola Superiore di secondo grado Trinchese, Martano</b>")

acquaP.bindPopup("<b>nome: Acqua Levissima <br><br> marca: Levissima<br><br> luogo di produzione: Bormio</b>");
airpodsP.bindPopup("<b>nome: Airpods<br><br> marca: Apple <br><br> luogo di produzione: Vietnam</b>");
biscottiP.bindPopup("<b>nome: Biscotti Fiori di cioccolato <br><br> marca: Selex <br><br> luogo di produzione: Italia</b>");
burrocacaoP.bindPopup("<b>nome: Burro cacao<br><br> marca: Bottega Verde <br><br> luogo di produzione:Italia</b>");
uriageP.bindPopup("<b>nome: Stick labbra <br><br> marca: Uriage <br><br> luogo di produzione: Francia</b>");
cremamaniP.bindPopup("<b>nome: Crema mani Argan  <br><br> marca: Bottega Verde <br><br> luogo di produzione: Marocco</b>");
dentrificioP.bindPopup("<b>nome: Dentrificio Multi Protezione <br><br> marca: AZ <br><br> luogo di produzione: Germania</b>");
dexalP.bindPopup("<b>nome: Detersivo vetri <br><br> marca: Dexal <br><br> luogo di produzione: Italia </b>");
mangaP.bindPopup("<b>nome:  Demon Slayer <br><br> marca: Panini Comics (distributore italiano)<br><br> luogo di produzione: Giappone</b>");
monsterP.bindPopup("<b>nome: Monster <br><br> marca: Monster<br><br> luogo di produzione: USA</b>");
mouseP.bindPopup("<b>nome: Gaming mouse <br><br> marca: Pictek<br><br> luogo di produzione: Cina,Shenzen</b>");
panP.bindPopup("<b>nome: Pan di stelle <br><br> marca: Pan di stelle<br><br> luogo di produzione: Italia</b>");
pelletP.bindPopup("<b>nome: Pellets <br><br> marca: Drau Holz <br><br> luogo di produzione: Canada</b>");
redmiP.bindPopup("<b>nome: Redmi <br><br> marca: Xiaomi <br><br> luogo di produzione: Cina</b>");
shampooP.bindPopup("<b>nome: Latte di curcuma <br><br> marca: Bottega Verde <br><br> luogo di produzione: Italia</b>");
vinoP.bindPopup("<b>nome: Solemoro <br><br> marca: Negramoro <br><br> luogo di produzione: Salento</b>");
wurstelP.bindPopup("<b>nome: Wurstel <br><br> marca: eurospin(distributore)<br><br> luogo di produzione: Italia</b>");


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiczFyd2lsbGlhbSIsImEiOiJjbDM2NWk2NHMwOTZvM2xxbnZuOGYwcGM3In0.c2P7vTEBTaxL6xFGAaK8LQ'
}).addTo(map);




