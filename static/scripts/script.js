$(document).ready(function () {

    $(".nav li").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    let interval = 10000;
    let fadeVelocity = 700;
    setInterval(function () {
        var slidesArray = $(".slide-elem");
	    var slidesTextArray = $(".slide-text");
        let i = 0;
        var firstImg = slidesArray.eq(0).attr('src');
        var firstTxt = slidesTextArray.eq(0).text();

        slidesArray.each(function () {
            $(this).fadeOut(fadeVelocity, function(){
                let thisImg = slidesArray.eq(i);
                let thisText = slidesTextArray.eq(i);
                let htmlData = null;
                let text = null;

                if (i > slidesArray.length - 2) {
                    htmlData = firstImg;
                    text = firstTxt;
                } else {
                    htmlData = slidesArray.eq(i + 1).attr('src');
                    text = slidesTextArray.eq(i + 1).text();
                }
            thisImg.attr("src", htmlData);
            thisText.text(text);
        
            $(this).fadeIn(fadeVelocity);
            i++;
            });
        });
    }, interval);

});
