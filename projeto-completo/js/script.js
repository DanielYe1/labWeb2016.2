function gotoExcursoes() {
    alert('here');
    $('#solTitle a').click(function(evt) {
        evt.preventDefault();
        alert('here in');
        var divId = 'summary' + $(this).attr('id');

        document.getElementById(divId).className = '';

    });
}