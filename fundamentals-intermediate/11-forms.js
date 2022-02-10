 let form = document.getElementById('user-form');


 form.addEventListener('submit', event =>{
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    event.defaultPrevented();
 });