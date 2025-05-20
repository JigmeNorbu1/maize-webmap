ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5266").setExtent([45094.584545, 2885386.725398, 520863.013375, 3215553.609199]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MAIZE_1 = new ol.format.GeoJSON();
var features_MAIZE_1 = format_MAIZE_1.readFeatures(json_MAIZE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_MAIZE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAIZE_1.addFeatures(features_MAIZE_1);
var lyr_MAIZE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAIZE_1, 
                style: style_MAIZE_1,
                popuplayertitle: 'MAIZE',
                interactive: true,
    title: 'MAIZE<br />\
    <img src="styles/legend/MAIZE_1_0.png" /> Grid code 1-Not suitable<br />\
    <img src="styles/legend/MAIZE_1_1.png" /> Grid code 2-Less suitable<br />\
    <img src="styles/legend/MAIZE_1_2.png" /> Grid code 3-Moderately suitable<br />\
    <img src="styles/legend/MAIZE_1_3.png" /> Grid code 4-High suitability<br />' });
var format_DISTRICT_2 = new ol.format.GeoJSON();
var features_DISTRICT_2 = format_DISTRICT_2.readFeatures(json_DISTRICT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_DISTRICT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRICT_2.addFeatures(features_DISTRICT_2);
var lyr_DISTRICT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRICT_2, 
                style: style_DISTRICT_2,
                popuplayertitle: 'DISTRICT',
                interactive: true,
                title: '<img src="styles/legend/DISTRICT_2.png" /> DISTRICT'
            });
var format_FAWAREA_3 = new ol.format.GeoJSON();
var features_FAWAREA_3 = format_FAWAREA_3.readFeatures(json_FAWAREA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_FAWAREA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAWAREA_3.addFeatures(features_FAWAREA_3);
var lyr_FAWAREA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAWAREA_3, 
                style: style_FAWAREA_3,
                popuplayertitle: 'FAW AREA',
                interactive: true,
    title: 'FAW AREA<br />\
    <img src="styles/legend/FAWAREA_3_0.png" /> Grid code 2- Less risk<br />\
    <img src="styles/legend/FAWAREA_3_1.png" /> Grid code 3- Moderately risk<br />\
    <img src="styles/legend/FAWAREA_3_2.png" /> Grid code 4- High risk<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_MAIZE_1.setVisible(true);lyr_DISTRICT_2.setVisible(true);lyr_FAWAREA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MAIZE_1,lyr_DISTRICT_2,lyr_FAWAREA_3];
lyr_MAIZE_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Suitabilit': 'Suitabilit', });
lyr_DISTRICT_2.set('fieldAliases', {'NAM': 'NAM', 'area': 'area', 'long': 'long', 'y': 'y', 'Dzongkhag': 'Dzongkhag', 'FAW_SUSCEP': 'FAW_SUSCEP', 'MAIZE_SUIT': 'MAIZE_SUIT', 'MAIZE_PROD': 'MAIZE_PROD', 'AREA': 'AREA', });
lyr_FAWAREA_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_MAIZE_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Suitabilit': 'TextEdit', });
lyr_DISTRICT_2.set('fieldImages', {'NAM': 'TextEdit', 'area': 'TextEdit', 'long': 'TextEdit', 'y': 'TextEdit', 'Dzongkhag': 'TextEdit', 'FAW_SUSCEP': 'TextEdit', 'MAIZE_SUIT': 'TextEdit', 'MAIZE_PROD': 'TextEdit', 'AREA': '', });
lyr_FAWAREA_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_MAIZE_1.set('fieldLabels', {'Id': 'header label - always visible', 'gridcode': 'header label - always visible', 'Suitabilit': 'hidden field', });
lyr_DISTRICT_2.set('fieldLabels', {'NAM': 'hidden field', 'area': 'hidden field', 'long': 'hidden field', 'y': 'hidden field', 'Dzongkhag': 'header label - always visible', 'FAW_SUSCEP': 'header label - always visible', 'MAIZE_SUIT': 'header label - always visible', 'MAIZE_PROD': 'header label - always visible', 'AREA': 'header label - always visible', });
lyr_FAWAREA_3.set('fieldLabels', {'Id': 'header label - always visible', 'gridcode': 'header label - always visible', });
lyr_FAWAREA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});