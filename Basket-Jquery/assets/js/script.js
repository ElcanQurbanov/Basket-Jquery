$(document).ready(function () {

    // let elem = document.querySelector("h1")

    let elem = $("h1")

    // console.log(elem.html("Salam").text())

    // $(".check").click(function(){
    //     $(this).css("background-color", "red")
    // })

    // $(".add").click(function(){
    //     $(this).css("background-color", "magenta")
    //     $(this).next().css("background-color", "magenta")
    // })

    $(".hide").click(function(){
        $(".content").slideUp(500)
    })

    // $(".show").click(function(){
    //     $(".content").show(1000, function(){
    //         $(this).css("background-color", "blue")
    //     });
    // })

    // $(".toggle").click(function(){
    //     $(".content").toggle(1000);
    // })

    $(".show").click(function(){
        $(".content").slideDown(500, function(){
            $(this).css("background-color", "blue")
        });
    })

    $(".toggle").click(function(){
        $(".content").slideToggle(500, function(){
            $(this).css("background-color", "blue")
        });
    })



})