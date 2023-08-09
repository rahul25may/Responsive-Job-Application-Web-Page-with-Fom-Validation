function setError(id, sn, error) {
    element = document.getElementById(id);
    document.getElementsByClassName('formerror')[sn].innerHTML = error;
}

function validateForm() {
    var returnVal = true;
    var name = document.forms['myForm']["fname"].value;
    if (name.length == 0) {
        setError("name", 0, "*First Name is Required");
        returnVal = false;
    }
    else if (name.length < 3) {
        setError("name", 0, "*First Name is too Short");
        returnVal = false;
    }

    var emaill = document.forms['myForm']["email"].value;
    if (emaill.length == 0) {
        setError("email", 2, "*Email is Required");
        returnVal = false;
    }
    var city = document.forms['myForm']["city"].value;
    if (city.length == 0) {
        setError("city", 5, "*City is Required");
        returnVal = false;
    }
    var pincode = document.forms['myForm']["pincode"].value;
    if (pincode.length < 6) {
        setError("pincode", 6, "*Enter Valid Pincode");
        returnVal = false;
    }

    var fileInput = document.getElementById('upload');
    var filess = fileInput.files;
    if (filess.length == 0) {
        alert("Upload Resume");
        returnVal = false;
    }
    else {
        var fInput = fileInput.value;
        var allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
        if (!allowedExtensions.exec(fInput)) {
            alert('Invalid Resume format');
            returnVal = false;
        }
    }
    return returnVal;
}
