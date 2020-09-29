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
});
