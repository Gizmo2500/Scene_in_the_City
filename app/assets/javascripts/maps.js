$(function(){

var x = $(".loKos"); 

console.log( "whataaaaaaaaaaa", x);     
  

$( document ).ready(function() {
  // Handler for .ready() called.

var arra = []; 

for ( var i = 0; i< x.length; i++){
  arra.push(x[i].innerText.replace(/^/,' San Francisco, CA ')); 
  console.log( x[i]); 
}; 

console.log("champion"); 
console.log(arra); 
console.log("champion"); 
console.log(x.length);

//xxx

initialize(); 
 function initialize() {
        console.log( "stupid");
        console.log(arra); 
        console.log("stupid"); 
        // create a point in SF to center the map around 
        var mapOptions = {
          center: { lat: 37.7648, lng: -122.463},
          zoom: 12
        };

        //create a map
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        //create a map marker to start

         var marker1 = new google.maps.LatLng(37.7648,-122.463);

         var marker = new google.maps.Marker({
            position: marker1,
            map: map,
            title: 'Hello World!'
  });
         //second test marker
          var latlng2 = new google.maps.LatLng(37.789986, -122.40056849999999);
          new google.maps.Marker({
          position: latlng2,
          map: map
          }); 

// start of addresses 

// arra 
console.log( "THIS IS IT"); 
console.log(arra); 
console.log("THIS IS IT"); 
 var addresses = arra;

 console.log(addresses); 
 for (var k = 0; k<addresses.length; k++){
 console.log(addresses[k]); 
    }; 
    var bounds = new google.maps.LatLngBounds();

    for (var w = 0; w < addresses.length; w++) {
      (function(k){
      setTimeout(function(){
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[k]+'&sensor=false', null, function (data) {
            $(document).delay(1000);   
            setTimeout(function(){
            
            var p = data.results[0].geometry.location;
            
            console.log("TJHSIS IS P",p);
          var latlng = new google.maps.LatLng(p.lat, p.lng);
          
            
            
            var ninja = new google.maps.Marker({  // ninja is a pointer 
                position: latlng,
                map: map
            });
            console.log(ninja.position); 
             
            
            bounds.extend(latlng);
            map.fitBounds(bounds);
            console.log(bounds);
            }, 1000);


        });
        }, 1000)
    })(w);
    }


    setInterval(function(){

    })

    //end of addresses 
    
    if(map.getZoom()> 15){
      map.setZoom(15);
    };  
      google.maps.event.addDomListener(window, 'load', initialize); 

};

}); 

});
//pass the array into the map 

       