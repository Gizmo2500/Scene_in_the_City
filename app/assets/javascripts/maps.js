$(window).load(function(){
    console.log("test1");
    console.log("test2"); 
var movi3s = [{value: "Big Trouble in Little China"},{value: "Ant-Man"},{ value: 'Zodiac'},{ value: 'Yours, Mine and Ours'},{ value: 'Woman on Top'},{ value: 'Woman on the Run'},{ value: 'When a Man Loves a Woman'},{ value: 'Whats Up Doc?'},{ value: 'What the Bleep Do We Know'},{ value: 'What Dreams May Come'},{ value: 'Vertigo'},{ value: 'Vegas in Space'},{ value: 'Until the End of the World'},{ value: 'Under the Tuscan Sun'},{ value: 'Twisted'},{ value: 'Tweek City'},{ value: 'Tucker: The Man and His Dreams'},{ value: 'True Believer'},{ value: 'To the Ends of the Earth'},{ value: 'Tin Cup'},{ value: 'Time After Time'},{ value: 'Thief of Hearts'},{ value: 'They Call Me MISTER Tibbs'},{ value: 'The Zodiac'},{ value: 'The Woman In Red'},{ value: 'The Wedding Planner'},{ value: 'The Towering Inferno'},{ value: 'The Times of Harvey Milk'},{ value: 'The Ten Commandments'},{ value: 'The Sweetest Thing'},{ value: 'The Rock'},{ value: 'The Right Stuff'},{ value: 'The Pursuit of Happyness'},{ value: 'The Princess Diaries'},{ value: 'The Presidio'},{ value: 'The Parent Trap'},{ value: 'The Other Sister'},{ value: 'The Organization'},{ value: 'The Nightmare Before Christmas'},{ value: 'The Net'},{ value: 'The Matrix'},{ value: 'The Master'},{ value: 'The Maltese Falcon'},{ value: 'The Love Bug'},{ value: 'The Lineup'},{ value: 'The Laughing Policeman'},{ value: 'The Last of the Gladiators'},{ value: 'The Lady from Shanghai'},{ value: 'The Jazz Singer'},{ value: 'The Internship'},{ value: 'The House on Telegraph Hill'},{ value: 'The Graduate'},{ value: 'The Game'},{ value: 'The Fog of War'},{ value: 'The Fan'},{ value: 'The Enforcer'},{ value: 'The Doors'},{ value: 'The Doctor'},{ value: 'The Diary of a Teenage Girl'},{ value: 'The Dead Pool'},{ value: 'The Core'},{ value: 'The Conversation'},{ value: 'The Competiton'},{ value: 'The Candidate'},{ value: 'The Californians'},{ value: 'The Caine Mutiny'},{ value: 'The Bridge'},{ value:'The Birds'},{ value: 'The Bachelor'},{ value: 'The Assassination of Richard Nixon'},{ value: 'Terminator - Genisys'},{ value: 'Take the Money and Run'},{ value: 'Swingin Along'},{ value: 'Swing'},{ value: 'Sweet November'},{ value: 'Susan Slade'},{ value: 'Superman'},{ value: 'Sudden Impact'},{ value: 'Sudden Fear'},{ value: 'Street Music'},{ value:'Stigmata'},{ value: 'Star Trek VI: The Undiscovered County'},{ value: 'Star Trek II : The Wrath of Khan'},{value: 'Sphere'},{ value: 'So I Married an Axe Murderer'},{ value:'Sneakers'},{ value: 'Sister Act 2: Back in the Habit'},{ value: 'Sister Act'},{ value: 'Shoot the Moon'},{ value: 'Shattered'},{ value: 'Shadow of the Thin Man'},{ value: 'Seven Girlfriends'},{ value: 'Serial'},{ value: 'Serendipity'},{ value: 'Sense8'},{ value: 'Sausalito'},{ value: 'San Francisco'},{ value: 'San Andreas'},{ value: 'Romeo Must Die'},{ value: 'Rollerball'},{ value: 'Rent'},{ value: 'Red Widow'},{ value: 'Red Diaper Baby'},{ value: 'Raising Cain'},{ value: 'Quitters'},{ value:'Quicksilver'},{ value: 'Psych- Out'},{ value: 'Pretty Woman'},{ value: 'Point Blank'},{ value: 'Pleasure of His Company'},{ value: 'Playing Mona Lisa'},{ value: 'Play it Again, Sam'},{ value: 'Phenomenon'},{ value: 'Petulia'},{ value: 'Patty Hearst'},{ value: 'Patch Adams'},{ value: 'Parks and Recreation'},{ value: 'Panther'},{ value: 'Pal Joey'},{ value: 'Pacific Heights'},{ value: 'On the Road'},{ value: 'On the Beach'},{ value: 'Nora Prentiss'},{ value: 'Nine to Five'},{ value: 'Nine Months'},{ value: 'Nina Takes a Lover'},{ value: 'Night of Henna'},{ value: 'Never Die Twice'},{value: 'Need For Speed'},{ value: 'My Reality'},{ value: 'Murder in the First'},{ value: 'Mrs. Doubtfire'},{ value: 'Mother'},{ value: 'Mona Lisa Smile'},{ value: 'Mission (aka City of Bars)'},{ value: 'Milk'},{ value: 'Midnight Lace'},{ value: 'Metro'},{ value: 'Memoirs of an Invisible Man'},{value: 'Maxie'},{ value: 'Marnie'},{ value: 'Magnum Force'},{ value: 'Love & Taxes'},{ value: 'Looking'},{ value: 'Live Nude Girls Unite'},{ value:'Knife Fight'},{ value: 'Kamikaze Hearts'},{ value: 'Just One Night'},{value: 'Just Like Heaven'},{ value: 'Junior'},{ value: 'Julie and Jack'},{value: 'Joy Luck Club'},{ value: 'James and the Giant Peach'},{ value:'Jagged Edge'},{ value: 'Jade'},{ value: 'Jack'},{ value: 'It Came From Beneath the Sea'},{ value: 'Invasion of the Body Snatchers'},{ value:'Interview With The Vampire'},{ value: 'Innerspace'},{ value: 'Indiana Jones and the Last Crusade'},{ value: 'Is'},{ value: 'I Remember Mama'},{ value:'Hulk'},{ value: 'How Stella Got Her Groove Back'},{ value: 'House of Sand and Fog'},{ value: 'Homeward Bound II: Lost in San Francisco'},{ value:'High Crimes'},{ value: 'High Anxiety'},{ value: 'Hereafter'},{ value:'Herbie Rides Again'},{ value: 'Hemingway & Gelhorn'},{ value: 'Hello Frisco, Hello'},{ value: 'Heart Beat'},{ value: 'Heart and Souls'},{ value:'Harold and Maude'},{ value: 'Hard to Hold'},{ value: 'Happy Gilmore'},{ value: 'Haiku Tunnel'},{ value: 'Guess Whos Coming to Dinner'},{ value:'Groove'},{ value: 'Greed'},{ value: 'Golden Gate'},{ value: 'God is a Communist?* (show me heart universe)'},{ value: 'Getting Even with Dad'},{ value: 'George of the Jungle'},{ value: 'Gentleman Jim'},{value: 'Freebie and the Bean'},{ value: 'Foul Play'},{ value: 'Forty Days and Forty Nights'},{ value: 'Forrest Gump'},{ value: 'Flubber'},{ value:'Flower Drum Song'},{ value: 'Final Analysis'},{ value: 'Fearless'},{ value: 'Fathers Day'},{ value: 'Fat Man and Little Boy'},{ value: 'Fandom'},{value: 'Family Plot'},{ value: 'Faces of Death'},{ value: 'Escape From Alcatraz'},{ value: 'Edtv'},{ value: 'Dying Young'},{ value: 'Dream with the Fishes'},{ value: 'Dream for an Insomniac'},{ value: 'Dr. Doolittle 2'},{ value: 'Down Periscope'},{ value:'Dopamine'},{ value: 'Doctor Doolittle'},{ value: 'Dirty Harry'},{ value: 'Dim Sum: A Little Bit of Heart'},{ value: 'Desperate Measures'},{ value:'Days of Wine and Roses'},{ value: 'Dawn of the Planet of the Apes'},{ value: 'Dark Passage'},{ value: 'D.O.A'},{ value: 'CSI: NY- episode 903'},{value: 'Crackers'},{ value: 'Copycat'},{ value: 'Confessions of a Burning Man'},{ value: 'Common Threads: Stories From the Quilt'},{ value: 'Class Action'},{ value: 'City of Angels'},{ value: 'Chu Chu and the Philly Flash'},{ value: 'Cherish'},{ value: 'Chan is Missing'},{ value: 'Casualties of War'},{ value: 'Cant Stop the Music'},{ value: 'By Hook or By Crook'},{value: 'Burglar'},{ value: 'Bullitt'},{ value: 'Broken-A Modern Love Story'}, { value: 'Boys and Girls'},{ value: 'Blue Jasmine'}, { value: 'Birdman of Alcatraz'},{ value: 'Big Sur'},{value: 'Big Eyes'},{ value: 'Bicentennial Man'},{ value: 'Bee Season'},{ value: 'Bedazzled'},{ value: 'Beaches'},{ value: 'Basic Instinct'},{ value:'Barbary Coast'},{ value: 'Babies'},{ value: 'Attack of the Killer Tomatoes'},{ value: 'Around the Fire'},{ value: 'Another 48 Hours'},{ value: 'American Yearbook'},{ value: 'American Graffiti'},{ value: 'All About Eve'},{ value:'Alcatraz'},{ value: 'After the Thin Man'},{ value: 'About a Boy'},{ value: 'A View to a Kill'},{ value: 'A Smile Like Yours'},{ value: 'A Night Full of Rain'},{ value: 'A Jitney Elopement'},{ value: '50 First Dates'},{ value: '48 Hours'},{ value: '24 Hours on Craigslist'},{ value: '180'},{ value:'About a Boy'},{ value: 'Alcatraz'},{ value: 'Alexanders Ragtime Band'},{ value: 'A Night Full of Rain'},{ value: 'A Smile Like Yours '},{ value: 'A View to a Kill'},{ value: 'Basic Instinct'},{ value: 'Bedazzled'},{ value: 'Bicentennial Man'},{ value: 'Big Eyes'},{ value:'Blue Jasmine'},{ value: 'Boys and Girls'},{ value: 'Bullitt'},{ value: 'Burglar'},{ value: 'By Hook or By Crook'},{ value: 'Chu Chu and the Philly Flash'},{ value: 'Class Action'},{ value: 'Copycat'},{ value: 'Dark Passage'},{ value: 'Dawn of the Planet of the Apes'},{ value: 'Dim Sum: A Little Bit of Heart'},{ value: 'Dirty Harry'},{ value: 'D.O.A'},{ value:'Doctor Doolittle'},{ value: 'Dr. Doolittle 2'},{ value: 'Edtv'},{ value:'Experiment in Terror'},{ value: 'Family Plot'},{ value: 'Fearless'},{ value: 'Final Analysis'},{ value: 'Foul Play'},{ value: 'Freebie and the Bean'},{ value: 'George of the Jungle'},{ value: 'Getting Even with Dad'},{ value: 'Godzilla'},{ value: 'Golden Gate'},{ value: 'Greed'},{ value:'Groove'},{ value: 'Guess Whos Coming to Dinner'},{ value: 'Harold and Maude'},{ value: 'Heart and Souls'},{ value: 'Heart Beat'},{ value: 'Herbie Rides Again'},{ value: 'Hereafter'},{ value: 'High Anxiety'},{ value: 'High Crimes'},{ value: 'Hulk'},{ value: 'Innerspace'},{ value: 'Interview With The Vampire'},{ value: 'Invasion of the Body Snatchers'},{ value: 'I Remember Mama'},{ value: 'It Came From Beneath the Sea'},{ value: 'Jade'},{value: 'Joy Luck Club'},{ value: 'Junior'},{ value: 'Knife Fight'},{ value:'Looking'},{ value: 'Love & Taxes'},{ value: 'Magnum Force'},{ value:'Maxie'},{ value: 'Milk'},{ value: 'Mrs. Doubtfire'},{ value: 'Murder in the First'},{ value: 'My Reality'},{ value: 'Need For Speed'},{ value: 'Nine Months'},{ value: 'On the Road'},{ value: 'Pacific Heights'},{ value: 'Pal Joey'},{ value: 'Parks and Recreation'},{ value: 'Patch Adams'},{ value:'Petulia'},{ value: 'Play it Again, Sam'},{ value: 'Quitters'},{ value: 'Red Widow'},{ value: 'San Andreas'},{ value: 'Sense8'},{ value: 'Sister Act 2:Back in the Habit'},{ value: 'So I Married an Axe Murderer'},{ value: 'StarTrek IV: The Voyage Home'},{ value: 'Sudden Fear'},{ value: 'Sudden Impact'},{ value: 'Sweet November'},{ value: 'Take the Money and Run'},{ value: 'The Bachelor'},{ value: 'TheConversation'},{ value: 'The Dead Pool'},{ value: 'The Diary of a Teenage Girl'},{ value: 'The Enforcer,The Game'}];

   $('#q').autocomplete({  source: movi3s,  onSelect: function
  (suggestion) { alert('You selected: ' + suggestion.value); } });

  
  var x = $(".loKos"); 

  $( document ).ready(function() {
    // Handler for .ready() called.
    var arra = []; 

    for ( var i = 0; i< x.length; i++){
      arra.push(x[i].innerText.replace(/^/,' San Francisco, CA '));   
    }; 

    //xxx

      initialize(); 
      function initialize() {
      // create a point in SF to center the map around 
      var mapOptions = {
        center: { lat: 37.7648, lng: -122.463},
        zoom: 12
      };

      //create a map
      var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
      

        
      //create a map marker to start

       
    // start of addresses 

     var addresses = arra;
     // ADD7
     var details = [];


     
     for (var k = 0; k<addresses.length; k++){
      
        }; 
        var bounds = new google.maps.LatLngBounds();

        for (var w = 0; w < addresses.length; w++) {
          (function(k){
          setTimeout(function(){
            $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[k]+'&components=administrative_area:San+Francisco&sensor=false', null, function (data) {
                $(document).delay(1000);   
                setTimeout(function(){
                
                 
                var p = data.results[0].geometry.location;            
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                var ninja = new google.maps.Marker({  // ninja is a pointer 
                    position: latlng,
                    map: map,
                    icon: '/images/marker30.png'
                });             
                //ADD 6: info window contents

                
            
                            
            var title = document.getElementById("t").innerText; 

            var contentString = '<div id="content">'+
            '<h2>'+ title +'</h2><br>'+
            addresses[k]+
            '<br><br><br>'+
            '<button>Save location</button>'
            '</div>';
            //ADD6 END

            //ADD4: new info window
            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            //ADD4 END

            //ADD 5: add click event to marker
            
            
            google.maps.event.addListener(ninja, 'click', function() {

              infowindow.open(map,ninja);
            }); 
              
            //   $.ajax({
            //           success:function () {
            //           infowindow.setContent(addresses[k]);
            //          }
            //    });
            // });
            // google.maps.event.addListener(ninja, 'mouseover', function() {
            //   infowindow.open(map,ninja);
            // });
            //   google.maps.event.addListener(ninja, 'mouseout', function() {
            //   infowindow.close(map,ninja);
            // });

            // ADD5 END 
           
                bounds.extend(latlng);
                map.fitBounds(bounds);
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

       