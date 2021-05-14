$( document ).ready(function() {

    var images = [
        "./img/lnews0.jpg",
        "./img/lnews1.jpg",
        "./img/lnews2.jpg"    
    ];

    var imageIndex = 0;

    $("#pre").on("click", function(){          
        imageIndex = (imageIndex + images.length -1) % (images.length);    
        $("#image").attr('src', images[imageIndex]);
    });

    $("#next").on("click", function(){  
        imageIndex = (imageIndex+1) % (images.length);    
        $("#image").attr('src', images[imageIndex]);
    });

    $("#image").attr(images[0]);

});