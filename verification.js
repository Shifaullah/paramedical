$('#rollNo').on({
	keypress : function(e) {
		if(isNaN(e.key)){
			$(this).parent().next().text('Only Numbers are Allowed.');
			return false;
		}else{
			$(this).parent().next().text('');
		}
		if($(this).val().length >=5){
			$(this).parent().next().text('Roll No Should be 5 digits');
			return false;
		}
	}
});