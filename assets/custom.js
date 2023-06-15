$(document).on("click", ".tabs", function (e) {
    e.preventDefault();
    console.log("Tabsss");

    var value = $(this).attr('href');
    console.log(value);
    $('.collection_product.active').removeClass('active ');
    $(value).addClass('active ');

    $('.tabs.code-current').removeClass('code-current');
    $(this).addClass('code-current');
});