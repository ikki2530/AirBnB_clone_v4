// $.post('http://0.0.0.0:5001/api/v1/places_search/', {}, function (data, status) {
// console.log("Holaaaaaaaaaaaaaaaaaaaaaa")
// });

console.log("3-hbnbbbbbbbbbbbbbbbbbb")
$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'POST',
  data: JSON.stringify({}),
  contentType:"application/json; charset=utf-8",
  success: function (data) {
    
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      let html_code = "<article><div class='title_box'> ";
      $('SECTION.places').append('<article>' + data[i].name + '</article>')
    }
  }
});