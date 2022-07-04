const formCreatedAlbum = document.querySelector(".created")
const buttonCreatedAlbum = document.querySelector("input[value='Créer']")

if(formCreatedAlbum.value){
    console.log(buttonCreatedAlbum);
    buttonCreatedAlbum.className = ""
}

else {
    buttonCreatedAlbum.className = "blocage"
}

formCreatedAlbum.addEventListener("keyup", () => {

    if(formCreatedAlbum.value){
        console.log(buttonCreatedAlbum);
        buttonCreatedAlbum.className = ""
    }
    
    else {
        buttonCreatedAlbum.className = "blocage"
    }

})