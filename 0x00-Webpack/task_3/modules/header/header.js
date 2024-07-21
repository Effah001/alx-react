import $ from 'jquery';
import './header.css';

$(document).ready(function() {
    $('#logo').append('<img src="logo.png" alt="Holberton Logo" />');
    $('header').append('<h1>Holberton Dashboard</h1>');
    console.log('Init header');
});
