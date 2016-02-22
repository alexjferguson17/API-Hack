$(document).ready(function(){

  var requestData = function(queryVal){ //queryVal is renamed to data
    console.log(queryVal);

    $.ajax({ // ajax starts
       url: "https://www.tastekid.com/api/similar",
       jsonp: "callback",

       data: {
          q: queryVal,
          k: "205150-Testapp-KCD81AJE",
          info: 1,
          limit: 5
       },

       dataType: "jsonp",

       success: function(response) {
          console.log(response);

          $.each(response.Similar.Results, function(index, value){
            //  $('#search-results').append(value.Name);
            //  var url = 'https://i.ytimg.com/vi/' + value.yID + '/mqdefault.jpg'
            //  var img = $('<img src="' + url + '">');
            //  $('#search-results').append(img);
            var information = showInspiration(value)
            $('.search-results').append(information);
          });
      }
    }); // ajax finishes

  } // requestData finish

  var showInspiration = function(value) {
    var url = 'https://i.ytimg.com/vi/' + value.yID + '/mqdefault.jpg';
    var result = $('.templates .information').clone();
    var img = '<img src="' + url + '">';
    result.find('.typeImg').append(img);
    result.find('.name').text(value.Name);
    result.find('.catergory').text(value.Type);
    result.find('.preview').text(value.wTeaser);

    return result;
  };

  // submit starts
  $('#search-term').submit(function(event){
    event.preventDefault();
    var queryVal = $('#query').val();
    requestData(queryVal);
  }); //submit finishes
});
