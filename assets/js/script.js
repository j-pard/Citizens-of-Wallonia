( () => {

    // NAVBAR

let content= document.querySelector('#menu-content');
let sidebarBody= document.querySelector("#menu-side-body");
let button= document.querySelector("#menu-button");
let overlay= document.querySelector("#menu-overlay");
let activateclass= 'menu-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener("click", function(e){
    e.preventDefault();

    this.parentNode.classList.add(activateclass);
});

button.addEventListener('keydown', function(e){
    if(this.parentNode.classList.contains(activateclass)){
        if(e.repeat === false && e.which===27){
            this.parentNode.classList.remove(activateclass);
        }
    }
});


overlay.addEventListener("click", function(e){
    e.preventDefault();
    this.parentNode.classList.remove(activateclass);
});
})();


