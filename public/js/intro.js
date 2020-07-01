const sectionIds = ["about", "prototype", "plus"];


function showSection(id){
    for(let s of sectionIds){
        document.getElementById(s).classList.add("hidden");
    }
    document.getElementById(id).classList.toggle("hidden");
}

showSection("about") 

