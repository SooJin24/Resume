$(document).ready(function(){
    tab();
    // slide();
    designTab();
    popUp();
    menu();
    pfPopUp();
})

function tab(){
    var home = $(".mainMenu > li:first-child");
    var about = $(".mainMenu > li:nth-child(2)");
    var skills = $(".mainMenu > li:nth-child(3)");
    var portfolio = $(".mainMenu > li:nth-child(4)");
    var design = $(".mainMenu > li:nth-child(5)");
    // var contact = $(".mainMenu > li:last-child");
    
    $(".about").slideUp(0);
    $(".skills").slideUp(0);
    $(".portfolio").slideUp(0);
    $(".design").slideUp(0);

    home.on('click',function(){
        $(".about").slideUp(300);
        $(".skills").slideUp(300);
        $(".portfolio").slideUp(300);
        $(".design").slideUp(300);
        $(".home").slideDown(300);
    })

    about.on('click',function(){
        $(".home").slideUp(300);
        $(".skills").slideUp(300);
        $(".portfolio").slideUp(300);
        $(".design").slideUp(300);
        $(".about").slideDown(300);
    })

    skills.on('click',function(){
        $(".home").slideUp(300);
        $(".about").slideUp(300);
        $(".portfolio").slideUp(300);
        $(".design").slideUp(300);
        $(".skills").slideDown(300);
    })

    portfolio.on('click',function(){
        $(".home").slideUp(300);
        $(".about").slideUp(300);
        $(".skills").slideUp(300);
        $(".design").slideUp(300);
        $(".portfolio").slideDown(300);
    })

    design.on('click',function(){
        $(".home").slideUp(300);
        $(".about").slideUp(300);
        $(".skills").slideUp(300);
        $(".portfolio").slideUp(300);
        $(".design").slideDown(300);
    })
    
}

// function slide(){
//     var prev = $(".prevBtn");
//     var next = $(".nextBtn");

//     $(".portfolioList > li:last-child").fadeOut(0);

//     prev.on('click',function(){
//         $(".portfolioList > li:first-child").fadeOut(300);
//         $(".portfolioList > li:last-child").fadeIn(300);
//     })

//     next.on('click',function(){
//         $(".portfolioList > li:first-child").fadeOut(300);
//         $(".portfolioList > li:last-child").fadeIn(300);
//     })
// }

function designTab(){
    var ps = $(".tabMenu > li:first-child");
    var ai = $(".tabMenu > li:last-child");

    $(".designAi").fadeOut(0);

    ps.on('click',function(){
        $(".designAi").fadeOut(300);
        $(".designPs").fadeIn(300);
    })

    ai.on('click',function(){
        $(".designPs").fadeOut(300);
        $(".designAi").fadeIn(300);
    })
}

function popUp(){
    var popUp = $(".popUpContainer");

    popUp.hide(0);

    $(".designPs > li").on('click',function(){
        $(".designAi01").hide(0);
        $(".designAi02").hide(0);
        $(".designAi03").hide(0);
        $(".designAi04").hide(0);
        $(".designAi05").hide(0);
    })

    $(".designPs > li:first-child").on('click',function(){
        $(".designPs02").hide(0);
        $(".designPs03").hide(0);
        $(".designPs04").hide(0);
        popUp.show(300);
        $(".designPs01").show(300);
    })

    $(".designPs > li:nth-child(2)").on('click',function(){
        $(".designPs01").hide(0);
        $(".designPs03").hide(0);
        $(".designPs04").hide(0);
        popUp.show(300);
        $(".designPs02").show(300);
    })

    $(".designPs > li:nth-child(3)").on('click',function(){
        $(".designPs01").hide(0);
        $(".designPs02").hide(0);
        $(".designPs04").hide(0);
        popUp.show(300);
        $(".designPs03").show(300);
    })

    $(".designPs > li:last-child").on('click',function(){
        $(".designPs01").hide(0);
        $(".designPs02").hide(0);
        $(".designPs03").hide(0);
        popUp.show(300);
        $(".designPs04").show(300);
    })

    $(".designAi > li").on('click',function(){
        $(".designPs01").hide(0);
        $(".designPs02").hide(0);
        $(".designPs03").hide(0);
        $(".designPs04").hide(0);
    })

    $(".designAi > li:first-child").on('click',function(){
        $(".designAi02").hide(0);
        $(".designAi03").hide(0);
        $(".designAi04").hide(0);
        $(".designAi05").hide(0);
        popUp.show(300);
        $(".designAi01").show(300);
    })

    $(".designAi > li:nth-child(2)").on('click',function(){
        $(".designAi01").hide(0);
        $(".designAi03").hide(0);
        $(".designAi04").hide(0);
        $(".designAi05").hide(0);
        popUp.show(300);
        $(".designAi02").show(300);
    })

    $(".designAi > li:nth-child(3)").on('click',function(){
        $(".designAi01").hide(0);
        $(".designAi02").hide(0);
        $(".designAi04").hide(0);
        $(".designAi05").hide(0);
        popUp.show(300);
        $(".designAi03").show(300);
    })

    $(".designAi > li:nth-child(4)").on('click',function(){
        $(".designAi01").hide(0);
        $(".designAi02").hide(0);
        $(".designAi03").hide(0);
        $(".designAi05").hide(0);
        popUp.show(300);
        $(".designAi04").show(300);
    })

    $(".designAi > li:last-child").on('click',function(){
        $(".designAi01").hide(0);
        $(".designAi02").hide(0);
        $(".designAi03").hide(0);
        $(".designAi04").hide(0);
        popUp.show(300);
        $(".designAi05").show(300);
    })

    $(".closeBtn").on('click',function(){
        popUp.hide(200)
    })
}

// function menu(){
//     var windowWidth = $(window).width();
//     var ham = $(".gnb > a");

//     ham.re
// }

// function menu(){
//     var menu = $(".mainMenu");

//     menu.hide(0);

//     $(".menuMore").on('mouseover',function(){
//         menu.stop().slideDown(200)
//     })

//     menu.on('mouseleave',function(){
//         menu.stop().slideUp(200)
//     })
// }

function menu(){
    var windowWidth = $(window).width();
    var ham = $(".menuMore");
    var menu = $(".mainMenu");

    if(windowWidth < 1000)
    {menu.slideUp(0);
     ham.show(0);
     ham.on('click',function(){
        menu.stop().slideDown(200);
     });
     menu.on('click mouseleave',function(){
        menu.stop().slideUp(200)
     })}
    else{
        ham.hide(0);
        menu.show(0);
    }
}

function pfPopUp(){
    $(".pfPopUpContainer").fadeOut(0);
    // $(".pfInfo01").hide(0);
    // $(".pfInfo02").hide(0);

    $(".libraryInfo").on('click',function(){
        $(".pfPopUpContainer").fadeIn(200);
        $(".pfInfo02").fadeOut(0);
        $(".pfInfo01").fadeIn(200);
    })

    $(".cookatInfo").on('click',function(){
        $(".pfPopUpContainer").fadeIn(200);
        $(".pfInfo01").fadeOut(0);
        $(".pfInfo02").fadeIn(200);
    })

    $(".pfCloseBtn").on('click',function(){
        $(".pfPopUpContainer").fadeOut(200);
    })
}