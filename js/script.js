
/*var myIndex = 0;*/
/*carousel();*/

/*function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) 
	{
	x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) 
	{
		myIndex = 1
	}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 3000); // Change image every 3 seconds
}*/

function login(display)
{
	if(display == "show")
	{
    	document.getElementById('popupbox1').style.visibility="visible";
	}
	else if(display == "hide")
	{
    	document.getElementById('popupbox1').style.visibility="hidden"; 
	}
}

function register(display) {
	if(display == "show")
	{
    	document.getElementById('popupbox2').style.visibility="visible";
	}
	else if(display == "hide")
	{
    	document.getElementById('popupbox2').style.visibility="hidden"; 
	}
}

function registerInfo() 
{
  	var x = document.forms["register"];
  	var userName = "";
  	var password = "";

	userName += x.elements[0].value;
	password += x.elements[1].value;

	// Check browser support
	if (typeof(Storage) !== "undefined") 
	{
		// Store in local storage
		localStorage.setItem("#username-"+userName, ""+userName);
		localStorage.setItem(userName+"-password", ""+password);

		// Store in Sessional Storage
		sessionStorage.setItem("username", ""+userName);
	} 
	else 
	{
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	//document.getElementById("popupbox2").innerHTML = userName;
  }

function loginInfo()
{	
	var x = document.forms["login"];

  	var inputName = x.elements[0].value;	// Sulu
  	var inputPass = x.elements[1].value;	// qwerty
	var LName = localStorage.getItem("#username-"+inputName+"");
	var LPass = localStorage.getItem(inputName+"-"+"password");

 	if (inputName==LName && inputPass==LPass) 
	{	
		sessionStorage.setItem("username", ""+inputName);
		sessionStorage.setItem("Login", "Success");
	} 
	else 
	{
		sessionStorage.setItem("Login", "Error");
	} 	
}

function printErr()
{
	var login = sessionStorage.getItem("Login");
	if(login=="Error")
	{
		//alert(login+" message");
		document.getElementById("error").innerHTML = "Wrong username/password!";
	}

}

function welcome()
{
  	var name = sessionStorage.getItem("username");
  	if(name != "" && name != null)
  	{
  		document.getElementById("greetings").innerHTML = "Welcome " + name;
  		document.getElementById("logout").innerHTML = "<button onclick=\"logout()\">" + "Logout" + "</a>";
  	}
}



function logout()
{
  	var name = sessionStorage.getItem("username");

 	if (typeof(Storage) !== "undefined") 
	{
		// Store in Sessional Storage
		sessionStorage.setItem("username", "");
		sessionStorage.setItem("Login", "");
		location.replace("");
	} 
	else 
	{
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	} 	
  }




