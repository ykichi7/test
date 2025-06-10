$(function () {
    $('#js-hamburger-menu').on('click', function () {
        $('.hambager').toggleClass('open');
        $('#g-nav').toggleClass('panelactive');
        if ($(this).hasClass('open')) {
            $('body').addClass('no-scroll'); // スクロールを無効化
        } else {
            $('body').removeClass('no-scroll'); // スクロールを有効化
        }
    });
    $('#g-nav').on('click', function () {
        $('.hambager').removeClass('open');
        $('#g-nav').removeClass('panelactive');
         $('body').removeClass('no-scroll'); // スクロールを有効化
    });
});