function changeCurrent(id) {
		    var x = document.getElementById(id);
		    x.style.color = "green"; 
		    x.style.fontWeight="bold";
		}

function changeOld(id) {
		    var x = document.getElementById(id);
		    x.style.color = "#A1A1A1"; 
		}

function contest(){
	var name,date1,date2;
	name = arguments[0];
	date1 = new Date(arguments[1]);
	if (arguments.length == 3){
		date2 = new Date(arguments[2]);
	} else {
		date2 = "NA";
	}
	var start = date1.getTime();
	var end;
	if (date2 == "NA"){
		end = start + 86400000;
	} else {
		end = date2.getTime() + 86400000;
	}
	var flag = "NOW";
	var now = new Date().getTime();
	if (now < start){
		flag = "FUTURE";
	} else if (now > end){
		//window,alert("hi"+name);
		flag = "OVER";
	}

	date1 = date1.toDateString();
	var a = name + "    (";
	if (date2 == "NA"){
		//window.alert("!!!!!" + date1);
		date1 = date1.split(" ").slice(1,4);;
		//window.alert("Date1 3" + date1);
		date1[1] += ",";
		a += date1.join(" ");
		//window.alert("a" + a);
	} else {
		date2 = date2.toDateString();
		date1 = date1.split(" ").slice(1,4);
		date2 = date2.split(" ").slice(1,4);
		if (date1[2] == date2[2]){
			date1 = date1.slice(0,2);
			if (date1[0] == date2[0]){
				date2 = date2.slice(1);
				date2[0] += ",";
			} else {
				date2[1] += ",";
			}
		}
		a += date1.join(" ") + " - " + date2.join(" ");
	}
	a += ")"
	document.write(a);

	if (flag == "OVER"){
		changeOld(name);
	}
	if (flag == "NOW"){
		changeCurrent(name);
	}
}

