$(".poll-title").click(function () {
   $(this).siblings().last().slideToggle("slow");
});

$('select').change(function () {
  	if ($(this).val() === 'Add option') {
  		$(this).next().prop('disabled', false);
	} else {
		$(this).next().prop('disabled', true);
  	}
});