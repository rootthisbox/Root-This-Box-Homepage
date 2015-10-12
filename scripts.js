document.addEventListener("DOMContentLoaded", function() {
    var rulesMenu = document.getElementById("rulesMenu");
    var contactMenu = document.getElementById("contactMenu");
    var aboutMenu = document.getElementById("aboutMenu");
    var rules = document.getElementById("rules");
    var about = document.getElementById("about");
    
    //Show / hide rules
    rulesMenu.addEventListener('click',function(){
        about.style.display  = 'none';
        if(rules.style.display == 'none' || rules.style.display == '' )
        {
            rules.style.display = 'block';
        }
        else
        {
            rules.style.display = 'none';
        }
    });    
    
    //Show / hide about
    aboutMenu.addEventListener('click',function(){
        rules.style.display  = 'none';
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
