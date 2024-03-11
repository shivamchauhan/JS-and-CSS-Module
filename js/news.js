    //jQuery.support.cors = true;
$(function() {
 loadData();
});

function loadData(){
  $.ajax ({
    url: 'https://api.hnpwa.com/v0/news/1.json',
    datatype: "json",
      success: function (e) {
        var data = e;
        // Success callback
        var output = data.map(i => "<tr><td>" + i.id + "</td><td>" + i.title + "</td><td>" + i.points + "</td><td>" + i.user + "</td><td><a href="+i.url+" target='_black'>"+i.url+"</a></td></tr>");
        $(".data_table").html(output);
      }
  });
}
