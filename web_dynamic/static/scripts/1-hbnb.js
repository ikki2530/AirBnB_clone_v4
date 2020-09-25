$(document).ready(function (){
  ids_amenities = [];

  $.each("$input[data-id=':amenity_id']:checked", function () {
    ids_amenities.push($(this).val())
  });
});
