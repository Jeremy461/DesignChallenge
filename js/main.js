function initMap() {
    var barcelona = {lat:41.3790607 , lng:2.1704957 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        scrollwheel: false,
        draggable: true,
        center: barcelona
    });

    var SagradaFamilia = {lat:41.4044991, lng:2.1721009};
    var PasseigdeGràcia = {lat:41.3925907, lng:2.1626727};
    var MercadodeLaBoqueria = {lat:41.3817399, lng:2.1693966};
    var SantaMariaDelMar = {lat:41.3838871, lng:2.1798824};
    var BarcelonaMuseumofContemporaryArt = {lat:41.3831913, lng:2.1646781};
    var PlaçadeCatalunya = {lat:41.3870154, lng:2.1678584};
    var PalauNacional = {lat:41.3688074, lng:2.151203};
    var GaudiHouseMuseum = {lat:41.4144343, lng:2.1513786};
    var ParkGüell = {lat:41.4144948,lng:2.1505058};
    var MonastirdePedralbes = {lat:41.3953392, lng:2.1098814};
    var ArcdeTriomf = {lat:41.3913612, lng:2.1764942};
    var MuseuMarítimdeBarcelona = {lat:41.3752357, lng:2.1737588};
    var BarcelonaZoo = {lat:41.386333, lng:2.1876689};

    var marker1 = new google.maps.Marker({
        position: SagradaFamilia,
        map: map,
        title: 'Sagrada Familia',
        icon: "http://www.tripandrate.com/content/images/barcelona/places/gaudi/sagrada-familia.min.jpg",
        scaledSize: new google.maps.Size(50, 50)
    });

    var marker2 = new google.maps.Marker({
        position: PasseigdeGràcia,
        map: map,
        title: 'Passeig de Gràcia'
    });

    var marker3 = new google.maps.Marker({
        position: MercadodeLaBoqueria,
        map: map,
        title: 'Mercado de La Boqueria'
    });

    var marker4 = new google.maps.Marker({
        position: SantaMariaDelMar,
        map: map,
        title: 'Santa Maria Del Mar'
    });

    var marker5 = new google.maps.Marker({
        position: BarcelonaMuseumofContemporaryArt,
        map: map,
        title: 'Barcelona Museum of Contemporary Art'
    });

    var marker6 = new google.maps.Marker({
        position: PlaçadeCatalunya,
        map: map,
        title: 'Placade Catalunya'
    });

    var marker7 = new google.maps.Marker({
        position: PalauNacional,
        map: map,
        title: 'Palau Nacional'
    });

    var marker8 = new google.maps.Marker({
        position: GaudiHouseMuseum,
        map: map,
        title: 'Gaudi House Museum'
    });

    var marker9 = new google.maps.Marker({
        position: ParkGüell,
        map: map,
        title: 'Park Güell'
    });

    var marker10 = new google.maps.Marker({
        position: MonastirdePedralbes,
        map: map,
        title: 'Monastir de Pedralbes'
    });

    var marker11 = new google.maps.Marker({
        position: ArcdeTriomf,
        map: map,
        title: 'Arc de Triomf'
    });

    var marker12 = new google.maps.Marker({
        position: MuseuMarítimdeBarcelona,
        map: map,
        title: 'Museu Maritìm de Barcelona'
    });

    var marker13 = new google.maps.Marker({
        position: BarcelonaZoo,
        map: map,
        title: 'Barcelona Zoo'
    });
}