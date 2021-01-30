// CLOSE
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup-form").style.display = "none";
    t_error2.style.display = "none";
    s_error2.style.display = "none";
    f_error2.style.display = "none";
    l_error2.style.display = "none";
    em_error2.style.display = "none";
    mob_error2.style.display = "none";
    var textarea = document.getElementById("txt");
    textarea.value=""
    var select = document.getElementById("select");
    select.value="Select enquiry type"
    var input = document.getElementById("first");
    input.value=""
    var lastinput = document.getElementById("last");
    lastinput.value=""
    var email = document.getElementById("email");
    email.value=""
    var mobile = document.getElementById("mobile");
    mobile.value=""
});


// popup
document.getElementById("log-btn").addEventListener("click", function(){
    document.querySelector(".popup-form").style.display = "flex";
    document.querySelector(".step1").style.display = "flex";
    document.querySelector(".step2").style.display = "none";
    document.querySelector(".step3").style.display = "none";
    
});
// page 1
var select = document.forms['form']['select'];
var textarea = document.forms['form']['txt'];

var select_error = document.getElementById('slt');
var s_error = document.querySelector('.icon1')
var s_error2 = document.querySelector('.icon2')
var t_error = document.querySelector('.t-icon1')
var t_error2 = document.querySelector('.t-icon2')
var textarea_error = document.getElementById('sl');



function validate(){
    if (select.value == "Select enquiry type"){
        select.style.border = "1px solid red";
        select_error.style.display = "flex";
        s_error.style.display = "flex";
        s_error2.style.display = "none";
        select.focus();
        return false;
    }
    if (textarea.value.length <= 5){
        textarea.style.border = "1px solid red";
        textarea_error.style.display = "flex";
        t_error.style.display = "flex";
        t_error2.style.display = "none";
        textarea.focus();
        return false;
    }
    else{
        document.getElementById("page-2").addEventListener("click", function(){
            document.querySelector(".step2").style.display = "flex";
            document.querySelector(".step1").style.display = "none"; 
        });
    }
    return false;
}
select.addEventListener('click', s_hide);
textarea.addEventListener('textInput', t_hide);
function s_hide(){
    if (select.value != "Select enquiry type"){
        select.style.border = "1px solid silver";
        select_error.style.display = "none";
        s_error.style.display = "none";
        s_error2.style.display = "flex";
        s_error2.style.margin = "0px 0px -20px 0px";
        return true;
    }
}
function t_hide(){
    if (textarea.value.length >= 5){
        textarea.style.border = "1px solid silver";
        textarea_error.style.display = "none";
        t_error.style.display = "none";
        t_error2.style.display = "flex";
        t_error2.style.margin = "0px 0px -20px 0px";
        return true;
    }
}

// page 2
var first = document.forms['form']['first'];
var last = document.forms['form']['last'];
var email = document.forms['form']['email'];
var mobile = document.forms['form']['mobile'];

var first_error = document.getElementById('fn');
var f_error = document.querySelector('.f-icon1');
var f_error2 = document.querySelector('.f-icon2');

var last_error = document.getElementById('ln');
var l_error = document.querySelector('.l-icon1');
var l_error2 = document.querySelector('.l-icon2');

var mobile_error = document.getElementById('mob');
var mob_error = document.querySelector('.mob-icon1');
var mob_error2 = document.querySelector('.mob-icon2');

function validates(){
    if (first.value.length <= 3){
        first.style.border = "1px solid red";
        first_error.style.display = "flex";
        f_error.style.display = "flex";
        f_error2.style.display = "none";
        return false;
    }
    if (last.value.length <= 3){
        last.style.border = "1px solid red";
        last_error.style.display = "flex";
        l_error.style.display = "flex";
        l_error2.style.display = "none";
        return false;
    }
    if (mobile.value.length <= 9){
        mobile.style.border = "1px solid red";
        mobile_error.style.display = "flex";
        mob_error.style.display = "flex";
        mob_error2.style.display = "none";
        return false;
    }
    else{
        document.getElementById("page-3").addEventListener("click", function(){
    document.querySelector(".step3").style.display = "flex";
    document.querySelector(".step2").style.display = "none";
    document.querySelector(".step1").style.display = "none";
});
    }
    return false;
}
first.addEventListener('textInput', fn_hide);
last.addEventListener('textInput', ln_hide);
mobile.addEventListener('textInput', mob_hide);
function fn_hide(){
    if (first.value.length >= 3){
        first.style.border = "1px solid silver";
        first_error.style.display = "none";
        f_error.style.display = "none";
        f_error2.style.display = "flex";
        f_error2.style.margin = "0px 0px -20px 0px";
        return true;
    }
}
function ln_hide(){
    if (last.value.length >= 5){
        last.style.border = "1px solid silver";
        last_error.style.display = "none";
        l_error.style.display = "none";
        l_error2.style.display = "flex";
        l_error2.style.margin = "0px 0px -20px 0px";
        return true;
    }
}
function mob_hide(){
    if (mobile.value.length >= 9){
        mobile.style.border = "1px solid silver";
        mobile_error.style.display = "none";
        mob_error.style.display = "none";
        mob_error2.style.display = "flex";
        mob_error2.style.margin = "0px 0px -20px 0px";
        return true;
    }
}

// EMAIL
var email_error = document.getElementById('em');
let email_valid = /^[^]+\.[a-z]{2,3}$/;
var em_error = document.querySelector('.em-icon1');
var em_error2 = document.querySelector('.em-icon2');

function check(){
    if (email.value.match(email_valid)){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        em_error.style.display = "none";
        em_error2.style.display = "flex";
        em_error2.style.margin = "0px 0px -20px 0px";
        return true;
    } else {     
        email.style.border = "1px solid red";
        email_error.style.display = "flex";
        em_error.style.display = "flex";
        em_error2.style.display = "none";
        return false;
    }
}
// var checkbox = document.forms['form']['checkbox'];
// var checkb = false;

// for(var i = checkbox.length - 1; i>=0; i--){
//     if(checkbox[i].checked){
//         checkb = true;
//     }
// }
// if(checkb == false){
//     document.getElementById('ch').addEventListener('click', ch_hide)
//     ch_hide.style.display = "flex";
// return false;
// }




document.querySelector(".bt").addEventListener("click", function(){
    document.querySelector(".step2").style.display = "none";
    document.querySelector(".step1").style.display = "flex";
});

