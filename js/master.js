let temp = document.getElementsByClassName('hello')[0]
let temp1 = document.getElementsByClassName('welcome')[0]
let temp2 = document.getElementsByClassName('signUp-sec')[0]
let temp3 = document.getElementsByClassName('signIn-sec')[0]


document.getElementById('W-btn').addEventListener('click', function() {


    temp.style.transform = 'translateY(0%)'

    temp1.style.transform = 'translateY(0%)'

    temp2.style.transform = 'translateY(-100%)'

    temp3.style.transform = 'translateY(-100%)'
})

document.getElementById('H-btn').addEventListener('click', function() {

    temp.style.transform = 'translateY(-100%)'
    temp1.style.transform = 'translateY(-100%)'
    temp2.style.transform = 'translateY(0%)'
    temp3.style.transform = 'translateY(0%)'
})

let i = 1



function myAuth() {
    let flag = 0
    let user = document.forms['form']['user'].value
    let _email = document.forms['form']['email'].value
    let password = document.forms['form']['password'].value
    let confirmPasswords = document.forms['form']['confirm-password'].value

    if (user == '') {
        document.getElementById('user-span').innerHTML = "Username Is Required. Please Enter Your Response."
        document.getElementById('user-span').classList.add('span-style1')
    } else {
        document.getElementById('user-span').innerHTML = ""
    }
    if (_email == '') {
        document.getElementById('email-span').innerHTML = "Email Is Required. Please Enter Your Response."
        document.getElementById('email-span').classList.add('span-style1')
    } else {
        document.getElementById('email-span').innerHTML = ""
    }




    if (
        (((_email.match(/@/g)) == null)) ||
        ((_email.match(/@/g)).length >= 2) ||
        ((_email.search(/@/)) < 4)

    ) {
        document.getElementById('email-span').innerHTML = "Email is invalid ."
        document.getElementById('email-span').classList.add('span-style1')
        flag++
    } else {
        document.getElementById('email-span').innerHTML = "valid"
        document.getElementById('email-span').classList.add('span-style2')

    }


    if (
        (password.search(/[!@#$%^&*()|]/) == -1) ||
        (password.length < 6) ||
        (password.search(/[A-Z]/) == -1)
    ) {
        document.getElementById('pass-span').innerHTML = "Password Is Invalid ."
        document.getElementById('pass-span').classList.add('span-style1')
        flag++
    } else {
        document.getElementById('pass-span').innerHTML = "valid"
        document.getElementById('pass-span').classList.add('span-style2')
    }


    if (
        (confirmPasswords.search(/[!@#$%^&*()|]/) == -1) ||
        (confirmPasswords.length < 6) ||
        (confirmPasswords.search(/[A-Z]/) == -1)
    ) {
        document.getElementById('conpass-span').innerHTML = "Password Is Invalid ."
        document.getElementById('conpass-span').classList.add('span-style1')
        flag++
    } else {
        document.getElementById('conpass-span').innerHTML = "valid"
        document.getElementById('conpass-span').classList.add('span-style2')
    }





    if (password != confirmPasswords) {
        document.getElementById('conpass-span').innerHTML = "Confirm Password Does Not Match ."
        document.getElementById('conpass-span').classList.add('span-style1')
    } else {
        document.getElementById('conpass-span').innerHTML = 'Password Is Invalid .'
        document.getElementById('conpass-span').classList.add('span-style1')
    }

    if (flag != 0) {
        return false
    }
}

function myAuth1() {
    let flag = 0
    let user = document.forms['form1']['user'].value
    let password = document.forms['form1']['password'].value
    if (user == '') {
        document.getElementById('user1-span').innerHTML = "Username Is Required. Please Enter Your Response."
        document.getElementById('user1-span').classList.add('span-style1')
        flag++
    } else {
        document.getElementById('user1-span').innerHTML = ""
    }
    if (
        (password.search(/[!@#$%^&*()|]/) == -1) ||
        (password.length < 6) ||
        (password.search(/[A-Z]/) == -1)
    ) {
        document.getElementById('pass1-span').innerHTML = "Password Is Invalid ."
        document.getElementById('pass1-span').classList.add('span-style1')
        flag++
    } else {
        document.getElementById('pass1-span').innerHTML = "valid"
        document.getElementById('pass1-span').classList.add('span-style2')
    }
    if (flag != 0) {
        return false
    }
}

function _iconClick(x) {
    if (i % 2) {
        x.classList.replace('fa-eye-slash', 'fa-eye')
        x.parentElement.previousElementSibling.setAttribute('type', 'text')

    } else {
        x.classList.add('fa-eye-slash')
        x.parentElement.previousElementSibling.setAttribute('type', 'password')

    }
    i++


}

function _iconClick1(x) {
    if (i % 2) {
        x.classList.replace('fa-eye-slash', 'fa-eye')
        x.parentElement.previousElementSibling.setAttribute('type', 'text')
    } else {
        x.classList.add('fa-eye-slash')
        x.parentElement.previousElementSibling.setAttribute('type', 'password')
    }
    i++


}