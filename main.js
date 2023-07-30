
var key=true
let d=document.getElementById("date")
let m=document.getElementById("month")
let y=document.getElementById("year")
let h=document.getElementById("hour")
let min=document.getElementById("min")
let s=document.getElementById("sec")
let p=document.getElementById("per")
let displaydate=document.querySelector('.str-date')
let weeks=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat']
let months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
function clock(){
	let today=new Date()
	let year=today.getFullYear()
	let month=today.getMonth()
	let date=today.getDate()
	let day=today.getDay()

	d.value=date
	m.value=month+1
	y.value=year

	let hour=today.getHours()
	let minute=today.getMinutes()
	let seconds=today.getSeconds()

	if(hour>=12){
		if(hour==12){
			hour=12
			p.value="PM"
		}else{
		hour=hour-12;
		p.value="PM"
		}
	}else{
		p.value="AM"
	}
	
	if(key){
		h.value=hour
	}else{
		h.value=hour+12
	}
	
	
	min.value=minute
	s.value=seconds
	
	let btn=document.querySelector(".btn")

	btn.addEventListener("click",change)
	
	
// days find

	let daystr=document.getElementsByClassName("display")
	daystr[day].checked=true;
	let ww=weeks[day]
	let mm=months[month]
	let dates=`${ww},${date} ${mm}`
	displaydate.value=dates
}

setInterval(clock,1000)

function change(){
	let dd= new Date()
	let hh=dd.getHours()
	if(hh>12){
		key=!key
	}else {
		key=true
		alert(`"Only work at PM"`)
	}
		
	}

// change time

	
	
	
	