function mailCheck() {
    console.log("msg");
    accEmail_Len = accEmaill.val().length;
    accEmailVal = accEmaill.val();
    console.log(accEmail_Len);
    console.log(accEmailVal);

    if (accEmail_Len === 0){
    	nextBtn.prop('disabled', true);
    	inputDefault();

    }else if(accEmailVal.indexOf("@") > 0){
    	console.log("email");
    	console.log(accEmailVal.indexOf("@"));
    	$(".f1").removeClass("border-danger");
    	$(".f1").addClass("border-success");
    	btnEvent();
    }else{
    	console.log("email error");
    	console.log(accEmailVal.indexOf("@"));
    	$(".f1").removeClass("border-success");
    	$(".f1").addClass("border-danger");
    	$(".input-group").addClass("border-danger");
    }
}
function btnEvent(){
	// nextBtn.prop('disabled', true);
	console.log(nextBtn.attr("disabled") == "disabled");
	if (nextBtn.attr('disabled') === "disabled"){
		nextBtn.removeAttr('disabled');
	}else{
		nextBtn.attr('disabled', 'disabled');
	}
}
function inputDefault(){
	$(".input-group").removeClass("border-success");
	$(".input-group").removeClass("border-danger");
}
