# Get Started form next/prev
$('body').on 'click', '.gs-next', ->
	$('.gs-steps > .active').next('li').find('a').trigger 'click'

$('body').on 'click', '.gs-prev', ->
	$('.gs-steps > .active').prev('li').find('a').trigger 'click'

# Upload file
$('.dropify').dropify messages: 'default': 'Add Photo'

# Add/Edit categories
$('body').on 'click', 'input:radio[name=\'categories\']', ->
	# Toggle wrappers
	$('.main-category').addClass 'hidden'
	$('.sub-category').removeClass 'hidden'
	# Update category name
	cat_name = $(this).data('name')
	$('.main-cat-name').html(cat_name)
	# Update icon
	cat_icon = $(this).closest('li').find('.cat-icon').clone().addClass 'm-r-15'
	$('.sub-category .cat-name').find('.cat-icon').remove()
	$('.sub-category .cat-name').prepend(cat_icon)

$('body').on 'click', '.sub-category-back', ->
	$('.main-category').removeClass 'hidden'
	$('.sub-category').addClass 'hidden'

# detaching sections
if $(window).width() <= 768
  $('.single-category').each ->
    branchAdd = $(this).find('.branch-row')
    branchrow = $(this).find('.branch').detach()
    $(branchAdd).append branchrow
    return

#jQuery flexdatalist

$('.flexdatalist').flexdatalist()    