const hourEl = document.getElementById("hora");

const minuteEl = document.getElementById("minutos");

const secondEl = document.getElementById("segundos");

const ampmEl = document.getElementById("ampm").value;



function updateClock() {
	let data = new Date();
	let h = data.getHours();
	let m = data.getMinutes();
	let s = data.getSeconds();
	let ampm = " Manhã";

	if(h > 12 || h < 18){
		ampm = "Tarde";
	} 

	if (h > 18 || h < 24) {
		ampm = "Noite"
	}

	if(h < 10){
		h="0"+h;
	}
	if(minuteEl < 10){
		m="0"+m;
	}
	if(s < 10){
		s="0"+ s;
	}
	

	hourEl.innerText = h;
	minuteEl.innerText = m;
	secondEl.innerText = s;
	ampmEl, (innerText = ampm);

	setTimeout(()=> {
		updateClock();
	},1000);
}

updateClock();