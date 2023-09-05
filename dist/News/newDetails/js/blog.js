import blogs from "./all_blogs.js";



function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}



const id = gup('id', window.location.href)


const currentBlog = blogs.filter((element) => {
    return element.id == id  ;
})


console.log(currentBlog[0]);


document.getElementById('title').innerHTML = currentBlog[0].title;
document.getElementById('image').src = '../assets/img/' + currentBlog[0].img
document.getElementById('content').innerHTML = currentBlog[0].description
