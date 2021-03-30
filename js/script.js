
        let btn = document.querySelector("button");
        let date = document.getElementById("date");
        let smji = document.getElementById("smji");
        let kripalu1 = document.getElementById('kripalu1')
        let kripalu2 = document.getElementById('kripalu2')
        setInterval(time,1000);
        function time(){
            date.innerHTML = new Date(); 
        };
        
        date.style.display = "none";
        btn.addEventListener("click",timeshow);
        kripalu2.style.display = 'none';
        function timeshow() {
            
            if (date.style.display === "none")
            {date.style.display = 'block';
            btn.innerHTML = "Hide time";
            smji.innerHTML = "Now he have seen the time and he is saying to hide the time. Please click below to hide the time.";
            kripalu1.style.display = "none";
            kripalu2.style.display = 'block';
        }
            else{
                date.style.display = "none";
                btn.innerHTML = "Display time";
                smji.innerHTML = "Shri Maharajji wants to know the time.Click below to know the time now?";
                kripalu1.style.display = "block";
            kripalu2.style.display = 'none';
            }
            
        }

    