$("input[type='button']").click(function(){

	var type=$("select[name='type']").val()
	var key=$("input[name='code_name']").val()
	if(type=="ins"||type=="del"||type=="update"){
		localStorage.setItem(key,key);
	}
	

});