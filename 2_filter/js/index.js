$(function() {

    // var limit = new Number(null);
    // var offset = new Number(null);
    // var keyword = "";
    // var q = '{"' + jsonSelect + '":"' + keyword + '"}';
    var api = "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97";
    var url_ = api;

    /********
     * function:列印option
     * update:20180614
     * developer:King Tzeng
     ********/
    dist.forEach(function(dData) {
        let distName = dData.distName;
        let distID = dData.distID;
        $("#dist_select").append('<option id="' + distID + '" value="' + distName + '">' + distName + '</option>');
    });
    //-------
    /********
     * function:select option
     * update:20180617
     * developer:King Tzeng
     ********/
    $("#dist_select").change(function() {
        var distSele = $("#dist_select option:selected").val();
        // console.log(distSele);
        var jsonSelect = "Zone";
        var keyword = distSele;
        var q = '{"' + jsonSelect + '":"' + keyword + '"}';
        url_ = api + "&q=" + q;
        send_ajax();
    });
    //-------
    /********
     * function:列印Class option
     * update:20180617
     * developer:King Tzeng
     ********/
    funclass.forEach(function(fData) {
        let funClass = fData.funClass;
        let funNum = fData.funNum;
        $("#fun_select").append('<option id="' + funNum + '" value="' + funNum + '">' + funClass + '</option>');
    });
    //-------
    /********
     * function:select option
     * update:20180617
     * developer:King Tzeng
     ********/
    $("#fun_select").change(function() {
        var funSele = $("#fun_select option:selected").val();
        // console.log(funSele);
        var jsonSelect = "Class1";
        var keyword = funSele;
        var q = '{"' + jsonSelect + '":"' + keyword + '"}';
        url_ = api + "&q=" + q;
        send_ajax();
    });
    //-------
    // if( keyword == ""){
    //     q = '';
    // }
    // console.log(dist);
    // console.log(limit);
    // if( limit == 0){
    //     url_ = api + q +"";
    // }else{
    //     var url_ = api + q + "&limit=" + limit + "";
    // }
    // console.log(q);
    // var PostStr = ;
    // console.log(PostStr);
    // var PostStr = {"offset":offset, "q":q};
    $("#search").click(function() {
        var queryString = $("#querySearch").val();
        var q = queryString;
        url_ = api + "&q=" + q;
        send_ajax();
    });

    send_ajax();

    function send_ajax() {
        $("#place_res").empty();
        $("#data_num").empty();
        $.ajax({
            url: url_,
            type: "POST",
            // data:{"QAQ":q},
            success: function(data) {
                // console.log(data);
                data = data;
                // console.log(data);
                // parseJSON = $.parseJSON(data);
                dataStatus = data.success;
                // console.log(parseJSON);
                // console.log(typeof(dataStatus));
                if (dataStatus === true) {
                    dataDetail = data.result.records;
                    dataTotal = data.result.total;
                    dataLen = dataDetail.length;
                    // console.log(dataLen);
                    $("#data_num").append(dataTotal);
                    if (dataLen === 0) {
                        $("#place_res").text("目前尚無資料，請重新搜尋！");
                        $("#data_num").append("0");
                    } else {
                        //forEach迴圈
                        dataDetail.forEach(function(d) {
                            dataImg = d.Picture1;
                            dataName = d.Name;
                            dataDescription = d.Description;
                            dataZone = d.Zone;
                            dataOpentime = d.Opentime;
                            dataTicketinfo = d.Ticketinfo;
                            if (dataTicketinfo === "") {
                                dataTicketinfo = "尚無價錢資料";
                            } else {
                                dataTicketinfo = d.Ticketinfo;
                                // console.log(dataTicketinfo);
                                // console.log(d.Ticketinfo);
                            }
                            $("#place_res").append('<div class="card mb-3"><img class="card-img-top" src="' + dataImg + '"><div class="card-body"><h5 class="card-title">' + dataName + '</h5><p class="card-text text-line3">' + dataDescription + '</p><p class="card-text"><small class="text-muted"><i class="fas fa-map-marker-alt"></i> ' + dataZone + '</small><small class="text-muted"><i class="far fa-credit-card"></i> ' + dataTicketinfo + '</small><small class="text-muted"><i class="fas fa-info-circle"></i> ' + dataOpentime + '</small></p></div></div>');
                            /********
                             * function:暫時command
                             * update:
                             * developer:King Tzeng
                             ********/
                            // if( dataTicketinfo != d.Ticketinfo){
                            //     $("#badgeAlret").append('<div class="badge-area" id="badgeAlret"><span class="badge badge-pill border border-warning">'+dataTicketinfo+'<span class="badge badge-light"><button type="button">X</button></span></span></div>');
                            // }
                            //----------------
                            // console.log(dataImg);
                            // console.log(dataName);
                            // console.log(dataDescription);
                            // console.log(dataZone);
                            // console.log(dataOpentime);
                        });
                    }

                    // forEach end
                    // console.log(dataDetail);
                } else {
                    // console.log("API Error");
                }
                // $("body").append(parseJSON);

            },
            error: function(data) {
                // console.log(data);
            },
            complete: function(data) {
                // console.log(data);
            }
        });
        // console.log(url_);
    }

});
