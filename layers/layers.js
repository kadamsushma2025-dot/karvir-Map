var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_contour_2 = new ol.format.GeoJSON();
var features_contour_2 = format_contour_2.readFeatures(json_contour_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contour_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contour_2.addFeatures(features_contour_2);
var lyr_contour_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contour_2, 
                style: style_contour_2,
                popuplayertitle: 'contour',
                interactive: true,
                title: '<img src="styles/legend/contour_2.png" /> contour'
            });
var format_landuse_3 = new ol.format.GeoJSON();
var features_landuse_3 = format_landuse_3.readFeatures(json_landuse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_3.addFeatures(features_landuse_3);
var lyr_landuse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_3, 
                style: style_landuse_3,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_3.png" /> landuse'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_roads_5 = new ol.format.GeoJSON();
var features_roads_5 = format_roads_5.readFeatures(json_roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_5.addFeatures(features_roads_5);
var lyr_roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_5, 
                style: style_roads_5,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_5.png" /> roads'
            });
var format_water_6 = new ol.format.GeoJSON();
var features_water_6 = format_water_6.readFeatures(json_water_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_6.addFeatures(features_water_6);
var lyr_water_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_6, 
                style: style_water_6,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_6.png" /> water'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_building_1.setVisible(true);lyr_contour_2.setVisible(true);lyr_landuse_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_roads_5.setVisible(true);lyr_water_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_building_1,lyr_contour_2,lyr_landuse_3,lyr_Railway_4,lyr_roads_5,lyr_water_6];
lyr_building_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_contour_2.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_landuse_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Railway_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_roads_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_water_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_building_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_contour_2.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_landuse_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Railway_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_roads_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_water_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_contour_2.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_landuse_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Railway_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_roads_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_water_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});