$(document).ready(function () {
    var clickCount = 1;
    $('.num').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        if (clickCount > 10) {
            return;
        }
        var telNumber = $('#pin' + clickCount + '');
        $(telNumber).val(text);
        clickCount++;
    });
    $('.cancelBtn').click(function (e) {
        if ($('#pin1').val() == "") {
            window.location.href = $('.cancelBtn').href();
        }
        for (var i = 1; i < 11; i++) {
            $('#pin' + i + '').val('');
        }
        clickCount = 0;
        e.preventDefault();
    });
});