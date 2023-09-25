ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([714249.009092, 9122584.281913, 718426.962667, 9125064.783975]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lake_2 = new ol.format.GeoJSON();
var features_Lake_2 = format_Lake_2.readFeatures(json_Lake_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lake_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lake_2.addFeatures(features_Lake_2);
var lyr_Lake_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lake_2, 
                style: style_Lake_2,
                interactive: true,
                title: '<img src="styles/legend/Lake_2.png" /> Lake'
            });
var format_Forest_3 = new ol.format.GeoJSON();
var features_Forest_3 = format_Forest_3.readFeatures(json_Forest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Forest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_3.addFeatures(features_Forest_3);
var lyr_Forest_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_3, 
                style: style_Forest_3,
                interactive: true,
                title: '<img src="styles/legend/Forest_3.png" /> Forest'
            });
var format_Field_4 = new ol.format.GeoJSON();
var features_Field_4 = format_Field_4.readFeatures(json_Field_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Field_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Field_4.addFeatures(features_Field_4);
var lyr_Field_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Field_4, 
                style: style_Field_4,
                interactive: true,
                title: '<img src="styles/legend/Field_4.png" /> Field'
            });
var format_Reeds_5 = new ol.format.GeoJSON();
var features_Reeds_5 = format_Reeds_5.readFeatures(json_Reeds_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Reeds_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reeds_5.addFeatures(features_Reeds_5);
var lyr_Reeds_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reeds_5, 
                style: style_Reeds_5,
                interactive: true,
                title: '<img src="styles/legend/Reeds_5.png" /> Reeds'
            });
var format_Sand_6 = new ol.format.GeoJSON();
var features_Sand_6 = format_Sand_6.readFeatures(json_Sand_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Sand_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sand_6.addFeatures(features_Sand_6);
var lyr_Sand_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sand_6, 
                style: style_Sand_6,
                interactive: true,
                title: '<img src="styles/legend/Sand_6.png" /> Sand'
            });
var format_BurntArea_7 = new ol.format.GeoJSON();
var features_BurntArea_7 = format_BurntArea_7.readFeatures(json_BurntArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BurntArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BurntArea_7.addFeatures(features_BurntArea_7);
var lyr_BurntArea_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BurntArea_7, 
                style: style_BurntArea_7,
                interactive: true,
                title: '<img src="styles/legend/BurntArea_7.png" /> Burnt Area'
            });
var format_Lake_8 = new ol.format.GeoJSON();
var features_Lake_8 = format_Lake_8.readFeatures(json_Lake_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lake_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lake_8.addFeatures(features_Lake_8);
var lyr_Lake_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lake_8, 
                style: style_Lake_8,
                interactive: true,
                title: '<img src="styles/legend/Lake_8.png" /> Lake'
            });
var format_Forest_9 = new ol.format.GeoJSON();
var features_Forest_9 = format_Forest_9.readFeatures(json_Forest_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Forest_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_9.addFeatures(features_Forest_9);
var lyr_Forest_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_9, 
                style: style_Forest_9,
                interactive: true,
                title: '<img src="styles/legend/Forest_9.png" /> Forest'
            });
var format_Field_10 = new ol.format.GeoJSON();
var features_Field_10 = format_Field_10.readFeatures(json_Field_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Field_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Field_10.addFeatures(features_Field_10);
var lyr_Field_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Field_10, 
                style: style_Field_10,
                interactive: true,
                title: '<img src="styles/legend/Field_10.png" /> Field'
            });
var format_Reeds_11 = new ol.format.GeoJSON();
var features_Reeds_11 = format_Reeds_11.readFeatures(json_Reeds_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Reeds_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reeds_11.addFeatures(features_Reeds_11);
var lyr_Reeds_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reeds_11, 
                style: style_Reeds_11,
                interactive: true,
                title: '<img src="styles/legend/Reeds_11.png" /> Reeds'
            });
var format_Sand_12 = new ol.format.GeoJSON();
var features_Sand_12 = format_Sand_12.readFeatures(json_Sand_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Sand_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sand_12.addFeatures(features_Sand_12);
var lyr_Sand_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sand_12, 
                style: style_Sand_12,
                interactive: true,
                title: '<img src="styles/legend/Sand_12.png" /> Sand'
            });
var group_AfterWildfire25082023 = new ol.layer.Group({
                                layers: [lyr_BurntArea_7,lyr_Lake_8,lyr_Forest_9,lyr_Field_10,lyr_Reeds_11,lyr_Sand_12,],
                                title: "After Wildfire (25-08-2023)"});
var group_BeforeWildfire25082023 = new ol.layer.Group({
                                layers: [lyr_Lake_2,lyr_Forest_3,lyr_Field_4,lyr_Reeds_5,lyr_Sand_6,],
                                title: "Before Wildfire (25-08-2023)"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_GoogleMap_1,],
                                title: "Basemap"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_Lake_2.setVisible(true);lyr_Forest_3.setVisible(true);lyr_Field_4.setVisible(true);lyr_Reeds_5.setVisible(true);lyr_Sand_6.setVisible(true);lyr_BurntArea_7.setVisible(true);lyr_Lake_8.setVisible(true);lyr_Forest_9.setVisible(true);lyr_Field_10.setVisible(true);lyr_Reeds_11.setVisible(true);lyr_Sand_12.setVisible(true);
var layersList = [group_Basemap,group_BeforeWildfire25082023,group_AfterWildfire25082023];
lyr_Lake_2.set('fieldAliases', {'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', });
lyr_Forest_3.set('fieldAliases', {'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', });
lyr_Field_4.set('fieldAliases', {'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', });
lyr_Reeds_5.set('fieldAliases', {'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', });
lyr_Sand_6.set('fieldAliases', {'CLASS_NAME': 'CLASS_NAME', 'AREA': 'AREA', });
lyr_BurntArea_7.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', });
lyr_Lake_8.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', });
lyr_Forest_9.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', });
lyr_Field_10.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', });
lyr_Reeds_11.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', });
lyr_Sand_12.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', 'layer': 'layer', 'path': 'path', });
lyr_Lake_2.set('fieldImages', {'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Forest_3.set('fieldImages', {'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Field_4.set('fieldImages', {'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Reeds_5.set('fieldImages', {'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Sand_6.set('fieldImages', {'CLASS_NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BurntArea_7.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Lake_8.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Forest_9.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Field_10.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Reeds_11.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Sand_12.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Lake_2.set('fieldLabels', {});
lyr_Forest_3.set('fieldLabels', {});
lyr_Field_4.set('fieldLabels', {});
lyr_Reeds_5.set('fieldLabels', {});
lyr_Sand_6.set('fieldLabels', {});
lyr_BurntArea_7.set('fieldLabels', {});
lyr_Lake_8.set('fieldLabels', {});
lyr_Forest_9.set('fieldLabels', {});
lyr_Field_10.set('fieldLabels', {});
lyr_Reeds_11.set('fieldLabels', {});
lyr_Sand_12.set('fieldLabels', {});
lyr_Sand_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});