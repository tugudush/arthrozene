$(document).ready(function() {
    device_detection();
    viewport_info();
    flex_items();
    console.log('viewport size: '+$viewport_size);
    console.log('screen_height: '+$screen_height);
    console.log('avail_height: '+$avail_height);
    console.log('orientation: '+$orientation);
    console.log('device_view: '+$device_view);
    
}); // end of $(document).ready(function()

$(window).resize(function() {    
    device_detection();
    viewport_info();    
    console.log('viewport size changed!');
    console.log('viewport size: '+$viewport_size);
    console.log('orientation: '+$orientation);
    console.log('device_view: '+$device_view);
    
}); // end of $(window).resize(function()

$(window).on('beforeunload', function() {
    //$(window).scrollTop(0);
}); // end of $(window).on('beforeunload', function()

var flex_items = function() {
  var x = $('*').filter(function() {
      return $(this).css('display').toLowerCase().indexOf('flex') > -1
  })

  x.children().addClass('flex-item');
} // end of var flex_items = function()