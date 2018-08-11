
function attachEventHandlers() {
	
	// TODO: call handleImageClick() when an image is clicked
	$('.image').on('click', handleImageClick);

}

function handleImageClick(event) {

console.log('image was clicked!');

	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		
		// fade info box out
		info.fadeOut(200);

	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		// fade info box in
		info.fadeIn(200);

		// update image source
		preview.css('background-image', target.css('background-image'));
	}
}

$('document').ready(function() {

	attachEventHandlers();

});
