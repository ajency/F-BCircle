(function() {
  $('.gs-next').click(function() {
    return $('.gs-steps > .active').next('li').find('a').trigger('click');
  });

  $('.gs-prev').click(function() {
    return $('.gs-steps > .active').prev('li').find('a').trigger('click');
  });

  $('.dropify').dropify({
    messages: {
      'default': 'Add Photo'
    }
  });

}).call(this);
