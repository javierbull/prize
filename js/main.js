"use strict";

$(document).ready(function () {
    const $togglePassword = $('#toggle-password');
    const $passwordInput = $('#user-password');

    $togglePassword.on('click', function () {
        const isPassword = $passwordInput.attr('type') === 'password';
        $passwordInput.attr('type', isPassword ? 'text' : 'password');
        $togglePassword.attr('name', isPassword ? 'eye-off-outline' : 'eye-outline');
    });
});
