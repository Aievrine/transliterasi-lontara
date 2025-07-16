
var text = '';
if (!$.browser.mozilla) text = 'Perhatian: Peramban Anda bukan Firefox. Mungkin Anda tidak dapat melihat aksara Jawa di halaman ini dengan benar. Silakan baca <a href="http://jv.wikipedia.org/wiki/Pitulung:Aksara_Jawa">halaman bantuan ini</a>';
$('#bd').before('<div>' + text + '</div>');

function init_document() {
    var element = document.getElementById("ta");
    var jv = DoTransliterate(element.value);
    var pre_view_element = document.getElementById("prev_label");
    pre_view_element.innerHTML = jv;
}
function DoPreview() {
    var text = $("#inp_txt").val();
    var trans_text = DoTransliterate(text);
    console.log("Transliterated text:", trans_text);
    $("#prev_label").text(trans_text);
}
function DoAppendTransliteration() {
    var currentText = $("#ta").val();

    var text = $("#inp_txt").val();
    if (text.toLowerCase() == 'clear') {
        /*typing clear in the inputbox is very tempting.. lets write a hack.*/
        $("#inp_txt").val('');
        $("#ta").val('');
        return;
    }
    var trans_text = DoTransliterate(text);
    var finalText = currentText + ' ' + trans_text;
    $("#ta").val(finalText);
    $("#inp_txt").val('');
}
$(document).ready(function () {
    console.log("Document ready, setting up event handlers");
    $('#inp_txt').keydown(function (event) {
        console.log("Keydown event:", event.keyCode);
        if (event.keyCode == '13') {
            console.log("Enter key pressed");
            DoAppendTransliteration();
        }
    });

    $('#inp_txt').keyup(function () {
        console.log("Keyup event");
        var inputVal = $("#inp_txt").val();
        console.log("Input value:", inputVal);
        if (typeof DoTransliterate === "function") {
            console.log("DoTransliterate function is defined");
        } else {
            console.log("DoTransliterate function is NOT defined");
        }
        DoPreview();
    });
    DoPreview();

    // Pop-up functionality
    $('#infoButton').click(function() {
        $('#popup').removeClass('hidden'); // Show the pop-up
    });

    $('#closePopup').click(function() {
        $('#popup').addClass('hidden'); // Hide the pop-up
    });
});
