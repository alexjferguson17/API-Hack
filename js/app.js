$(document).ready(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var query = $('#query').val();
    requestData(query);
  });

  var requestData=function(data){console.log(data)};
  // $.getJSON('?q=&&callback=myFunction')

  $.ajax({
     url: "https://www.tastekid.com/api/similar",

     // The name of the callback parameter, as specified by the YQL service
     jsonp: "callback",

     data: {
         q: "red+hot+chili+peppers",
         k: "205150-Testapp-KCD81AJE"
     },

     // Tell jQuery we're expecting JSONP
     dataType: "jsonp",

         // Work with the response
     success: function(response) {
         console.log(response);
     }
  });
});
