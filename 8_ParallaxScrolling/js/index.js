function parallax() {
    $(window).scroll(function() {
        var winScrollH = $(window).scrollTop();
        var windowH = $(window).height();
        var docH = $(document).height();
        var scrolled = (winScrollH / (docH - windowH)) * 100;
        console.log(scrolled);
        // console.log(winScrollH);
        // : ;rotate(20)
        scale = 1 + scrolled * 0.8;
        // $(".triangle").css("transform","rotate("+winScrollH+"deg)");
        $(".rectangle").css("transform", "scale(" + scale + ")");
        //----index----
        if (scrolled >= 2) {
            circularScale = 1 + scrolled * 0.9;
            tScale = 1 + scrolled * 0.9;
            // console.log(circularScale);
            $(".circular").css("transform", "scale(" + circularScale + ")");
            $(".triangle").css("transform", "scale(" + tScale + ")");
            if (scrolled >= 3) {
                tScale = 1 + scrolled * 1.5;
                $(".triangle").css("transform", "scale(" + tScale + ")");
            }
        } else if (scrolled >= 1.5) {
            $(".circular").css("transform", "scale(" + (1 + scale) + ")");
            $(".triangle").css("transform", "scale(" + (1 + scale) + ")");
        } else {
            $(".circular").css("transform", "scale(1)");
            $(".triangle").css("transform", "scale(1)");
        }
        if (scrolled > 9) {
            console.log("msg");
            $(".circular").css("transform", "scale(1)");
            $(".triangle").css("transform", "scale(1)");
            $(".rectangle").css("transform", "scale(1)");
        }
        //----s2----
        if (scrolled > 11) {
            $("#s2").css("margin-left", "0");
        } else {
            $("#s2").css("margin-left", "100%");
        }
        if (scrolled > 31.5 || scrolled < 11) {
            $("#s2").css("transform", "scale(1)");
        } else if (scrolled > 17) {
            $("#s2").css("transform", "scale(" + scrolled * 0.3 + "," + (scrolled * 0.3) + ")");
        }
        //----s3----
        if (scrolled > 47 || scrolled < 33) {
            $("#s3").css({ "margin-left": "0", "margin-top": "0", "transform":"scale(1)"});
        } else if (scrolled > 37) {
            $("#s3").css("transform", "scale(" + scrolled * 0.3 + "," + (scrolled * 0.3) + ")");
        } else if (scrolled > 33) {
            $("#s3").css({ "margin-left": "0", "margin-top": "0%" });
        } else {
            $("#s3").css({ "margin-left": "100%", "margin-top": "0" });
        }
        //----s4----
        if (scrolled > 50 || scrolled < 43) {
            $("#s4").css({ "margin-left": "0", "margin-top": "0", "transform":"scale(1)"});
        } else if (scrolled > 44) {
            $("#s4").css("transform", "scale(" + scrolled * 0.3 + "," + (scrolled * 0.3) + ")");
        } else if (scrolled > 43) {
            $("#s4").css({ "margin-left": "0", "margin-top": "0%" });
        } else {
            $("#s4").css({ "margin-left": "100%", "margin-top": "0" });
        }
    });
}
