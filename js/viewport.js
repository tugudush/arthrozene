var viewport_info = function () {
  var viewport_width, viewport_height, viewport_size, device, orientation;

  viewport_width = $(window).width();
  viewport_height = $(window).height();
  viewport_size = viewport_width + ' x ' + viewport_height;

  $viewport_width = viewport_width;
  $viewport_height = viewport_height;
  $viewport_size = viewport_size;

  $screen_height = window.screen.height;
  $avail_height = window.screen.availHeight;

  if (viewport_width < 768) {
    $('body').addClass('mobile');
    device_view = 'mobile';
  } // end of if (viewport_width < 768)
  else if (viewport_width >= 768 && viewport_width <= 1024) {
    $('body').removeClass('mobile');
    device_view = 'tablet';
  } else {
    $('body').removeClass('mobile');
    device_view = 'desktop';
  }

  $device_view = device_view;

  if (viewport_width >= viewport_height) {
    orientation = 'landscape';
  } else {
    orientation = 'portrait';
  }

  $orientation = orientation;

} // end of $.fn.viewport_size = function()