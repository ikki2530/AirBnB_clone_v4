
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
// check if api status is ok.
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  console.log(data.status)
  if (data.status === 'OK') {
    $("#api_status").addClass("available");
  }
  else {
    $("#api_status").removeClass("available");
  }
})
$.post('http://0.0.0.0:5001/api/v1/places_search/',
{

},
function (data, status) {
  console.log(data.status)
})