// create a login form validation

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let pass = document.querySelector('#pass').value;
    let cs = document.querySelector('#cs').value;
    if (name == '' || pass == '' || cs == '') {
        alert('All fields are required');
    } else if (pass != cs) {
        alert('password does not match');
    } else {
        alert('Login successful');
    }
});