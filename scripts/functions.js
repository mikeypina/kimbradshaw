;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		$('.sqs-video-wrapper').colorbox({
			width: '80%',
			height: '56%',
			html: function() {
				return $(this).data('html');
			},
			scrolling: false,
			onComplete: function() {
				var $video = $(this);

				$.colorbox.resize();

				$video.find('video, iframe').remove();
			}
		})
	});
})(jQuery, window, document);
