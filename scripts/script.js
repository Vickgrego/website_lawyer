$(document).ready(function () {

    $(".nav li").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    var interval = 7000;
    var fadeVelocity = 500;

    setInterval(function () {

        var slidesArray = $(".slide-elem");
        var i = 0;
        var tempArray = [];
        var firstHtml = slidesArray.eq(0).html();

        slidesArray.each(function () {
		var htmlData = null;
		$(this).fadeOut(fadeVelocity, function(){
			 if (i > slidesArray.length - 2) {
				htmlData = firstHtml;
			    } else {
				htmlData = slidesArray.eq(i + 1).html();
			    }
            $(this).html(htmlData);
		$(this).fadeIn(fadeVelocity);
            i++;
		
		});
            //slidesArray.length - 2, coz we have slidesArray.eq(i+1)
   


        });

    }, interval);

    
    //funct to scroll to the section
    var headerHeight = $("#HeaderNavbar").height(); //detach height of nav in scrollTop
    //alert(headerHeight);
    
    $(document).on('click', 'a', function (event) {
        //event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
        }, 700);
    });

});

//Google map
function showMap() {
    var mapOptions = {
        center: new google.maps.LatLng(48.3049343, 25.9401218),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var map = new google.maps.Map(document.getElementById("g-map"), mapOptions);
}
