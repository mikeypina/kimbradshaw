;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.sqs-video-wrapper').colorbox({
			html: function() {
				return $(this).data('html');
			}
			scrolling: false,
			onComplete: function() {
				$.colorbox.resize();
			}
		})
	});
})(jQuery, window, document);
