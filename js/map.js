;(function() {
  if (typeof ymaps === 'undefined') {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [59.935710, 30.335065],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Санкт-Петербург, Садовая, 7'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [70, 70],
            iconImageOffset: [-30, -70]
        });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
});


})();