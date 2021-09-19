var operatingsystem= prompt ("What is your computers operating system?")
switch(operatingsystem) {
		case "Mac OS", "Mac", "mac", "mac os":
		alert("Apple");
		break;
		
		case"Windows", "PC", "pc", "windows":
		alert("Microsoft");
		break;
		
		default:
		alert("Cool!");
}