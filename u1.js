let buttons = Array.from(document.querySelectorAll('button'));


//Lesson 1

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
            case "l1_btn1":
              var audio=new Audio('assets/audio/letters and vowel marks/01.m4a'); audio.play();
                break;
                
				case "l1_btn2":
              var audio=new Audio('assets/audio/letters and vowel marks/02.m4a'); audio.play();
                break;
				
				case "l1_btn3":
              var audio=new Audio('assets/audio/letters and vowel marks/03.m4a'); audio.play();
                break;
				
				case "l1_btn4":
              var audio=new Audio('assets/audio/letters and vowel marks/04.m4a'); audio.play();
                break;
				
				case "l1_btn5":
				var audio=new Audio('assets/audio/u1_l1/01.m4a'); audio.play();
				break;
				
				case "l1_btn6":
				var audio=new Audio('assets/audio/u1_l1/02.m4a'); audio.play();
				break;
				
				case "l1_btn7":
				var audio=new Audio('assets/audio/u1_l1/04.m4a'); audio.play();
				break;
				
				case "l1_btn8":
				var audio=new Audio('assets/audio/u1_l1/04.m4a'); audio.play();
				break;
				
				case "l1_btn9":
				document.getElementById("l1_btn9").style.backgroundColor='green';
                document.getElementById("l1_btn10").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn10":
				document.getElementById("l1_btn10").style.backgroundColor='red';
                document.getElementById("l1_btn9").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn11":
				if (document.getElementById('t1').value=='ܐܶ') alert('أحسنتم 😍🥳')
                else alert('حاولوا مجدداً 😊')
				break;
				
				case "l1_btn12":
				var audio=new Audio('assets/audio/u1_l1/05.m4a'); audio.play();
				break;
				
				case "l1_btn13":
				var audio=new Audio('assets/audio/u1_l1/06.m4a'); audio.play();
				break;
				
				case "l1_btn14":
				var audio=new Audio('assets/audio/u1_l1/07.m4a'); audio.play();
				break;
				
				case "l1_btn15":
				var audio=new Audio('assets/audio/u1_l1/08.m4a'); audio.play();
				break;
				
				case "l1_btn16":
				document.getElementById("l1_btn16").style.backgroundColor='green';
                document.getElementById("l1_btn17").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn17":
				document.getElementById("l1_btn17").style.backgroundColor='red';
                document.getElementById("l1_btn16").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn18":
				var audio=new Audio('assets/audio/u1_l1/09.m4a'); audio.play();
				break;
				
				case "l1_btn19":
				var audio=new Audio('assets/audio/u1_l1/10.m4a'); audio.play();
				break;
				
				case "l1_btn20":
				var audio=new Audio('assets/audio/u1_l1/11.m4a'); audio.play();
				break;
				
				case "l1_btn21":
				document.getElementById("l1_btn21").style.backgroundColor='red';
                document.getElementById("l1_btn22").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn22":
				document.getElementById("l1_btn22").style.backgroundColor='green';
                document.getElementById("l1_btn21").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn23":
				var audio=new Audio('assets/audio/u1_l1/12.m4a'); audio.play();
				break;
				
				case "l1_btn24":
				var audio=new Audio('assets/audio/u1_l1/13.m4a'); audio.play();
				break;
				
				case "l1_btn25":
				var audio=new Audio('assets/audio/u1_l1/14.m4a'); audio.play();
				break;
				
				case "l1_btn26":
				var audio=new Audio('assets/audio/letters and vowel marks/m1.m4a'); audio.play();
				break;
				
				case "l1_btn27":
				var audio=new Audio('assets/audio/letters and vowel marks/m2.m4a'); audio.play();
				break;
				
				case "l1_btn28":
				var audio=new Audio('assets/audio/letters and vowel marks/m3.m4a'); audio.play();
				break;
				
				case "l1_btn29":
				var audio=new Audio('assets/audio/letters and vowel marks/m4.m4a'); audio.play();
				break;
				
				case "l1_btn30":
				var audio=new Audio('assets/audio/letters and vowel marks/m5.m4a'); audio.play();
				break;
				
				case "l1_btn31":
				if (document.getElementById('t2').value==('ܕܶܒ݂ܫܳܐ')) alert('صحيح 🥰')
                else alert('حاولوا مجدداً 🥺')
				break;
				
				case "l1_btn32":
				if(document.getElementById('t3').value==('ܒܺܝܪܳܐ')) alert('أحسنتم ⁦(⁠ ⁠╹⁠▽⁠╹⁠ ⁠)⁩')
                else alert('لا بأس ⁦(⁠◡⁠ ⁠ω⁠ ⁠◡⁠)⁩ حاولوا من جديد')
				break;
				
				case "l1_btn33":
				if(document.getElementById('t4').value==('ܓܽܘܒ݁ܳܐ')) alert('رائع 😍')
                else alert('كلنا نخطئ 🥰')
				break;
				
				case "l1_btn34":
				if(document.getElementById('t5').value==('ܕܰܘܠܳܐ')) alert('أنا فخور بكم جداً 🥰')
                else alert('الأخطاء ضرورية كي نتعلم منها 😇')
				break;
				
				case "l1_btn35":
				document.getElementById("l1_btn35").style.backgroundColor="red";
                document.getElementById("l1_btn36").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn37").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn38").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn36":
				document.getElementById("l1_btn36").style.backgroundColor="red";
                document.getElementById("l1_btn35").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn37").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn38").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn37":
				 document.getElementById("l1_btn37").style.backgroundColor="green";
                 document.getElementById("l1_btn35").style.backgroundColor='#0277BD';
                 document.getElementById("l1_btn36").style.backgroundColor='#0277BD';
                 document.getElementById("l1_btn38").style.backgroundColor='#0277BD';
				break;
				
				case "l1_btn38":
				document.getElementById("l1_btn38").style.backgroundColor="red";
                document.getElementById("l1_btn35").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn36").style.backgroundColor='#0277BD';
                document.getElementById("l1_btn37").style.backgroundColor='#0277BD';
				break;
				
				
            
        }
    });
});




//Lesson 2


buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
			
		    	case "l2_btn1":
				var audio=new Audio('assets/audio/letters and vowel marks/05.m4a'); audio.play();
				break;
				
				case "l2_btn2":
				var audio=new Audio('assets/audio/letters and vowel marks/06.m4a'); audio.play();
				break;
				
				case "l2_btn3":
				var audio=new Audio('assets/audio/letters and vowel marks/07.m4a'); audio.play();
				break;
				
				case "l2_btn4":
				var audio=new Audio('assets/audio/u1_l2/01.m4a'); audio.play();
				break;
				
				case "l2_btn5":
				var audio=new Audio('assets/audio/u1_l2/02.m4a'); audio.play();
				break;
				
				case "l2_btn6":
				var audio=new Audio('assets/audio/u1_l2/03.m4a'); audio.play();
				break;
				
				case "l2_btn7":
				var audio=new Audio('assets/audio/u1_l2/04.m4a'); audio.play();
				break;
				
				case "l2_btn8":
				var audio=new Audio('assets/audio/u1_l2/05.m4a'); audio.play();
				break;
				
				case "l2_btn9":
				var audio=new Audio('assets/audio/u1_l2/06.m4a'); audio.play();
				break;
				
				case "l2_btn10":
				var audio=new Audio('assets/audio/u1_l2/07.m4a'); audio.play();
				break;
				
				case "l2_btn11":
				var audio=new Audio('assets/audio/u1_l2/08.m4a'); audio.play();
				break;
				
				case "l2_btn12":
				var audio=new Audio('assets/audio/u1_l2/09.m4a'); audio.play();
				break;
				
				case "l2_btn13":
				if (document.getElementById('t1').value==('ܘܰܪܕ݁ܳܐ') && document.getElementById('t2').value==('ܗܰܒ݁ܳܒ݂ܳܐ')) alert ('أحسنتم 😍')
                else alert('تحققوا من إجاباتكم و حاولوا مجدداً 🥰')
				break;
				
				case "l2_btn14":
				if (document.getElementById('t3').value==('ܙܡܺܝܪܬ݁ܳܐ') && document.getElementById('t4').value==('ܙܳܪܽܘܥܳܐ')) alert ('الإجابة صحيحة 🥰')
                else alert('كلنا نخطئ 🌼')
				break;
				
				case "l2_btn15":
				if (document.getElementById('t5').value==('ܘܰܪܩܳܐ')) alert('أنا فخور بكم جداً 😍')
                else alert('ركزوا من جديد و أعيدوا المحاولة 😊')
				break;
				
				case "l2_btn16":
				document.getElementById("l2_btn16").style.backgroundColor='green';
                document.getElementById("l2_btn17").style.backgroundColor='#0277BD';
                document.getElementById("l2_btn18").style.backgroundColor="#0277BD";
				break;
				
				case "l2_btn17":
				document.getElementById("l2_btn16").style.backgroundColor='#0277BD';
                document.getElementById("l2_btn17").style.backgroundColor='red';
                document.getElementById("l2_btn18").style.backgroundColor="#0277BD";
				break;
				
				case "l2_btn18":
				document.getElementById("l2_btn18").style.backgroundColor='red';
                document.getElementById("l2_btn16").style.backgroundColor='#0277BD';
                document.getElementById("l2_btn17").style.backgroundColor="#0277BD";
				break;
			
			
			
			
			
			
			
			
			
			
			
			    }
    });
});



//Lesson 3

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
			    
				
				case "l3_btn1":
				var audio=new Audio('assets/audio/letters and vowel marks/08.m4a'); audio.play();
				break;
				
				case "l3_btn2":
				var audio=new Audio('assets/audio/letters and vowel marks/09.m4a'); audio.play();
				break;
				
				case "l3_btn3":
				var audio=new Audio('assets/audio/letters and vowel marks/10.m4a'); audio.play();
				break;
				
				case "l3_btn4":
				var audio=new Audio('assets/audio/u1_l3/01.m4a'); audio.play();
				break;
				
				case "l3_btn5":
				var audio=new Audio('assets/audio/u1_l3/02.m4a'); audio.play();
				break;
				
				case "l3_btn6":
				var audio=new Audio('assets/audio/u1_l3/03.m4a'); audio.play();
				break;
				
				case "l3_btn7":
				document.getElementById("l3_btn7").style.backgroundColor='green';
                document.getElementById("l3_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn9").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn8":
				document.getElementById("l3_btn7").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn8").style.backgroundColor='red';
                document.getElementById("l3_btn9").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn9":
				document.getElementById("l3_btn9").style.backgroundColor='red';
                document.getElementById("l3_btn7").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn8").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn10":
				var audio=new Audio('assets/audio/u1_l3/04.m4a'); audio.play();
				break;
				
				case "l3_btn11":
				var audio=new Audio('assets/audio/u1_l3/05.m4a'); audio.play();
				break;
				
				case "l3_btn12":
				var audio=new Audio('assets/audio/u1_l3/06.m4a'); audio.play();
				break;
				
				case "l3_btn13":
				if (document.getElementById('t1').value==('ܘܰܪܩܳܐ')) alert ('أحسنتم 🥰')
                else alert('الأخطاء تعلمنا الكثير 😌')
				break;
				
				case "l3_btn14":
				var audio=new Audio('assets/audio/u1_l3/07.m4a'); audio.play();
				break;
				
				case "l3_btn15":
				var audio=new Audio('assets/audio/u1_l3/08.m4a'); audio.play();
				break;
				
				case "l3_btn16":
				var audio=new Audio('assets/audio/u1_l3/09.m4a'); audio.play();
				break;
				
				case "l3_btn17":
				if (document.getElementById('t2').value==('ܚܳܢܽܘܬ݂ܳܐ')) alert('ممتاز 😍')
                else alert('أعيدوا الكَرَّةَ 😊🌼')
				break;
				
				case "l3_btn18":
				if (document.getElementById('t3').value==('ܚܠܽܘܠܳܐ') && document.getElementById('t4').value==('ܚܽܘܒ݁ܳܐ')) alert ('أحسنتم جداً 😍🌻')
                else alert ('أعيدوا التفكير جيداً 😊')
				break;
				
				case "l3_btn19":
				document.getElementById("l3_btn19").style.backgroundColor='red';
                document.getElementById("l3_btn20").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn21").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn20":
				document.getElementById("l3_btn19").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn20").style.backgroundColor='red';
                document.getElementById("l3_btn21").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn21":
				document.getElementById("l3_btn21").style.backgroundColor='green';
                document.getElementById("l3_btn19").style.backgroundColor='#0277BD';
                document.getElementById("l3_btn20").style.backgroundColor="#0277BD";
				break;
				
				case "l3_btn22":
				if (document.getElementById('t5').value==('ܛܶܦ݂ܪܳܐ')) alert ('مذهل 😇')
                else alert ('لا ضير من المحاول مجدداً 😌')
				break;
				
				case "l3_btn23":
				if (document.getElementById('t6').value==('ܝܰܘܡܳܐ') && document.getElementById('t7').value==('ܝܰܪܚܳܐ')) alert ('أنتم تتقدمون كثيراً 😍')
                else alert ('لا بأس 😇 أعيدوا المحاولة')
				break;
				
				
			    
			
			
			
			
			
			
			
			
			
						    }
    });
});









//Lesson 4

buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
			    
				
				
				case "l4_btn1":
				var audio=new Audio('assets/audio/letters and vowel marks/11.m4a'); audio.play();
				break;
				
				case "l4_btn2":
				var audio=new Audio('assets/audio/letters and vowel marks/12.m4a'); audio.play();
				break;
				
				case "l4_btn3":
				var audio=new Audio('assets/audio/letters and vowel marks/13.m4a'); audio.play();
				break;
				
				case "l4_btn4":
				var audio=new Audio('assets/audio/letters and vowel marks/14.m4a'); audio.play();
				break;
				
				case "l4_btn5":
				var audio=new Audio('assets/audio/u1_l4/01.m4a'); audio.play();
				break;
				
				case "l4_btn6":
				var audio=new Audio('assets/audio/u1_l4/02.m4a'); audio.play();
				break;
				
				case "l4_btn7":
				var audio=new Audio('assets/audio/u1_l4/03.m4a'); audio.play();
				break;
				
				case "l4_btn8":
				document.getElementById("l4_btn8").style.backgroundColor='red';
                document.getElementById("l4_btn9").style.backgroundColor='#0277BD';
                document.getElementById("l4_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn9":
				document.getElementById("l4_btn9").style.backgroundColor='green';
                document.getElementById("l4_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l4_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn10":
				document.getElementById("l4_btn10").style.backgroundColor='red';
                document.getElementById("l4_btn9").style.backgroundColor='#0277BD';
                document.getElementById("l4_btn8").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn11":
				var audio=new Audio('assets/audio/u1_l4/04.m4a'); audio.play();
				break;
				
				case "l4_btn12":
				var audio=new Audio('assets/audio/u1_l4/05.m4a'); audio.play();
				break;
				
				case "l4_btn13":
				var audio=new Audio('assets/audio/u1_l4/06.m4a'); audio.play();
				break;
				
				case "l4_btn14":
				if (document.getElementById('t1').value=='ܐܶܒ݂ܪܳܐ') alert('ممتاز 😍🥳')
               else alert('فلنحاول مجدداً 😊')
				break;
				
				case "l4_btn15":
				var audio=new Audio('assets/audio/u1_l4/07.m4a'); audio.play();
				break;
				
				case "l4_btn16":
				var audio=new Audio('assets/audio/u1_l4/08.m4a'); audio.play();
				break;
				
				case "l4_btn17":
				var audio=new Audio('assets/audio/u1_l4/09.m4a'); audio.play();
				break;
				
				case "l4_btn18":
				var audio=new Audio('assets/audio/u1_l4/10.m4a'); audio.play();
				break;
				
				case "l4_btn19":
				var audio=new Audio('assets/audio/u1_l4/11.m4a'); audio.play();
				break;
				
				case "l4_btn20":
				var audio=new Audio('assets/audio/u1_l4/12.m4a'); audio.play();
				break;
				
				case "l4_btn21":
				var audio=new Audio('assets/audio/u1_l4/13.m4a'); audio.play();
				break;
				
				case "l4_btn22":
				if (document.getElementById('t2').value==('ܠܰܗܓ݁ܳܐ')) alert ('صحيح 😇')
                else alert ('ستنجحون في المرة القادمة 🙏🏻')
				break;
				
				case "l4_btn23":
				if (document.getElementById('t3').value==('ܡܰܠܦ݂ܳܢܳܐ')) alert ('إجابة صحيحة 😍')
                else alert ('هيا نحاول من جديد 😇')
				break;
				
				case "l4_btn24":
				if (document.getElementById('t4').value==('ܢܳܪܓ݁ܳܐ')) alert ('أنا سعيد بإجاباتكم الصحيحة 😍')
                else alert ('كلنا نخطئ 🌼 المهم أن نتعلم من أخطائنا 😊')
				break;
				
				case "l4_btn25":
				if (document.getElementById('t5').value==('ܠܺܠܝܳܐ') && document.getElementById('t6').value==('ܟܰܘܟ݁ܒ݂ܳܐ')) alert ('رائع 🥳🌼')
                else alert('بعض الأخطاء ضرورية للتعلم ☺️')
				break;
				
				case "l4_btn26":
				document.getElementById("l4_btn26").style.backgroundColor='green';
                document.getElementById("l4_btn27").style.backgroundColor='#0277BD';
                document.getElementById("l4_btn28").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn27":
				document.getElementById("l4_btn26").style.backgroundColor='#0277BD';
                document.getElementById("l4_btn27").style.backgroundColor='red';
                document.getElementById("l4_btn28").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn28":
				 document.getElementById("l4_btn28").style.backgroundColor='red';
                 document.getElementById("l4_btn26").style.backgroundColor='#0277BD';
                 document.getElementById("l4_btn27").style.backgroundColor="#0277BD";
				break;
				
				case "l4_btn29":
				if (document.getElementById('t7').value==('ܢܽܘܢܳܐ')) alert ('إجابة صحيحة 😌')
                else alert ('هناك خطأ 🥺 ما هو يا ترى 🤔')
				break;
				
				case "l4_btn30":
				if (document.getElementById('t8').value==('ܟܳܣܳܐ')) alert ('جواب صحيح 😍🥰')
                else alert ('ركزوا جيداً و أعيدوا الإجابة ☺️🌼')
				break;
				
				
			
									    }
    });
});






// Lesson 5


buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
			    
				
				
				case "l5_btn1":
				var audio=new Audio('assets/audio/letters and vowel marks/15.m4a'); audio.play();
				break;
				
				case "l5_btn2":
				var audio=new Audio('assets/audio/letters and vowel marks/16.m4a'); audio.play();
				break;
				
				case "l5_btn3":
				var audio=new Audio('assets/audio/letters and vowel marks/17.m4a'); audio.play();
				break;
				
				case "l5_btn4":
				var audio=new Audio('assets/audio/letters and vowel marks/18.m4a'); audio.play();
				break;
				
				case "l5_btn5":
				var audio=new Audio('assets/audio/u1_l5/01.m4a'); audio.play();
				break;
				
				case "l5_btn6":
				var audio=new Audio('assets/audio/u1_l5/02.m4a'); audio.play();
				break;
				
				case "l5_btn7":
				var audio=new Audio('assets/audio/u1_l5/03.m4a'); audio.play();
				break;
				
				case "l5_btn8":
				document.getElementById("l5_btn8").style.backgroundColor='red';
                document.getElementById("l5_btn9").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn9":
				document.getElementById("l5_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn9").style.backgroundColor='green';
                document.getElementById("l5_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn10":
				document.getElementById("l5_btn10").style.backgroundColor='red';
                document.getElementById("l5_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn9").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn11":
				var audio=new Audio('assets/audio/u1_l5/04.m4a'); audio.play();
				break;
				
				case "l5_btn12":
				var audio=new Audio('assets/audio/u1_l5/05.m4a'); audio.play();
				break;
				
				case "l5_btn13":
				var audio=new Audio('assets/audio/u1_l5/06.m4a'); audio.play();
				break;
				
				case "l5_btn14":
				if (document.getElementById('t1').value=='الأغنية') alert('ممتاز أحسنتم 🥰')
               else alert('حاولوا من جديد 😊')
				break;
				
				case "l5_btn15":
				var audio=new Audio('assets/audio/u1_l5/07.m4a'); audio.play();
				break;
				
				case "l5_btn16":
				var audio=new Audio('assets/audio/u1_l5/08.m4a'); audio.play();
				break;
				
				case "l5_btn17":
				var audio=new Audio('assets/audio/u1_l5/09.m4a'); audio.play();
				break;
				
				case "l5_btn18":
				var audio=new Audio('assets/audio/u1_l5/10.m4a'); audio.play();
				break;
				
				case "l5_btn19":
				var audio=new Audio('assets/audio/u1_l5/11.m4a'); audio.play();
				break;
				
				case "l5_btn20":
				var audio=new Audio('assets/audio/u1_l5/12.m4a'); audio.play();
				break;
				
				case "l5_btn21":
				if (document.getElementById('t2').value==('ܦܺܐܪܳܐ')) alert ('صحيح 😍')
                else alert ('واثق من نجاحكم في المرة القادمة 🥰')
				break;
				
				case "l5_btn22":
				if (document.getElementById('t3').value==('ܣܝܳܓ݂ܳܐ')) alert ('كنت واثقاً من نجاحكم 😍🥳')
                else alert ('كلنا نتعلم من أخطائنا ☺️')
				break;
				
				case "l5_btn23":
				if (document.getElementById('t4').value==('ܣܺܝܡܬ݁ܳܐ')) alert ('أحسنتم 💛')
                else alert ('فلنعد المحاولة 🙏🏻')
				break;
				
				case "l5_btn24":
				if (document.getElementById('t5').value==('ܨܰܝܳܕ݂ܳܐ') && document.getElementById('t6').value==('ܦܽܘܡܳܐ')) alert ('🎊 صحيح 🎉')
                else alert('حاولوا مجدداً 💙')
				break;
				
				case "l5_btn25":
				document.getElementById("l5_btn25").style.backgroundColor='green';
                document.getElementById("l5_btn26").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn27").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn26":
				document.getElementById("l5_btn25").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn26").style.backgroundColor='red';
                document.getElementById("l5_btn27").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn27":
				document.getElementById("l5_btn27").style.backgroundColor='red';
                document.getElementById("l5_btn25").style.backgroundColor='#0277BD';
                document.getElementById("l5_btn26").style.backgroundColor="#0277BD";
				break;
				
				case "l5_btn28":
				if (document.getElementById('t7').value==('ܥܶܣܒ݁ܳܐ')) alert ('تماماً 😌 إجابة صحيحة')
                else alert ('فلنحاول سوية بتركيز أكثر 😄')
				break;
				
				case "l5_btn29":
				if (document.getElementById('t8').value==('ܨܽܘܪܬ݁ܳܐ')) alert ('أحسنتم 🙏🏻💛')
                else alert ('لا بأس فكلنا نخطئ 🥰')
				break;
				
				
				
				
				
													    }
    });
});




//Lesson 6


buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.id){
			    
				
				
				case "l6_btn1":
				var audio=new Audio('assets/audio/letters and vowel marks/19.m4a'); audio.play();
				break;
				
				case "l6_btn2":
				var audio=new Audio('assets/audio/letters and vowel marks/20.m4a'); audio.play();
				break;
				
				case "l6_btn3":
				var audio=new Audio('assets/audio/letters and vowel marks/21.m4a'); audio.play();
				break;
				
				case "l6_btn4":
				var audio=new Audio('assets/audio/letters and vowel marks/22.m4a'); audio.play();
				break;
				
				case "l6_btn5":
				var audio=new Audio('assets/audio/u1_l6/01.m4a'); audio.play();
				break;
				
				case "l6_btn6":
				var audio=new Audio('assets/audio/u1_l6/02.m4a'); audio.play();
				break;
				
				case "l6_btn7":
				var audio=new Audio('assets/audio/u1_l6/03.m4a'); audio.play();
				break;
				
				case "l6_btn8":
				document.getElementById("l6_btn8").style.backgroundColor='red';
                document.getElementById("l6_btn9").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn9":
				document.getElementById("l6_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn9").style.backgroundColor='red';
                document.getElementById("l6_btn10").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn10":
				document.getElementById("l6_btn10").style.backgroundColor='green';
                document.getElementById("l6_btn8").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn9").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn11":
				var audio=new Audio('assets/audio/u1_l6/04.m4a'); audio.play();
				break;
				
				case "l6_btn12":
				var audio=new Audio('assets/audio/u1_l6/05.m4a'); audio.play();
				break;
				
				case "l6_btn13":
				var audio=new Audio('assets/audio/u1_l6/06.m4a'); audio.play();
				break;
				
				case "l6_btn14":
				if (document.getElementById('t1').value=='الغابة') alert('رائع 💛')
               else alert('حاولوا من جديد 🙏🏻')
				break;
				
				case "l6_btn15":
				var audio=new Audio('assets/audio/u1_l6/07.m4a'); audio.play();
				break;
				
				case "l6_btn16":
				var audio=new Audio('assets/audio/u1_l6/08.m4a'); audio.play();
				break;
				
				case "l6_btn17":
				var audio=new Audio('assets/audio/u1_l6/09.m4a'); audio.play();
				break;
				
				case "l6_btn18":
				var audio=new Audio('assets/audio/u1_l6/10.m4a'); audio.play();
				break;
				
				case "l6_btn19":
				var audio=new Audio('assets/audio/u1_l6/11.m4a'); audio.play();
				break;
				
				case "l6_btn20":
				var audio=new Audio('assets/audio/u1_l6/12.m4a'); audio.play();
				break;
				
				case "l6_btn21":
				if (document.getElementById('t2').value==('ܫܰܢ̱ܬ݁ܳܐ')) alert ('أحسنتم 💚')
                else alert ('فلنحاول من جديد 💛')
				break;
				
				case "l6_btn22":
				if (document.getElementById('t3').value==('ܩܶܢܳܐ')) alert ('أنا فخور بكم جداً 😇🌼🌻')
                else alert ('لا تيأسوا من المحاولة 😌')
				break;
				
				case "l6_btn23":
				if (document.getElementById('t4').value==('ܩܰܝܛܳܐ')) alert ('إجابة موفقة 🥳')
                else alert ('راجعوا إجابتكم جيداً قبل المحاولة من جديد 😇')
				break;
				
				case "l6_btn24":
				if (document.getElementById('t5').value==('ܫܶܢܬ݂ܳܐ') && document.getElementById('t6').value==('ܬܰܪܥܳܐ')) alert ('أحسنتم 😍')
                else alert('هيا نحاول من جديد 😌')
				break;
				
				case "l6_btn25":
				document.getElementById("l6_btn25").style.backgroundColor='red';
                document.getElementById("l6_btn26").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn27").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn26":
				document.getElementById("l6_btn25").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn26").style.backgroundColor='green';
                document.getElementById("l6_btn27").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn27":
				document.getElementById("l6_btn27").style.backgroundColor='red';
                document.getElementById("l6_btn25").style.backgroundColor='#0277BD';
                document.getElementById("l6_btn26").style.backgroundColor="#0277BD";
				break;
				
				case "l6_btn28":
				if (document.getElementById('t7').value==('ܪܽܘܥܬ݁ܳܐ')) alert ('صحيح 🌻')
                else alert ('لا يأس مع الحياة 😌')
				break;
				
				case "l6_btn29":
				if (document.getElementById('t8').value==('ܬܶܟ݁ܬܳܐ')) alert ('أنا فخور بتقدمكم هذا 😍')
                else alert ('فلنحاول من جديد 🙏🏻 لا بد لنا من الناجح 💙')
				break;
				
				
																	    }
    });
});