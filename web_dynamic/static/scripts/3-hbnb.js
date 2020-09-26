// 2 checkboxes
$(document).change(function (){
  ids_amenities = [];
  name_amenities = [];
  $.each($("input[type='checkbox']:checked"), function () {
    ids_amenities.push($(this).attr('data-id'));
    name_amenities.push($(this).attr('data-name'));
  });

  console.log(ids_amenities, name_amenities);
  let txt = '';
  for (let i = 0; i < name_amenities.length; i++) {
    txt += name_amenities[i] + ", ";
  }
  $('.amenities h4').text(txt);
  console.log(txt)
});
// 3 check if api status is ok.
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  if (data.status === 'OK') {
    $("#api_status").addClass("available");
  }
  else {
    $("#api_status").removeClass("available");
  }
})


// 4 send a post request to get a list of places
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  data: JSON.stringify({}),
  contentType:"application/json; charset=utf-8",
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      // Adding div with class='title_box'
      let html_code1 = "<div class='title_box'><h2>" + data[i].name +"</h2> <div class='price_by_night'>" + data[i].price_by_night +"</div></div>";
      // Adding div with class='information'
      cond_guests = data[i].max_guest !== 1 ? 's' : '';
      let html_code2 = html_code1 + "<div class='information'><div class='max_guest'>" + data[i].max_guest + " Guest" + cond_guests + "</div>";
      cond_bedrooms = data[i].number_rooms !== 1 ? 's' : '';
      html_code2 += "<div class='number_rooms'>" + data[i].number_rooms + " Bedroom"+ cond_bedrooms +"</div>";
      cond_bathrooms = data[i].number_bathrooms !== 1 ? 's' : '';
      html_code2 += "<div class='number_bathrooms'>" + data[i].number_bathrooms + " Bathroom"+ cond_bathrooms +"</div></div>";
      // Adding div with class='user'
      let htmlCode3 = html_code2 + "<div class='description'>" + data[i].description + "</div>"
      $('SECTION.places').append('<article>' + htmlCode3 + '</article>');
      // clean the variables for each iteration
      html_code1 = '';
      html_code2 = '';
    }
  }
});