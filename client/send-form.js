$(document).ready(function(){
    $("#submit").on('click', function(){
        $.ajax({
            method: "POST",
            url: "/submit",
            data: $('#test-form').serialize()
        });
    });
});