var checkDiv = setInterval(function () {

    var my_div_width = $("#mytextarea").width(); // find width

    if (my_div_width > 0) {
        clearInterval(checkDiv);
        aTestFunction();
    }
}, 10); // check after 10ms every time

function aTestFunction() {
    tinymce.init({
        selector: '#mytextarea'
    });
}


