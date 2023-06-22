let ball = document.getElementById("navBar");
 
        var myVar = setInterval(spostaDiv, 10);
        var margin = 0;
 
        let l = window.screen.width;
        let w = 50;
 
        function spostaDiv() {
            console.log(w);
            if (margin == w) {
                margin = 0 + "%";
            } else {
                ball.style.marginLeft = margin + "%";
            }
            margin += 10;}

           