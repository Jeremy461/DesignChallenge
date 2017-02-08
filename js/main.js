function initMap() {
    var barcelona = {lat:41.3790607 , lng:2.1704957 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: barcelona
    });
}