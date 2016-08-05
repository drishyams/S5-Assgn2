function prependZero(minutes){
		
			if(minutes < 10 ){
				console.log("Min: " + minutes);
 				return "0" + minutes;
			}
			else{
				return minutes;
			}
			
		}

		function getCurrentTime(){
			var date = new Date();

			var hours = date.getHours();
			var minutes = prependZero(date.getMinutes());

			document.write("Current Time is = <b>" + hours + " : " + minutes + "</b>");			
		}
		getCurrentTime();