var size = 0;
var placement = 'point';
function categories_BusRoutes_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '102K':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,213,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '119':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,112,160,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '159A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,96,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '17D':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,201,182,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '26':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,209,26,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '29C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,210,121,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2A':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(23,26,210,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '32B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,154,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,127,110,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '48C':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,202,136,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BusRoutes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Route_ID");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_BusRoutes_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
