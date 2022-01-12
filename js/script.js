function validateForm() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
    var txt = document.getElementById("password");
    if (!regex.test(txt.value)) {
        alert("The password should contain at least one digit, at least one lower case, and at least one upper case and at least 8 characters");
        return false;
    } else {
        return true;
    }
}


/*Order script*/
var radios = document.getElementsByName("order");
document.getElementById('daddress').disabled = true;
document.getElementById('baddress').disabled = true;
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        var val = this.value;
        if (val == 'delivery') {
            document.getElementById('daddress').disabled = false;
            document.getElementById('baddress').disabled = false;
        }
        else if (val == 'pickup') {
            document.getElementById('daddress').disabled = true;
            document.getElementById('baddress').disabled = true;
        }

    }
}
function copy(e) {
    var daddress = document.getElementById("daddress");
    var baddress = document.getElementById("baddress");
    var checked = document.getElementById("duplicate").checked;

    /* Just makes sense to not duplicate it on uncheck, but you can remove this if statement */
    if (checked) {
        if (daddress.value) {
            baddress.value = daddress.value;
        } else {
            alert('Please enter your delivery address first!');
            e.preventDefault(); // Stops checkbox from becoming checked.
        }
    }
}

function validateTel() {
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var txt = document.getElementById("tel");
    if (!regex.test(txt.value)) {
        alert("Your phone number is not incorrect format");
        return false;
    } else {
        return true;
    }
}

$(".cardInput").hide();

$('input:radio[name=cardtype]').click(function () {

    $("input:text[name=cardnum]").val("");
    $(".cardInput").show();

    var ml = $(this).attr("data-maxLength");

    $("input:text[name=cardnum]").attr("maxlength", ml);

});

