logoutBtn.addEventListener('click' , ()=>{
    request('api/v1/logout','POST')
    .then(()=>{
        btns.style.display = 'flex';
        logoutDiv.style.display = 'none';
        navIcons.style.visibility = 'hidden';

    })
    window.location.reload(true)
})