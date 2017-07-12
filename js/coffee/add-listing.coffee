# Get Started form next/prev
$('.gs-next').click ->
	$('.gs-steps > .active').next('li').find('a').trigger 'click'

$('.gs-prev').click ->
	$('.gs-steps > .active').prev('li').find('a').trigger 'click'

# Upload file
$('.dropify').dropify messages: 'default': 'Add Photo'

