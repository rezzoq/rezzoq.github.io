class MapView {
    /*===================================================================================================*/
    /*                                            Свойства карты                                         */
    /*===================================================================================================*/
    _div_name; // Элемент в HTML документе куда загружается карта
    _map_view; // Объект карты
    _zoom_current = 12; // Текущий зум
    _zoom_max = 18; // Максимальный зум
    _zoom_min = 2; // Минимальный зум
    _start_longitude = 55.7273431; // Начальная долгота
    _start_latitude = 37.6274891; // Начальная широта
    /*===================================================================================================*/
    /*                                            Конструктор карты                                      */
    /*===================================================================================================*/
    constructor(div_name) {
        this._div_name = div_name;
        this._map_view = new L.Map(
            document.getElementById(this._div_name),
            {
                center: new L.LatLng(this._start_longitude, this._start_latitude),
                zoom: this._zoom_current,
                attributionControl: false
            });
        L.featureGroup().addTo(this._map_view);
        this._source_map_cartoon_light.addTo(this._map_view);
        this.get_marker_shop(55.779119, 37.616451,
            "../img/map/photo_shop_map_1.png", "улица Фонарная, 1").addTo(this._map_view);
        this.get_marker_shop(55.641251, 37.635287,
            "../img/map/photo_shop_map_2.png", "улица Ноября, 14").addTo(this._map_view);
        this.get_marker_shop(55.742098, 37.5471497,
            "../img/map/photo_shop_map_3.png", "улица Русаковского, 53").addTo(this._map_view);
        this.get_marker_shop(55.745666, 37.649040,
            "../img/map/photo_shop_map_4.png", "улица Открытий, 42к1").addTo(this._map_view);

    }
    /*===================================================================================================*/
    /*                                            Источник тайлов                                        */
    /*===================================================================================================*/
    _source_map_cartoon_light = // Источник тайлов карты - Cartodb Basemaps, карты типа чб схема
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            maxZoom: this._zoom_max,
            minZoom: this._zoom_min,
            subdomains: 'abcd'
        });
    /*===================================================================================================*/
    /*                                     Добавление лейблов на карту                                   */
    /*===================================================================================================*/
    get_marker_shop (lat, lon, img_src, address) {
        let marker_shop = new L.Marker([lat, lon], {
            icon: new L.Icon({
                iconSize:     [60, 60],
                iconAnchor:   [30, 60],
                popupAnchor:  [0, -55],
                className: 'my-div-icon',
                iconUrl: '../img/map/lable_shop_map.png'
            })
        });
        marker_shop.bindPopup(new L.popup().setContent(
            '<img class="map_shop_img" src="' + img_src + '" alt="" height="80px" width="80px"/><br>'+
        '<span class="map_shop_title">' + address + '</span>'));
        return marker_shop;
    }
}

