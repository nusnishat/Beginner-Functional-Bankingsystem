document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const userEmail = document.getElementById('user-email').value;
    // get user password
    const userPassword = document.getElementById('user-password').value;
    
    if(userEmail == 'nishat@gmail.com' && userPassword == 'nishat')
    {
        window.location.href ='banking.html';
    }
    else
    {
        alert("Email:nishat@gmail.com,Password:nishat");
    }
})