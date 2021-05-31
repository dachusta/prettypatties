;(function() {
  var sectionContacts = document.querySelector('.section-contacts');

  var ymapInit = function() {
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
  };

  var ymapLoad = function() {
    var script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=en_RU';
    myLib.body.appendChild(script);
    script.addEventListener('load', ymapInit);
  };

  var checkYmapInit = function() {
    var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
    var scrollTop = window.pageYOffset;
    var sectionContactsOffsetTop = scrollTop + sectionContactsTop;

    if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
      ymapLoad();
      window.removeEventListener('scroll', checkYmapInit);
    }
  };

  window.addEventListener('scroll', checkYmapInit);
  checkYmapInit();
})();