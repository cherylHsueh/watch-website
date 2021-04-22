$(document).ready(
	function(){
		$('.btn-a').click(
			function(){
				$('.help-FAQ-container').show();
				$('.getting-started').hide();
			}
			)
			
		$('.btn-b').click(
			function(){
				$('.getting-started').show();
				$('.help-FAQ-container').hide();
			}
			)

		}
	)
