$(document).ready(function() {
   $('#top-text').keyup(function() {
     var valueTop = $(this).val();
     $('.top-caption').text(valueTop);
  });
   $('#bottom-text').keyup(function() {
     var valueBottom = $(this).val();
     $('.bottom-caption').text(valueBottom);
  });
   $('#image-url').keyup(function() {
		var newSrc = $(this).val();
		$('.meme').attr('src', newSrc);
  });
});
