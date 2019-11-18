$(document).ready(function(){
    $("#submit").on('click', function(){
        $.ajax({
            method: "POST",
            url: "/submit",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            }
        });
    });
});