ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([704079.936236, 9107609.148625, 728612.266133, 9121721.148625]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AfterWildfire02092023_2 = new ol.format.GeoJSON();
var features_AfterWildfire02092023_2 = format_AfterWildfire02092023_2.readFeatures(json_AfterWildfire02092023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AfterWildfire02092023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfterWildfire02092023_2.addFeatures(features_AfterWildfire02092023_2);
var lyr_AfterWildfire02092023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AfterWildfire02092023_2, 
                style: style_AfterWildfire02092023_2,
                interactive: true,
    title: 'After Wildfire (02-09-2023)<br />\
    <img src="styles/legend/AfterWildfire02092023_2_0.png" /> Burnt Area<br />\
    <img src="styles/legend/AfterWildfire02092023_2_1.png" /> Lake<br />\
    <img src="styles/legend/AfterWildfire02092023_2_2.png" /> Sand<br />\
    <img src="styles/legend/AfterWildfire02092023_2_3.png" /> Reeds<br />\
    <img src="styles/legend/AfterWildfire02092023_2_4.png" /> Field<br />\
    <img src="styles/legend/AfterWildfire02092023_2_5.png" /> Forest<br />'
        });
var format_BeforeWildfire25082023_3 = new ol.format.GeoJSON();
var features_BeforeWildfire25082023_3 = format_BeforeWildfire25082023_3.readFeatures(json_BeforeWildfire25082023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BeforeWildfire25082023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeforeWildfire25082023_3.addFeatures(features_BeforeWildfire25082023_3);
var lyr_BeforeWildfire25082023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeforeWildfire25082023_3, 
                style: style_BeforeWildfire25082023_3,
                interactive: true,
    title: 'Before Wildfire (25-08-2023)<br />\
    <img src="styles/legend/BeforeWildfire25082023_3_0.png" /> Lake<br />\
    <img src="styles/legend/BeforeWildfire25082023_3_1.png" /> Sand<br />\
    <img src="styles/legend/BeforeWildfire25082023_3_2.png" /> Reeds<br />\
    <img src="styles/legend/BeforeWildfire25082023_3_3.png" /> Field<br />\
    <img src="styles/legend/BeforeWildfire25082023_3_4.png" /> Forest<br />'
        });
var format_Boundary_4 = new ol.format.GeoJSON();
var features_Boundary_4 = format_Boundary_4.readFeatures(json_Boundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Boundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_4.addFeatures(features_Boundary_4);
var lyr_Boundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundary_4, 
                style: style_Boundary_4,
                interactive: false,
    title: 'Boundary<br />\
    <img src="styles/legend/Boundary_4_0.png" /> LUMAJANG<br />\
    <img src="styles/legend/Boundary_4_1.png" /> MALANG<br />\
    <img src="styles/legend/Boundary_4_2.png" /> PASURUAN<br />\
    <img src="styles/legend/Boundary_4_3.png" /> PROBOLINGGO<br />'
        });
var format_River_5 = new ol.format.GeoJSON();
var features_River_5 = format_River_5.readFeatures(json_River_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_River_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_5.addFeatures(features_River_5);
var lyr_River_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_5, 
                style: style_River_5,
                interactive: false,
                title: '<img src="styles/legend/River_5.png" /> River'
            });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                interactive: false,
                title: '<img src="styles/legend/Road_6.png" /> Road'
            });
var format_HealthCare_7 = new ol.format.GeoJSON();
var features_HealthCare_7 = format_HealthCare_7.readFeatures(json_HealthCare_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_HealthCare_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthCare_7.addFeatures(features_HealthCare_7);
var lyr_HealthCare_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HealthCare_7, 
                style: style_HealthCare_7,
                interactive: false,
                title: '<img src="styles/legend/HealthCare_7.png" /> Health Care'
            });
var format_Goverment_8 = new ol.format.GeoJSON();
var features_Goverment_8 = format_Goverment_8.readFeatures(json_Goverment_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Goverment_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goverment_8.addFeatures(features_Goverment_8);
var lyr_Goverment_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Goverment_8, 
                style: style_Goverment_8,
                interactive: true,
                title: '<img src="styles/legend/Goverment_8.png" /> Goverment'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_OSMStandard_1,],
                                title: "Basemap"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_AfterWildfire02092023_2.setVisible(true);lyr_BeforeWildfire25082023_3.setVisible(true);lyr_Boundary_4.setVisible(true);lyr_River_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_HealthCare_7.setVisible(true);lyr_Goverment_8.setVisible(true);
var layersList = [group_Basemap,lyr_AfterWildfire02092023_2,lyr_BeforeWildfire25082023_3,lyr_Boundary_4,lyr_River_5,lyr_Road_6,lyr_HealthCare_7,lyr_Goverment_8];
lyr_AfterWildfire02092023_2.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', 'UNITS': 'UNITS', });
lyr_BeforeWildfire25082023_3.set('fieldAliases', {'FEATURE': 'FEATURE', 'AREA': 'AREA', 'UNITS': 'UNITS', });
lyr_Boundary_4.set('fieldAliases', {'VILLAGE': 'VILLAGE', 'DISTRICT': 'DISTRICT', 'REGENCY': 'REGENCY', 'PROVINCE': 'PROVINCE', 'layer': 'layer', 'path': 'path', });
lyr_River_5.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Road_6.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_HealthCare_7.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Goverment_8.set('fieldAliases', {'FEATURE': 'FEATURE', 'TYPE': 'TYPE', });
lyr_AfterWildfire02092023_2.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', 'UNITS': 'TextEdit', });
lyr_BeforeWildfire25082023_3.set('fieldImages', {'FEATURE': 'TextEdit', 'AREA': 'TextEdit', 'UNITS': 'TextEdit', });
lyr_Boundary_4.set('fieldImages', {'VILLAGE': 'TextEdit', 'DISTRICT': 'TextEdit', 'REGENCY': 'TextEdit', 'PROVINCE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_River_5.set('fieldImages', {'REMARK': '', });
lyr_Road_6.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_HealthCare_7.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Goverment_8.set('fieldImages', {'FEATURE': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_AfterWildfire02092023_2.set('fieldLabels', {'FEATURE': 'inline label', 'AREA': 'inline label', 'UNITS': 'inline label', });
lyr_BeforeWildfire25082023_3.set('fieldLabels', {'FEATURE': 'inline label', 'AREA': 'inline label', 'UNITS': 'inline label', });
lyr_Boundary_4.set('fieldLabels', {'VILLAGE': 'no label', 'DISTRICT': 'no label', 'REGENCY': 'no label', 'PROVINCE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_River_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LENGTH': 'no label', 'UNITS': 'no label', });
lyr_Road_6.set('fieldLabels', {'REMARK': 'no label', });
lyr_HealthCare_7.set('fieldLabels', {'REMARK': 'no label', });
lyr_Goverment_8.set('fieldLabels', {'FEATURE': 'inline label', 'TYPE': 'inline label', });
lyr_Goverment_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});