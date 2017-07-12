(function() {
  $('body').on('click', '.gs-next', function() {
    return $('.gs-steps > .active').next('li').find('a').trigger('click');
  });

  $('body').on('click', '.gs-prev', function() {
    return $('.gs-steps > .active').prev('li').find('a').trigger('click');
  });

  $('.dropify').dropify({
    messages: {
      'default': 'Add Photo'
    }
  });

  $('body').on('click', 'input:radio[name=\'categories\']', function() {
    var cat_icon, cat_name;
    $('.main-category').addClass('hidden');
    $('.sub-category').removeClass('hidden');
    cat_name = $(this).data('name');
    $('.main-cat-name').html(cat_name);
    cat_icon = $(this).closest('li').find('.cat-icon').clone().addClass('m-r-15');
    $('.sub-category .cat-name').find('.cat-icon').remove();
    return $('.sub-category .cat-name').prepend(cat_icon);
  });

  $('body').on('click', '.sub-category-back', function() {
    $('.main-category').removeClass('hidden');
    return $('.sub-category').addClass('hidden');
  });

  if ($(window).width() <= 768) {
    $('.single-category').each(function() {
      var branchAdd, branchrow;
      branchAdd = $(this).find('.branch-row');
      branchrow = $(this).find('.branch').detach();
      $(branchAdd).append(branchrow);
    });
  }

  $('.flexdatalist').flexdatalist();

  $('body').on('click', '.tips', function() {
    $(this).toggleClass('open');
    return $('.tips__steps.collapse').collapse('toggle');
  });

}).call(this);
