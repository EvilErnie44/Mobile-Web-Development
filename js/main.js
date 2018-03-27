$(window).resize(function() {
    if ($(window).width() >= 500) $('.carSpecListL').addClass("carSpecListR");
    else $('.carSpecListL').removeClass("carSpecListR");
});

$(window).resize(function() {
    if ($(window).width() >= 500) $('.carAdImgRight').addClass("carAdImg");
    else $('.carAdImgRight').removeClass("carAdImg");
});

$(window).resize(function() {
    if ($(window).width() >= 500) $('.addBox2').addClass("addBoxBreak");
    else $('.addBox2').removeClass("addBoxBreak");
});
