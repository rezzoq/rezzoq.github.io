class MapView {
    /*===================================================================================================*/
    /*                                            Свойства карты                                         */
    /*===================================================================================================*/
    _div_name; // Элемент в HTML документе куда загружается карта
    _map_view; // Объект карты
    _zoom_current = 15; // Текущий зум
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
                zoom: this._zoom_current
            });
        L.featureGroup().addTo(this._map_view);
        this._source_map_cartoon_light.addTo(this._map_view);
    }
    /*===================================================================================================*/
    /*                                            Источник тайлов                                       */
    /*===================================================================================================*/
    _source_map_cartoon_light = // №5 Источник тайлов карты - Cartodb Basemaps, карты типа чб схема
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            maxZoom: this._zoom_max,
            minZoom: this._zoom_min,
            subdomains: 'abcd'
        });
}

