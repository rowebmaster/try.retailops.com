! function () {
    "use strict";

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'swing');
    });

}(jQuery);
$(document).ready(function () {
    // Submit the form action
    $('form').submit(function (e) {
        e.preventDefault();
        var $button = $(this).find('.submit');
        $button.attr("disabled", true).text("Submitting...")
        var action = $(this).attr("action");
        var redirect = $(this).attr("redirect");

        var $data = $( this ).serialize();
        // construct an HTTP request
        var xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://forms.hubspot.com/uploads/form/v2/530512/5d212505-d1cc-4e01-9078-1dfa5820ca8e",
            true
        );
        xhr.onerror = function () {
            window.location.href = "/thank-you"
        };
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        // send the collected data as JSON
        xhr.send($data)
        xhr.onload = function () {
            window.location.href = "/thank-you"
        };
    })
});