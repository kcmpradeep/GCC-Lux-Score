var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 0.394000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Zones_1 = new ol.format.GeoJSON();
var features_Zones_1 = format_Zones_1.readFeatures(json_Zones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_1.addFeatures(features_Zones_1);
var lyr_Zones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zones_1,
maxResolution:28004.466152261964,
 minResolution:31.084957429010775,

                style: style_Zones_1,
                popuplayertitle: 'Zones',
                interactive: true,
    title: 'Zones<br />\
    <img src="styles/legend/Zones_1_0.png" /> Central<br />\
    <img src="styles/legend/Zones_1_1.png" /> North<br />\
    <img src="styles/legend/Zones_1_2.png" /> South<br />'
        });
var format_SourceandDestination_2 = new ol.format.GeoJSON();
var features_SourceandDestination_2 = format_SourceandDestination_2.readFeatures(json_SourceandDestination_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SourceandDestination_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SourceandDestination_2.addFeatures(features_SourceandDestination_2);
var lyr_SourceandDestination_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SourceandDestination_2, 
                style: style_SourceandDestination_2,
                popuplayertitle: 'Source and Destination',
                interactive: false,
                title: '<img src="styles/legend/SourceandDestination_2.png" /> Source and Destination'
            });
var format_BusRoutes_3 = new ol.format.GeoJSON();
var features_BusRoutes_3 = format_BusRoutes_3.readFeatures(json_BusRoutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusRoutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusRoutes_3.addFeatures(features_BusRoutes_3);
var lyr_BusRoutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusRoutes_3, 
                style: style_BusRoutes_3,
                popuplayertitle: 'Bus Routes',
                interactive: true,
    title: 'Bus Routes<br />\
    <img src="styles/legend/BusRoutes_3_0.png" /> 102K<br />\
    <img src="styles/legend/BusRoutes_3_1.png" /> 119<br />\
    <img src="styles/legend/BusRoutes_3_2.png" /> 159A<br />\
    <img src="styles/legend/BusRoutes_3_3.png" /> 17D<br />\
    <img src="styles/legend/BusRoutes_3_4.png" /> 26<br />\
    <img src="styles/legend/BusRoutes_3_5.png" /> 29C<br />\
    <img src="styles/legend/BusRoutes_3_6.png" /> 2A<br />\
    <img src="styles/legend/BusRoutes_3_7.png" /> 32B<br />\
    <img src="styles/legend/BusRoutes_3_8.png" /> 4<br />\
    <img src="styles/legend/BusRoutes_3_9.png" /> 48C<br />'
        });
var format_BusStopsWithLUXScore_4 = new ol.format.GeoJSON();
var features_BusStopsWithLUXScore_4 = format_BusStopsWithLUXScore_4.readFeatures(json_BusStopsWithLUXScore_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStopsWithLUXScore_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStopsWithLUXScore_4.addFeatures(features_BusStopsWithLUXScore_4);
var lyr_BusStopsWithLUXScore_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStopsWithLUXScore_4, 
                style: style_BusStopsWithLUXScore_4,
                popuplayertitle: 'Bus Stops With LUX Score',
                interactive: true,
    title: 'Bus Stops With LUX Score<br />\
    <img src="styles/legend/BusStopsWithLUXScore_4_0.png" /> 1 - 40<br />\
    <img src="styles/legend/BusStopsWithLUXScore_4_1.png" /> 40 - 2000<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Zones_1.setVisible(true);lyr_SourceandDestination_2.setVisible(true);lyr_BusRoutes_3.setVisible(true);lyr_BusStopsWithLUXScore_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Zones_1,lyr_SourceandDestination_2,lyr_BusRoutes_3,lyr_BusStopsWithLUXScore_4];
lyr_Zones_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Region': 'Region', 'ZONE': 'ZONE', });
lyr_SourceandDestination_2.set('fieldAliases', {'fid': 'fid', 'Bus Stop': 'Bus Stop', });
lyr_BusRoutes_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Route_ID': 'Route Name', 'layer': 'layer', 'path': 'path', });
lyr_BusStopsWithLUXScore_4.set('fieldAliases', {'fid': 'fid', 'UID': 'UID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'Route_ID': 'Route_ID', 'Zone': 'Zone', 'Bus stop name': 'Bus stop name', 'Bus route': 'Bus route', 'Bus stop location name': 'Bus stop location name', 'Bus_Stops_Details_A1. Zone': 'Bus_Stops_Details_A1. Zone', 'Bus stop location on the side of the road': 'Bus stop location on the side of the road', 'Availability of the shelter': 'Availability of the shelter', 'Traffic signal near the bus stop': 'Traffic signal near the bus stop', 'Auto stand': 'Auto stand', 'Bus terminal': 'Bus terminal', 'Metro station': 'Metro station', 'local train station': 'local train station', 'Shared auto stop': 'Shared auto stop', 'Public cycle sharing facility': 'Public cycle sharing facility', 'Proximity of the bus stop to the road junction': 'Proximity of the bus stop to the road junction', 'Dark spot (complete darkness in the street/on the road) in 50m radius of the bus stop': 'Dark spot (complete darkness in the street/on the road) in 50m radius of the bus stop', 'CCTV camera present at or around the bus stop': 'CCTV camera present at or around the bus stop', 'Presence of traffic police man/police van/chowki at the traffic signal or near': 'Presence of traffic police man/police van/chowki at the traffic signal or near', 'Presence of security personnel stationed  in the vicinity (nearby shops, offices, residential complexes, banks, ATMs)': 'Presence of security personnel stationed  in the vicinity (nearby shops, offices, residential complexes, banks, ATMs)', 'Liquor shop within 50m radius of  the bus stop': 'Liquor shop within 50m radius of  the bus stop', 'Any shop or spot or isolated area near the bus stop where men gather': 'Any shop or spot or isolated area near the bus stop where men gather', 'Lux reading - Inside the shelter:': 'Lux reading - Inside the shelter:', 'Bus Stop Location and Surrounding -Weighted Score': 'Bus Stop Location and Surrounding -Weighted Score', 'Shelter and Signage': 'Shelter and Signage', 'Pedestrian Infrastructure-Weighted Score': 'Pedestrian Infrastructure-Weighted Score', 'Safety and Security-Weighted Score': 'Safety and Security-Weighted Score', 'Total Score': 'Total Score', });
lyr_Zones_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Region': 'TextEdit', 'ZONE': 'TextEdit', });
lyr_SourceandDestination_2.set('fieldImages', {'fid': 'TextEdit', 'Bus Stop': 'TextEdit', });
lyr_BusRoutes_3.set('fieldImages', {'fid': '', 'Name': '', 'Route_ID': '', 'layer': '', 'path': '', });
lyr_BusStopsWithLUXScore_4.set('fieldImages', {'fid': 'TextEdit', 'UID': 'Range', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'Route_ID': 'TextEdit', 'Zone': 'Range', 'Bus stop name': 'TextEdit', 'Bus route': 'TextEdit', 'Bus stop location name': 'TextEdit', 'Bus_Stops_Details_A1. Zone': 'TextEdit', 'Bus stop location on the side of the road': 'TextEdit', 'Availability of the shelter': 'TextEdit', 'Traffic signal near the bus stop': 'TextEdit', 'Auto stand': 'TextEdit', 'Bus terminal': 'TextEdit', 'Metro station': 'TextEdit', 'local train station': 'TextEdit', 'Shared auto stop': 'TextEdit', 'Public cycle sharing facility': 'TextEdit', 'Proximity of the bus stop to the road junction': 'TextEdit', 'Dark spot (complete darkness in the street/on the road) in 50m radius of the bus stop': 'TextEdit', 'CCTV camera present at or around the bus stop': 'TextEdit', 'Presence of traffic police man/police van/chowki at the traffic signal or near': 'TextEdit', 'Presence of security personnel stationed  in the vicinity (nearby shops, offices, residential complexes, banks, ATMs)': 'TextEdit', 'Liquor shop within 50m radius of  the bus stop': 'TextEdit', 'Any shop or spot or isolated area near the bus stop where men gather': 'TextEdit', 'Lux reading - Inside the shelter:': 'TextEdit', 'Bus Stop Location and Surrounding -Weighted Score': 'TextEdit', 'Shelter and Signage': 'TextEdit', 'Pedestrian Infrastructure-Weighted Score': 'TextEdit', 'Safety and Security-Weighted Score': 'TextEdit', 'Total Score': 'TextEdit', });
lyr_Zones_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'ZONE': 'inline label - visible with data', });
lyr_SourceandDestination_2.set('fieldLabels', {'fid': 'hidden field', 'Bus Stop': 'hidden field', });
lyr_BusRoutes_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Route_ID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BusStopsWithLUXScore_4.set('fieldLabels', {'fid': 'hidden field', 'UID': 'inline label - visible with data', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'Route_ID': 'hidden field', 'Zone': 'inline label - visible with data', 'Bus stop name': 'inline label - visible with data', 'Bus route': 'inline label - visible with data', 'Bus stop location name': 'hidden field', 'Bus_Stops_Details_A1. Zone': 'hidden field', 'Bus stop location on the side of the road': 'hidden field', 'Availability of the shelter': 'hidden field', 'Traffic signal near the bus stop': 'hidden field', 'Auto stand': 'hidden field', 'Bus terminal': 'hidden field', 'Metro station': 'hidden field', 'local train station': 'hidden field', 'Shared auto stop': 'hidden field', 'Public cycle sharing facility': 'hidden field', 'Proximity of the bus stop to the road junction': 'hidden field', 'Dark spot (complete darkness in the street/on the road) in 50m radius of the bus stop': 'hidden field', 'CCTV camera present at or around the bus stop': 'hidden field', 'Presence of traffic police man/police van/chowki at the traffic signal or near': 'hidden field', 'Presence of security personnel stationed  in the vicinity (nearby shops, offices, residential complexes, banks, ATMs)': 'hidden field', 'Liquor shop within 50m radius of  the bus stop': 'hidden field', 'Any shop or spot or isolated area near the bus stop where men gather': 'hidden field', 'Lux reading - Inside the shelter:': 'inline label - visible with data', 'Bus Stop Location and Surrounding -Weighted Score': 'hidden field', 'Shelter and Signage': 'hidden field', 'Pedestrian Infrastructure-Weighted Score': 'hidden field', 'Safety and Security-Weighted Score': 'hidden field', 'Total Score': 'hidden field', });
lyr_BusStopsWithLUXScore_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});