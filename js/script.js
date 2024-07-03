'use strict';

$(document).ready(function() {
    $('#register').click(function(event) {
        let isValid = true;

        if ($('#fname').val().trim() === '') {
            $('#fname-error').text('First name is required');
            isValid = false;
        } else {
            $('#fname-error').text('');
        }

        // Email validation
        if ($('#email').val().trim() === '') {
            $('#email-error').text('Email is required');
            isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test($('#email').val().trim())) {
            $('#email-error').text('Enter a valid email');
            isValid = false;
        } else {
            $('#email-error').text('');
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;
        if (!passwordRegex.test($('#password').val().trim())) {
            $('#password-error').text('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            isValid = false;
        } else {
            $('#password-error').text('');
        }

        // Confirm password validation
        if ($('#cpass').val().trim() !== $('#password').val().trim()) {
            $('#cpass-error').text('Passwords do not match');
            isValid = false;
        } else {
            $('#cpass-error').text('');
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            window.location.href = "joke/j_index.html";
        }
        $(document).keypress(function(e) {
            if (e.which === 13) {
                $('#register').click();
            }
        });
    });
});


