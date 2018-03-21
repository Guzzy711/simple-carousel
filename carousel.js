$(document)
    .ready(function () {
        console.log("Yay, JQuery is loaded!");

        $imgArray = $(".carousel-img").map(function () {
            return $(this).attr("src");
        });

        console.log($imgArray);
        $arrayLength = $imgArray.length;
        $('#next').click(function () {
            $productPicture = $(".product-image").attr("src");

        });
        $('.carousel-img').click(function () {
            $img = this;
            $src = $($img).attr('src');
            console.log($src);
            $(".product-image").attr("src", $src);
        });


    });