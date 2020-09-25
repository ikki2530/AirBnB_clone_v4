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
});
