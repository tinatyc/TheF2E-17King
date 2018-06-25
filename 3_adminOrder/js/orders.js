var coinArray = ["BTC","DASH","ETH"];
var badgeArray = 
[
'<span class="badge badge-success">賺錢</span>',
'<span class="badge badge-primary">打平</span>',
'<span class="badge badge-danger">賠錢</span>'
];
var PNArray = ['-','+'];
// console.log(coinArray);
function randomPN(){	
	var rPN = PNArray[Math.random() * PNArray.length | 0];
	// console.log(rPN);
	return rPN;
}
function randomCoin(){	
	var rCoin = coinArray[Math.random() * coinArray.length | 0];
	// console.log(rCoin);
	return rCoin;
}
function randomBadge(){
	var rbadge = badgeArray[Math.random() * badgeArray.length | 0];
	// console.log(rbadge);
	return rbadge;
}
function randomNum() {
    randomstr = "";
    var strnum = "0123456789";
    for (var i = 0; i < 1; i++)
        randomstr += strnum.charAt(Math.floor(Math.random() * strnum.length));
    return randomstr;
}

for ( let i = 0; i < 15 ; i++){
	// console.log(i);
	id = new String(i+1);
	// n = randomNum();
	PN = randomPN();
	coin = randomCoin();
	badge = randomBadge();
	$("#orderBody").append('<tr><th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="'+ id +'"><label class="custom-control-label" for="'+ id +'"></label></div></th><td>'+coin+'</td><td>'+randomNum()+'.'+randomNum()+'</td><td>'+randomNum()+randomNum()+','+randomNum()+randomNum()+randomNum()+'</td><td>'+randomNum()+randomNum()+randomNum()+randomNum()+randomNum()+'.'+randomNum()+randomNum()+'</td><td>'+PN+'$'+randomNum()+randomNum()+randomNum()+'.'+randomNum()+randomNum()+'</td><td>$'+randomNum()+randomNum()+randomNum()+'.'+randomNum()+randomNum()+'</td><td>'+badge+'</td></tr>');
	// console.log(randomstr);
	// console.log(rbadge);
	// console.log(rCoin);
}
$(".custom-control-input:checked")
$("#checkedAll").click(function(){
	$('input:checkbox').not(this).prop('checked', this.checked);
});
