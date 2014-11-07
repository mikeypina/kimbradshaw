;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		var cbClose = function() {
			var $video = $(this);

			$video.find('.sqs-video-overlay').css({
				'opacity' : '1',
				'visibility' : 'visible'
			});
		}

		$('.sqs-video-wrapper').colorbox({
			html: function() {
				return $(this).data('html');
			},
			scrolling: false,
			onComplete: function() {

				var $video = $(this);

				$.colorbox.resize();

				$video.find('video, iframe').remove();
	
				$('#cboxLoadedContent iframe').load(function() {

					$video.find('.sqs-video-overlay').css({
						'opacity' : '1',
						'visibility' : 'visible'
					});
					
				});
			},
			onCleanup: cbClose,
			onClosed: cbClose
		})
	});
})(jQuery, window, document);
