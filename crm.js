$("input[type='button']").click(function(){

	var type=$("select[name='type']").val()
	var key=$("input[name='code_name']").val()
	if(type=="ins"||type=="del"||type=="update"){
<<<<<<< HEAD
		localStorage.setItem(key,key);
=======
		alert("请保存key")
>>>>>>> 4f0a3ed4936ca1de61709051d461974542feea9c
	}
	

});