$(function() {
    var api = "https://api.coinmarketcap.com/v2/ticker/";
    btcArray = new Array;
    ethArray = new Array;
    dashArray = new Array;
    timeArray = new Array;
    // console.log(btcLen);
    // console.log(btcArray);
    //BTC id=1
    //dash = 131
    //Ethereum = 1027
       
    function callBtc(){
        resetStatus();
        var id = "1/";
        $.ajax({
            url: api +id,
            type: "GET",
            success: function(data) {
                // console.log(data);
                status = data.metadata.error;
                // console.log(status);
                if (status === null) {
                    // console.log("error");
                    return;
                } else {
                    data = data.data;
                    btcprice = data.quotes.USD.price;
                    btcvolume_24h = data.symbol;
                    website_slug = data.website_slug;
                    btcChange24 = data.quotes.USD.percent_change_24h;
                    isNav = numNav(btcChange24);
                    if( isNav === true){
                        btcChange24 = Math.abs(btcChange24);
                        // $("#btc_1h").addClass("negative");
                        $("#btc_1h").append('<i class="fas fa-arrow-down"></i>'+btcChange24+"%").addClass("negative");
                    }else{
                        $("#btc_1h").append("<i class='fas fa-arrow-up'></i>"+btcChange24+"%");
                    }
                    // console.log(data);
                    // console.log(typeof(btcChange24));
                    // console.log(upd);
                    // console.log(Date(updTime));
                    
                    $("#btc_24volume").text(btcvolume_24h);
                    $("#btc_text").text(btcprice);
                    $("#btc_name").text(website_slug);
                    btcArray.push(btcprice);
                    // console.log(btcArray);
                    
                    // renderChart();
                }
                // parseJSON = $.parseJSON(data);
            },
            error: function(data) {
                // console.log(data);
                alert("發生錯誤！");
                return;
            },
            complete: function(data) {
                // console.log(data);
                callDash();            
            }
        });
    }

    function callDash(){
        var id = "131/";
        $.ajax({
            url: api +id,
            type: "GET",
            success: function(data) {
                // console.log(data);
                status = data.metadata.error;
                // console.log(status);
                if (status === null) {
                    // console.log("error");
                    return;
                } else {
                    data = data.data;
                    dashprice = data.quotes.USD.price;
                    dashvolume_24h = data.symbol;
                    website_slug = data.website_slug;
                    dashChange24 = data.quotes.USD.percent_change_24h;

                    isNav = numNav(dashChange24);
                    if( isNav === true){
                        // $("#dash_1h");
                        dashChange24 = Math.abs(dashChange24);
                        $("#dash_1h").append("<i class='fas fa-arrow-down'></i>"+dashChange24+"%").addClass("negative");
                        // console.log(dashChange24);
                    }else{
                        $("#dash_1h").append("<i class='fas fa-arrow-up'></i>"+dashChange24+"%");
                    }
                    // console.log(dashprice);
                    // console.log(data);
                    $("#dash_text").text(dashprice);
                    $("#dash_24volume").text(dashvolume_24h);
                    $("#dash_text").text(dashprice);
                    $("#dash_name").text(website_slug);
                    dashArray.push(dashprice);
                    // console.log(dashArray);
                    // $("#dash_1h").text(dashChange24);
                    // $(".update").text("Last Update:" + updTime);
                    // renderChart();
                }
                // parseJSON = $.parseJSON(data);
            },
            error: function(data) {
                alert("發生錯誤！");
                return;
            },
            complete: function(data) {
                // console.log(data);
                callEth();

            }
        });
    }
    function callEth(){
        var id = "1027/";
        $.ajax({
            url: api +id,
            type: "GET",
            success: function(data) {
                // console.log(data);
                status = data.metadata.error;
                // console.log(status);
                if (status === null) {
                    // console.log("error");
                    return;
                } else {
                    data = data.data;
                    ethprice = data.quotes.USD.price;
                    ethvolume_24h = data.symbol;
                    website_slug = data.website_slug;
                    ethChange24 = data.quotes.USD.percent_change_24h;
                    isNav = numNav(ethChange24);
                    if( isNav === true){
                        ethChange24 = Math.abs(ethChange24);
                            $("#eth_1h").append("<i class='fas fa-arrow-down'></i>"+ethChange24+"%").addClass("negative");
                        }else{
                            $("#eth_1h").append("<i class='fas fa-arrow-up'></i>"+ethChange24+"%");
                        }
                    // console.log(ethprice);
                    // console.log(data);
                    updTime = data.last_updated;
                    upd = coverTime(updTime);
                    updy= upd.yyyy;
                    updm= upd.mm;
                    updd= upd.dd;
                    updhh= upd.hh;
                    updmin= upd.min;
                    updss= upd.ss;
                    UpdateString = updy+"-"+updm +"-"+updd+" "+updhh+":"+updmin+":"+updss;
                    timeX = new String(updhh+":"+updmin+":"+updss);
                    timeArray.push(timeX);
                    // console.log(timeArray);
                    // console.log(upd);
                    // console.log(updy);
                    $("#eth_text").text(ethprice);
                    $("#eth_24volume").text(ethvolume_24h);
                    $("#eth_text").text(ethprice);
                    $("#eth_name").text(website_slug);
                    $(".update").text("Last Update:" + UpdateString);
                    ethArray.push(ethprice);
                    // console.log(ethArray);
                }
            },
            error: function(data) {
                alert("發生錯誤！");
                return;
            },
            complete: function(data) {
                setArray();
                renderChart();
                // console.log(data);
            }
        });
    }// callEth() end
    function resetStatus(){
        $(".persent").empty();        
    }
    function resetBtn(){
        $("#oneMin").removeClass("active");
        $("#thirtySec").removeClass("active");
        $("#fiveMin").removeClass("active");
    }
    function setArray(){
        btcLen= btcArray.length;
        ethLen= ethArray.length;        
        dashLen= dashArray.length;
        // console.log(ethLen);
        if( ethLen >=29){
            // console.log("ethLen");
            btcArray.length = 1;
            ethArray.length = 1;
            dashArray.length = 1;
            return;
        }
    }
    function coverTime(time){
        var time = new Date(time*1000);
        var yyyy = time.getFullYear();
        var mm = time.getMonth()+1;
        var dd = time.getDate();
        var hh = time.getHours();
        var min = time.getMinutes();
        var ss = time.getSeconds();
        // console.log(time);
        // console.log(yyyy+""+mm+1+""+dd+""+hh+""+min+""+ss);
        mm = checkTime(mm);
        dd = checkTime(dd);
        hh = checkTime(hh);
        min = checkTime(min);
        ss = checkTime(ss);
        // dateTime = yyyy+"-"+mm+"-"+dd+" "+hh+":"+min+":"+ss;
        dateTime ={"yyyy":yyyy,"mm":mm,"dd":dd,"hh":hh,"min":min,"ss":ss};
        return dateTime;

    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
        return i;
    }
    function numNav(m) {
        if( m < 0){
            isNav = true;
            // console.log("1");
            return isNav;
        }else{
            isNav = false;
            return isNav;
        }
    }
    var sec = 300;
    var tt = 0;
    var tt_f = sec;
    $("#fiveMin").click(function(){
        resetBtn();
        $("#fiveMin").addClass("active");
        clearTimeout(count_back);
        sec = 300;
        tt = 0;
        tt_f = sec;
        countb();

    });
    $("#oneMin").click(function(){
        resetBtn();
        $("#oneMin").addClass("active");
        clearTimeout(count_back);
        sec = 60;
        tt = 0;
        tt_f = sec;
        countb();
    });
    $("#thirtySec").click(function(){
        resetBtn();
        $("#thirtySec").addClass("active");
        clearTimeout(count_back);
        sec = 5;
        tt = 0;
        tt_f = sec;
        countb();
    });
        function countb() {
            // console.log(tt);
            // console.log(tt_f);

            $(".count").text("倒數--秒");
            // console.log(tt);
            if (tt >= sec) {
                $(".count").text("倒數" + tt_f + " 秒 更新");
                tt = 0;
                tt_f = sec;
                callBtc();
            } else {
                $(".count").text("倒數" + tt_f + " 秒 更新");
                tt++;
                tt_f--;
            }
            count_back = setTimeout(countb, 1000);
        }
        countb();    
        callBtc();
    // console.log(tt);
    // console.log(tt_f);
    // $("#fiveMin").addClass("active");
});
