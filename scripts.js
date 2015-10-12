document.addEventListener("DOMContentLoaded", function() {
    var rulesMenu = document.getElementById("rulesMenu");
    var contactMenu = document.getElementById("contactMenu");
    var aboutMenu = document.getElementById("aboutMenu");
    var rules = document.getElementById("rules");
    var about = document.getElementById("about");
    
    rulesMenu.addEventListener('click',function(){
        if(rules.style.display == 'none' || rules.style.display == '' )
        {
            rules.style.display = 'block';
        }
        else
        {
            rules.style.display = 'none';
        }
    });    
    
    aboutMenu.addEventListener('click',function(){
        console.log('click!');
        if(about.style.display == 'none' || about.style.display == '' )
        {
            about.style.display = 'block';
        }
        else
        {
            about.style.display = 'none';
        }
    });
});