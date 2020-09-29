
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
// check if api status is ok.
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  console.log(data.status);
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
