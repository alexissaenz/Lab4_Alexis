$(document).ready(function(){



var map = L.map('map', {
        center: [39.883076, -75.164383],
        zoom: 11
    });
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    var myIcon = L.icon({
        iconUrl: 'images/icon.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon2 = L.icon({
        iconUrl: 'images/icon2.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon3 = L.icon({
        iconUrl: 'images/icon3.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var myIcon4 = L.icon({
        iconUrl: 'images/icon4.png',
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
    var style1 = {
        fill: true,
        fillColor:'#00f500',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style2 = {
        fill: true,
        fillColor:'#94f700',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style3 = {
        fill: true,
        fillColor:'#f5f500',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style4 = {
        fill: true,
        fillColor:'#fc8b00',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style5 = {
        fill: true,
        fillColor:'#f50000',
        fillOpacity: 1,
        color : '#000',
        weight: 3
    }

    var style6 = {
        fill: true,
        fillColor:'#55d296',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }

    var style7 = {
        fill: true,
        fillColor:'#32acbb',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }
    var style8 = {
        fill: true,
        fillColor:'#c835e3',
        fillOpacity: 1,
        color : '#000',
        weight: 5
    }
    var style9 = {
        color : '#f30f1f',
        weight: 5
    }

    var style10 = {
        color : '#af319f',
        fillOpacity: 1,
        weight: 5
    }

    var style11 = {
        fillColor: '#5a310a',
        fillOpacity: 1,
        weight: 5
    }


    function eachPhlTrainStations(feature, layer){
       layer.setIcon(myIcon);
       var content = '<div class="table-responsive"><table class="table table-bordered library">' +
           '<tr><th>Status</th><td>'+feature.properties.LOCATION+'</td> </tr> ' +
           '<tr> <th>Score</th><td>'+feature.properties.CITY+'</td></tr> ' +
           '<tr> <th>Address</th> <td>'+feature.properties.COUNTY+'</td> </tr> ' +
           '<tr> <th>Neighborho</th> <td>'+feature.properties.LINE+'</td> </tr> ' +
           '</table></div>';
       layer.on('click', function() {
           $("#info-map").html(content);
       })
    };

    var phlTrainStationsMap = L.geoJson(phlTrainStations,{
       onEachFeature: eachPhlTrainStations
    }).addTo(map);

    function eachHealthCenters(feature, layer){
        console.log(feature.properties.Name);
        layer.setIcon(myIcon2);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>OBJECTID</th><td>'+feature.properties.OBJECTID+'</td> </tr> ' +
            '<tr> <th>NAME</th><td>'+feature.properties.NAME+'</td></tr> ' +
            '<tr> <th>ORGANIZATI</th> <td>'+feature.properties.ORGANIZATI+'</td> </tr> ' +
            '<tr> <th>ZIP</th> <td>'+feature.properties.ZIP+'</td> </tr> ' +
            '<tr> <th>PHONE</th> <td>'+feature.properties.PHONE+'</td> </tr> ' +
            '<tr> <th>WEBSITE</th> <td>'+feature.properties.WEBSITE+'</td> </tr> ' +
            '<tr> <th>DENTAL_PHO</th> <td>'+feature.properties.DENTAL_PHO+'</td> </tr> ' +
            '<tr> <th>FULL_ADDRE</th> <td>'+feature.properties.FULL_ADDRE+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var healthCentersMap = L.geoJson(healthCenters,{
        onEachFeature: eachHealthCenters
    }).addTo(map);


    function eachHospitalsPHL(feature, layer){
        console.log(feature.properties.Name);
        layer.setIcon(myIcon3);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>SURVEY_ID_</th><td>'+feature.properties.SURVEY_ID_+'</td> </tr> ' +
            '<tr> <th>HOSPITAL_U</th><td>'+feature.properties.HOSPITAL_U+'</td></tr> ' +
            '<tr> <th>FACILITY_N</th> <td>'+feature.properties.FACILITY_N+'</td> </tr> ' +
            '<tr> <th>STREET</th> <td>'+feature.properties.STREET+'</td> </tr> ' +
            '<tr> <th>CITY_TOWN</th> <td>'+feature.properties.CITY_TOWN+'</td> </tr> ' +
            '<tr> <th>ZIP_CODE</th> <td>'+feature.properties.ZIP_CODE+'</td> </tr> ' +
            '<tr> <th>ZIP_CODE_E</th> <td>'+feature.properties.ZIP_CODE_E+'</td> </tr> ' +
            '<tr> <th>COUNTY</th> <td>'+feature.properties.COUNTY+'</td> </tr> ' +
            '<tr> <th>AREA_CODE</th> <td>'+feature.properties.AREA_CODE+'</td> </tr> ' +
            '<tr> <th>TELEPHONE_</th> <td>'+feature.properties.TELEPHONE_+'</td> </tr> ' +
            '<tr> <th>CHIEF_EXEC</th> <td>'+feature.properties.CHIEF_EXEC+'</td> </tr> ' +
            '<tr> <th>CHIEF_EX_1</th> <td>'+feature.properties.CHIEF_EX_1+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var hospitalsPHLMap = L.geoJson(hospitalsPHL,{
        onEachFeature: eachHospitalsPHL
    }).addTo(map);



    function eachServiceArea100m(feature, layer){
        layer.setStyle(style2);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>ObjectID</th><td>'+feature.properties.ObjectID+'</td> </tr> ' +
            '<tr> <th>FacilityID</th><td>'+feature.properties.FacilityID+'</td></tr> ' +
            '<tr> <th>Name</th> <td>'+feature.properties.Name+'</td> </tr> ' +
            '<tr> <th>FromBreak</th> <td>'+feature.properties.FromBreak+'</td> </tr> ' +
            '<tr> <th>ToBreak</th> <td>'+feature.properties.ToBreak+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var serviceArea100mMap = L.geoJson(serviceArea100m, {
        onEachFeature: eachServiceArea100m
    }).addTo(map);

    function eachServiceArea250m(feature, layer){
        layer.setStyle(style3);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>ObjectID</th><td>'+feature.properties.ObjectID+'</td> </tr> ' +
            '<tr> <th>FacilityID</th><td>'+feature.properties.FacilityID+'</td></tr> ' +
            '<tr> <th>Name</th> <td>'+feature.properties.Name+'</td> </tr> ' +
            '<tr> <th>FromBreak</th> <td>'+feature.properties.FromBreak+'</td> </tr> ' +
            '<tr> <th>ToBreak</th> <td>'+feature.properties.ToBreak+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var serviceArea250mMap = L.geoJson(serviceArea250m, {
        onEachFeature: eachServiceArea250m
    }).addTo(map);


    function eachServiceArea500m(feature, layer){
        layer.setStyle(style4);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>ObjectID</th><td>'+feature.properties.ObjectID+'</td> </tr> ' +
            '<tr> <th>FacilityID</th><td>'+feature.properties.FacilityID+'</td></tr> ' +
            '<tr> <th>Name</th> <td>'+feature.properties.Name+'</td> </tr> ' +
            '<tr> <th>FromBreak</th> <td>'+feature.properties.FromBreak+'</td> </tr> ' +
            '<tr> <th>ToBreak</th> <td>'+feature.properties.ToBreak+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var serviceArea500mMap = L.geoJson(serviceArea500m, {
        onEachFeature: eachServiceArea500m
    }).addTo(map);

    function eachPhlBusRouts(feature, layer){
        layer.setStyle(style10);
        var content = '<div class="table-responsive"><table class="table table-bordered library">' +
            '<tr><th>ObjectID</th><td>'+feature.properties.ObjectID+'</td> </tr> ' +
            '<tr> <th>ROUTE</th><td>'+feature.properties.ROUTE+'</td></tr> ' +
            '<tr> <th>SHAPE_len</th> <td>'+feature.properties.SHAPE_len+'</td> </tr> ' +
            '</table></div>';
        layer.on('click', function() {
            $("#info-map").html(content);
        })
    };

    var phlBusRoutsMap = L.geoJson(phlBusRouts, {
        onEachFeature: eachPhlBusRouts
    }).addTo(map);
    

    $("#ch-phl-train").click(function(){
       var state = $(this).prop('checked');
       if(state){
           if(!(map.hasLayer(phlTrainStationsMap))){
               map.addLayer(phlTrainStationsMap);
           }

       }else{
           if(map.hasLayer(phlTrainStationsMap)){
               map.removeLayer(phlTrainStationsMap);
           }
           $("#percents").html("");
       }
    });

    $("#ch-health").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(healthCentersMap))){
                map.addLayer(healthCentersMap);
            }

        }else{
            if(map.hasLayer(healthCentersMap)){
                map.removeLayer(healthCentersMap);
            }
            $("#percents").html("");
        }
    });


    $("#ch-hospitals").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(hospitalsPHLMap))){
                map.addLayer(hospitalsPHLMap);
            }

        }else{
            if(map.hasLayer(hospitalsPHLMap)){
                map.removeLayer(hospitalsPHLMap);
            }
            $("#percents").html("");
        }
    });


    $("#ch-100m").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(serviceArea100mMap))){
                map.addLayer(serviceArea100mMap);
            }

        }else{
            if(map.hasLayer(serviceArea100mMap)){
                map.removeLayer(serviceArea100mMap);
            }
            $("#percents").html("");
        }
    });


    $("#ch-250m").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(serviceArea250mMap))){
                map.addLayer(serviceArea250mMap);
            }

        }else{
            if(map.hasLayer(serviceArea250mMap)){
                map.removeLayer(serviceArea250mMap);
            }
            $("#percents").html("");
        }
    });


    $("#ch-500m").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(serviceArea500mMap))){
                map.addLayer(serviceArea500mMap);
            }

        }else{
            if(map.hasLayer(serviceArea500mMap)){
                map.removeLayer(serviceArea500mMap);
            }
            $("#percents").html("");
        }
    });

    $("#ch-phl-bus").click(function(){
        var state = $(this).prop('checked');
        if(state){
            if(!(map.hasLayer(phlBusRoutsMap))){
                map.addLayer(phlBusRoutsMap);
            }

        }else{
            if(map.hasLayer(phlBusRoutsMap)){
                map.removeLayer(phlBusRoutsMap);
            }
            $("#percents").html("");
        }
    });
});
