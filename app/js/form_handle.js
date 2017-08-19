'use strict';
$(document).on('submit','form', function(e){
        e.stopPropagation;
        var empty_field = $('<p class="form_error_add">To pole nie może być puste</p>');
        var name_bad_data = $('<p class="form_error_add">Proszę podać swoje Imię i Nazwisko oddzielone spacją</p>');
        var email_bad_data = $('<p class="form_error_add">Proszę podać swój adres email w formacie <strong>abc@xyz.vw</strong></p>');
        var name = $('#inp_name');
        var email = $('#inp_mail');
        var msg = $('#inp_message');
    
        if (name.val() === "") {
            name.addClass("form_error_previous");
            name.after(empty_field);
            return false;
        }
        
        if (name.match(/^[a-zA-Z]\s+[a-zA-Z]$/) === "") {
            name.addClass("form_error_previous");
            name.after(name_bad_data);
            return false;
        }
    
        if (email.val() === "") {
            email.addClass("form_error_previous");
            email.after(empty_field);
            return false;
        } else if (email.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/) ) {
            email.addClass("form_error_previous");
            email.after(email_bad_data);
            return false;
        }
    
        if (msg.val() === "") {
            msg.addClass("form_error_previous");
            msg.after(empty_field);
            return false;
        }
        
        console.log("ogarnelo skrypt");
});