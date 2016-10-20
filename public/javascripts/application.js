$(document).ready(function(){
  $('#collapse-nav ol.nav li a').click(function(e) {
    $('#collapse-nav').collapse('toggle');
  });

  $('#collapse-nav').on('show.bs.collapse', function() {
    $('body').attr('data-target', '#main-nav-mobile');
    $('body').scrollspy({target: '#main-nav-mobile'});
  });

  $('#collapse-nav').on('hide.bs.collapse', function() {
    $('body').attr('data-target', '#main-nav');
    $('body').scrollspy({target: '#main-nav'});
  });

  $('.photo-area').hover(function(e) {
    var $img = $('img.normal', $(this));
    var src = $img.attr("src");
    $img.attr("src", src.replace(/.png$/, ".gif"));
  }, function(e) {
    var $img = $('img.normal', $(this));
    var src = $img.attr("src");
    $img.attr("src", src.replace(/.gif$/, ".png"));
  });

  $('#main-nav').scrollspy();
  $('#main-nav-mobile').scrollspy();

  /*$('li.item.next').click(function(e) {
    $('#easi6-modal').modal();
  });*/

  $('li.item.easiway').click(function(e) {
    $('#easiway-modal').modal();
  });

  $('li.item.vox').click(function(e) {
    $('#vox-modal').modal();
  });

  $('li.item.tomoni').click(function(e) {
    $('#tomoni-modal').modal();
  });

  $('li.item.dnd').click(function(e) {
    $('#dnd-modal').modal();
  });

  var isMapLoaded = false;
  $('li.item.map a').click(function(e) {
    if (!isMapLoaded) {
      loadMap();
      isMapLoaded = true;
    }
    $('#map-modal').modal();
    return false;
  });

  // preload images
  var member_images = [];
  img = new Image(); img.src = "/images/members/Kay_woo.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/jade_han.gif";
  member_images.push(img);
  var img = new Image(); img.src = "/images/members/sunny.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/Daewon_kim.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/taekmin_kim.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/Myunkyu_Park.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/youngho_suh.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/chase.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/ben.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/euna.gif";
  member_images.push(img);
  img = new Image(); img.src = "/images/members/derek.gif";
  member_images.push(img);
});

var mapOptions = {
  center: new google.maps.LatLng(37.472933, 127.046906),
  zoom: 16,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

function loadMap()
{
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  var geocoder = new google.maps.Geocoder();
  var address = "UNIT 2302, 23/F NEW WORLD TOWER 1 18 QUEEN'S ROAD CENTRAL, CENTRAL HONG KONG";
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        icon: '/images/icn_map.png'
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });

  google.maps.event.addListenerOnce(map, 'idle', function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(mapOptions.center);
  });
}
