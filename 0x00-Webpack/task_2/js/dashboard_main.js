import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const countParagraph = $('<p>').attr('id', 'count');
    const paragraph3 = $('<p>').text('Copyright - Holberton School');

    $('body').append(paragraph1, paragraph2, button, countParagraph, paragraph3);

    button.on('click', _.debounce(updateCounter, 600));
});
