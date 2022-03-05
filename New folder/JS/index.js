document.getElementById('submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value
    const userPassword = document.getElementById('user-password').value
        if(userEmail == 'hello@programmingHero.com' && userPassword == 'tanzina' || userEmail == 'sunny@gmail.com' && userPassword == 'sunny' || userEmail == 'seamoon@gmail.com' && userPassword == 'seamoon'){
            window.location.href = 'banking-site.html';
        }
        else{
            
            // const errorMassage = document.getElementById('paragraph')
            // errorMassage.innerText = 'Please enter the valid user Email and Password'

            // const errorShow = document.getElementById('form-container')
            // errorShow.appendChild(errorMassage);

        }
})