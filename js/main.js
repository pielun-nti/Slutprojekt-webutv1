window.addEventListener('load', (event) => {
    console.log('sidan laddad');
});

function showcase() {
    document.getElementById('showcase').scrollIntoView({
        behavior: 'smooth'
      });
}