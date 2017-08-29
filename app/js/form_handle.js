'use strict';
/*
$(document).ready(function() {
    //function for handling insertion of error paragraph and class additions
    function errorMessageDisplay (field, message) {
        field.addClass("form_error_previous");
        field.after(message);
        console.log("kurwa kurwa kurwa!")
    }
    
    //function that checkes wheather input name field is empty or mispronounced and inserts error paragraph
    function nameErrorHandler (name, empty_error, reg_exp, count) {
        var name_bad_data = $('<p class="form_error_add err_msg">Proszę podać swoje Imię i Nazwisko oddzielone spacją</p>');
        
        if (name.val() === "") {
            errorMessageDisplay(name, empty_error);
        } else if (reg_exp.test(name.value)) {
            errorMessageDisplay(name, name_bad_data);
        }
    }
    
    //function that checkes wheather input email field is empty or mispronounced and inserts error paragraph
    function emailErrorHandler (email, empty_error, reg_exp, count) {
        var email_bad_data = $('<p class="form_error_add err_msg">Proszę podać swój adres email w formacie <strong>abc@xyz.vw</strong></p>');
        
        if (email.val() === "") {
            errorMessageDisplay(email, empty_error);
        } else if (email.val().match() ) {
            errorMessageDisplay(email, email_bad_data);
        }
    }
    
    //function that checkes if textarea is empty and inserts error paragraph
    function messageErrorHnadler (msg, empty_error) {
        if (msg.val() === "") {
           errorMessageDisplay(msg, empty_error);
        }
    }
    
    $('#form_main_tag').on('submit', function(event){
        var empty_field = $('<p class="form_error_add err_msg">To pole nie może być puste</p>');
        
        var input_name = $('#inp_name');
        var input_email = $('#inp_mail');
        var input_msg = $('#inp_message');
        
        var name_reg_exp = /^[a-zA-Z]\s+[a-zA-Z]*$/;
        var email_reg_exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        
        var test = input_name.value === "" || name_reg_exp.test(input_email.value) || input_email.value === "" || email_reg_exp.test(input_email.value) || input_msg.value === "";
        
        if (!test) {
            nameErrorHandler(input_name, empty_field, name_reg_exp);
            emailErrorHandler(input_email, empty_field, email_reg_exp);
            messageErrorHnadler(input_msg, empty_field);
            event.preventDefault();
        }
    });
});*/

$(document).ready(function() {
    
    //function for validation of email input
    function emailInputStringValidation (input) {
        var val = input.val();
        var afterAt = val.slice(val.indexOf("@")+1);
        var test = val.indexOf("@") <= 0 || val.lastIndexOf("@") === (val.length - 1) || val.indexOf("@") !== val.lastIndexOf("@") || afterAt.length <= 6 || afterAt.indexOf(".") <= 0 || afterAt.lastindexOf(".") === (afterAt.length - 1);
        
        return test? false : true;
    }
    
    //function for displaying empty field error paragraph
    function emptyErrorMessageDisplay (field, event) {
        field.addClass("form_error_previous");
        field.next().next().removeClass("err_invisible");
        event.preventDefault();
    }
    
    //function for displaying wrong field error paragraph
    function wrongErrorMessageDisplay (field, event) {
        field.addClass("form_error_previous");
        field.next().next().next().removeClass("err_invisible");
        event.preventDefault();
    }
    
    //function that checkes wheather input name field is empty or mispronounced and inserts error paragraph
    function nameErrorHandler (name, event) {
        var val = name.val();
        if (val === "") {
            emptyErrorMessageDisplay(name, event);
        } else if (val.indexOf(" ") <= 0 || val.lastIndexOf(" ") === (val.length - 1)) {
            wrongErrorMessageDisplay(name,event);
        }
    }
    
    //function that checkes wheather input email field is empty or mispronounced and inserts error paragraph
    function emailErrorHandler (email, event) {
        if (email.val() === "") {
            emptyErrorMessageDisplay(email, event);
        } else if (!emailInputStringValidation(email)) {
            wrongErrorMessageDisplay(email, event);
        }
    }
    
    //function that checkes if textarea is empty and inserts error paragraph
    function messageErrorHnadler (msg, event) {
        if (msg.val() === "") {
            console.log("jest");
           emptyErrorMessageDisplay(msg, event);
        }
    }
    
    //main function for submit event
    $('#form_main_tag').on('submit', function(event){
        var input_name = $('#inp_name');
        var input_email = $('#inp_mail');
        var input_msg = $('#inp_message');
        
        nameErrorHandler(input_name, event);
        emailErrorHandler(input_email, event);
        messageErrorHnadler(input_msg, event);
    });
    
    //function for focus event
    $('.focus').on('focus', function(event) {
       $(this).next().next().addClass("err_invisible");
        $(this).next().next().next("p").addClass("err_invisible"); 
    });
    
});