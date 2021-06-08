function submitEmail(inputText) {
    var mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var failed = document.getElementById('failed');
    var mail = document.getElementById('email');

    if(inputText.value.match(mailformat)) {
        failed.innerText = null;
        mail.style.outline = null;
        alert('You subscribed with your email ' + mail.value + ' to recieve tips on our website!');
        return true;
    }else {
        failed.innerText = "Please insert valid email address";
        mail.style.outline = '1px solid red';
        document.form.email.focus();
        return false;
    }
}
