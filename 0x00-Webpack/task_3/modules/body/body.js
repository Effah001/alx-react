import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const countParagraph = $('<p id="count"></p>');

    const updateCounter = _.debounce(() => {
        const count = parseInt($('#count').text().split(' ')[0] || '0', 10) + 1;
        $('#count').text(`${count} clicks on the button`);
    }, 500);

    button.on('click', updateCounter);

    $('body').append(paragraph1, paragraph2, button, countParagraph);
});
