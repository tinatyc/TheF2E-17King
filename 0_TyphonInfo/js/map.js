var caseArea = new Array();
function initMap() {
  // The location of Uluru
  var centerMap = {lat: 25.0523815, lng: 121.537186};
  // The map, centered at Uluru
  var gooMap = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: centerMap});
  getGetDisasterSummary();
  /********
   * function: 最新受損情形資料(30 分鐘更新一次)
   * update:20180711
   * developer:King Tzeng
   ********/
  	
  function getGetDisasterSummary(){
  	$.ajax({
  	    // url: tpeocUrl + "GetDisasterSummary.json",
  	    url: "fake.json",
  	    type: "GET",
  	    success: function(data) {
  	        data = data;
  	        console.log(data);
  	        data.forEach(function(detail){
  	        	lng = detail.Wgs84X;
  	        	lat = detail.Wgs84Y;
  	        	isComplete = detail.CaseComplete;
  				// console.log(isComplete);

  	        	// console.log(lng);
  	        	// console.log(lat);
  	        	let latlng = {lat: lat, lng: lng};
  	        	marker = new google.maps.Marker({position: latlng, map: gooMap});
  	        	// caseArea.push(latlng);
  	        });
  	        // console.log(caseArea);
  	        // parseJSON = $.parseJSON(data);
  	    },
  	    error: function(data) {
  	        console.log(data);
  	    },
  	    complete:function(data){
  	    	// console.log(data);
  	    }
  	});	
  }
 
  
  // console.log(caseArea);
  // console.log(locations)
  // var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // var markers = locations.map(function(location, i) {
  //   return new google.maps.Marker({
  //     position: location,
  //     label: labels[i % labels.length]
  //   });
  // });

  // Add a marker clusterer to manage the markers.
  // var markerCluster = new MarkerClusterer(gooMap, markers,
  //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  
}/******** function initMap end ********/
// var locations = [
//   {lat: 25.0503178, lng: 121.566231},
//   {lat: 25.0523815, lng: 121.537186}
// ]

