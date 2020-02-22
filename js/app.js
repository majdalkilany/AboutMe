            'use strict';

            var Name = prompt("Enter your Name?");
            // console.log(" your Name is " + Name);
            alert("please   " + Name + "make your all answer Yes or No");
            var KnewMe = prompt("Hello  " + Name + "  Do You Knew Me ?").toLowerCase();
            // console.log("Its convaret to Upper  Case + " + KnewMe);

            var score = 0;


            switch (KnewMe) {
                case "yes":
                case "y":
                    alert("lets Knew How Much Do You Knew About Me ");
                    score = score + 1;
                    console.log(score)
                    break;
                case "no":
                case "n":
                    alert("try To answer some qoustion ? ");
                    break;
            }
            var age = prompt("Are you older than me  ");;
            var Newage = age.toLowerCase();

            // console.log("Its convaret to lower Case + " + Newage);



            switch (Newage) {
                case "yes":
                case "y":
                    alert("You are so old   ");
                    score = score + 1;
                    console.log(score)

                    break;
                case "no":
                case "n":
                    alert("You still Young");
                    break;
            }
            var major = prompt("DO You Knew what is my Universty Major");
            major.toLowerCase();

            // console.log("Its convaret to lower Case " + major);



            switch (major) {
                case "yes":
                case "y":
                    alert("Yes Im Civil Engineer Nice You Knew alot about me");
                    score = score + 1;
                    console.log(score)

                    break;
                case "no":
                case "n":
                    alert("No I am civil Engineer");
                    break;
            }
            var adress = prompt("Do you Knew where i live");
            adress.toLowerCase();

            // console.log("Its convaret to Upper Case " + adress);



            switch (adress) {
                case "yes":
                case "y":
                    alert("maybe you a close person for me ");
                    score = score + 1;
                    console.log(score)

                    break;
                case "no":
                case "n":
                    alert("No i live in safoot ");
                    break;
            }
            var Meeting = prompt("did we met befor");
            Meeting.toLowerCase();

            // console.log("Its convaret to Upper Case " + Meeting);

            switch (Meeting) {
                case "yes":
                case "y":
                    alert("nice to meet you " + Name);
                    score = score + 1;
                    console.log(score)

                    break;
                case "no":
                case "n":
                    alert("I hope to meet you soon " + Name);
                
            }
            for ( var i = 0; i <=3; i++) {
                var gisNumber = parseInt(prompt('Guess my age '));

            if (gisNumber === 27) {
                score = score + 1;
                i = 6;
            } else if (gisNumber > 35) {
                alert('its too low');
                gisNumber = parseInt(prompt('Guess my age '));
            } else if (gisNumber <= 20) {
                alert('its too low');
                gisNumber = parseInt(prompt('Guess my age '));
            } else {
                alert('its to high');
            }
        }


        var country =['palestine','jordan','qatar','canada','france','germane' ];

        var chooseCountry = prompt('choose my favourite contry ').toLowerCase();


        // for( var j=0 ; j <5 ;j++) {
        //     if( country[0] === chooseCountry){
        //         score = score +1;
        //         console.log(score)
        //         j=6;
            
        //     }else if( country[3] === chooseCountry){
        //         score = score +1;
        //         j=6; 
        //     } else if( country[5] === chooseCountry){
        //         score = score +1;
        //         console.log(score);

        //         j=6; 


        //     }
        //     else if( country[7] === chooseCountry){
        //         score = score +1;
        //         console.log(score);

        //         j=6; 
        //     }else {
        //         var chooseCountry = prompt('choose my favourite contry palestine jordan  qatar  canada  france  germane  Algeria  Australia  Brazil').toLowerCase();
        //     }
        // }
                var j =0 
                
        while( j <= country.length){
            switch (chooseCountry) {
                    case country[0]:
                     case country[1]:
                     case country[2]:
                     case country[3]:
                     case country[4]:
                     case country[5]:

                    score = score +1;

                    j = 10
                    break;
            
                default:
                    chooseCountry = prompt('choose my favourite contry ').toLowerCase();
                    j ++
                    break;
            }
                    
            }
                
        alert('you are scored  ' + score)
