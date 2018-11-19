function tellTime(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var daynight = 'am';
	if (h === 0){
		h = 12;
	}

	if (h > 12){ /** instead of military time, makes into regular & adds "pm" **/
		h -= 12;
		daynight = 'pm';
	}

	if (h < 10){ /**adds placeholder 0 **/
		h = "0" + h;
	}
	if (m < 10){ /**adds placeholder 0 **/
		m = "0" + m;
	}
	if (s < 10){ /**adds placeholder 0 **/
		s = "0" + s;
	}

	var currentTime = h + ':' + m + ':' + s + ' ' + daynight; /** puts all variables together **/

	document.getElementById('clock').innerText = currentTime;

	document.getElementById('clock').textContent = currentTime;

	setTimeout(tellTime, 1000); /**executes code every second to update time**/
}

tellTime();