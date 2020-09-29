// 2 checkboxes
$(document).change(function () {
  const idsAmenities = [];
  const nameAmenities = [];
  $.each($('input[type="checkbox"]:checked'), function () {
    idsAmenities.push($(this).attr('data-id'));
    nameAmenities.push($(this).attr('data-name'));
  });

  console.log(idsAmenities, nameAmenities);
  let txt = '';
  for (let i = 0; i < nameAmenities.length; i++) {
    txt += nameAmenities[i] + ', ';
  }
  $('.amenities h4').text(txt);
  console.log(txt);
});
// 3 check if api status is ok.
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

// 4 send a post request to get a list of places
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  data: JSON.stringify({}),
  contentType: 'application/json; charset=utf-8',
  success: function (data) {
    for (let i = 0; i < data.length; i++) {
      // console.log(data.length);
      // Adding div with class='title_box'
      let htmlCode1 = '<div class="title_box"><h2>' + data[i].name + '</h2> <div class="price_by_night">$' + data[i].price_by_night + '</div></div>';
      // Adding div with class='information'
      const condGuests = data[i].max_guest !== 1 ? 's' : '';
      let htmlCode2 = htmlCode1 + '<div class="information"><div class="max_guest">' + data[i].max_guest + ' Guest' + condGuests + '</div>';
      const condBedrooms = data[i].number_rooms !== 1 ? 's' : '';
      htmlCode2 += '<div class="number_rooms">' + data[i].number_rooms + ' Bedroom' + condBedrooms + '</div>';
      const condBathrooms = data[i].number_bathrooms !== 1 ? 's' : '';
      htmlCode2 += '<div class="number_bathrooms">' + data[i].number_bathrooms + ' Bathroom' + condBathrooms + '</div></div>';
      // Adding div with class='user'
      const htmlCode3 = htmlCode2 + '<div class="description">' + data[i].description + '</div>';
      $('SECTION.places').append('<article>' + htmlCode3 + '</article>');
      // clean the variables for each iteration
      htmlCode1 = '';
      htmlCode2 = '';
    }
  }
});
