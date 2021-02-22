window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.64598,-48.577423),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content,click){
        var latlng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latlng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffSet: new google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker,'click',function(){
                infoWindow.open(map,marker);
            });
        }else if(click == false){
            infoWindow.open(map,marker);
        }
        
    }

    initialize();
    var conteudo = '<p style="color: black; font-size:13px; padding: 10px 0;">Meu endereço personalizado!</p>';
    addMarker(-27.616367,-48.5923228,'',conteudo,true);

    setTimeout(function(){
        map.panTo({'lat':-20.391701,'lng':-40.495979});
    },4000);

}