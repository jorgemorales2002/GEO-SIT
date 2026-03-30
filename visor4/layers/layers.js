ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([572561.847600, 8157099.744100, 595110.898800, 8201824.950500]);
var wms_layers = [];


        var lyr_MapaTopografico_0 = new ol.layer.Tile({
            'title': 'Mapa Topografico',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LmiteJuridiccional_1 = new ol.format.GeoJSON();
var features_LmiteJuridiccional_1 = format_LmiteJuridiccional_1.readFeatures(json_LmiteJuridiccional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_LmiteJuridiccional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteJuridiccional_1.addFeatures(features_LmiteJuridiccional_1);
var lyr_LmiteJuridiccional_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteJuridiccional_1, 
                style: style_LmiteJuridiccional_1,
                popuplayertitle: 'Límite Juridiccional',
                interactive: true,
                title: '<img src="styles/legend/LmiteJuridiccional_1.png" /> Límite Juridiccional'
            });
var format_UsosdeSuelo_2 = new ol.format.GeoJSON();
var features_UsosdeSuelo_2 = format_UsosdeSuelo_2.readFeatures(json_UsosdeSuelo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_UsosdeSuelo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsosdeSuelo_2.addFeatures(features_UsosdeSuelo_2);
var lyr_UsosdeSuelo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsosdeSuelo_2, 
                style: style_UsosdeSuelo_2,
                popuplayertitle: 'Usos de Suelo',
                interactive: true,
    title: 'Usos de Suelo<br />\
    <img src="styles/legend/UsosdeSuelo_2_0.png" /> Productivo transición<br />\
    <img src="styles/legend/UsosdeSuelo_2_1.png" /> Protección<br />\
    <img src="styles/legend/UsosdeSuelo_2_2.png" /> Rural<br />\
    <img src="styles/legend/UsosdeSuelo_2_3.png" /> Urbano<br />' });
var group_ZonificacionPrimaria = new ol.layer.Group({
                                layers: [lyr_UsosdeSuelo_2,],
                                fold: 'open',
                                title: 'Zonificacion Primaria'});
var group_SimboloConvencional = new ol.layer.Group({
                                layers: [lyr_MapaTopografico_0,lyr_LmiteJuridiccional_1,],
                                fold: 'open',
                                title: 'Simbolo Convencional'});

lyr_MapaTopografico_0.setVisible(true);lyr_LmiteJuridiccional_1.setVisible(true);lyr_UsosdeSuelo_2.setVisible(true);
var layersList = [group_SimboloConvencional,group_ZonificacionPrimaria];
lyr_LmiteJuridiccional_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'areaHa': 'areaHa', 'areaKm': 'areaKm', });
lyr_UsosdeSuelo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'descZoni': 'descZoni', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ha': 'ha', 'distrito': 'distrito', });
lyr_LmiteJuridiccional_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'areaHa': 'TextEdit', 'areaKm': 'TextEdit', });
lyr_UsosdeSuelo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'descZoni': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ha': 'TextEdit', 'distrito': 'Range', });
lyr_LmiteJuridiccional_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'areaHa': 'no label', 'areaKm': 'no label', });
lyr_UsosdeSuelo_2.set('fieldLabels', {'OBJECTID': 'no label', 'descZoni': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ha': 'no label', 'distrito': 'no label', });
lyr_UsosdeSuelo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});