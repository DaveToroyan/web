var grel = function() {
    var text = document.getElementById("text").value;
    
    var newText = "";
    
    for(var i = 0; i<=text.length-1; i++) {
    
    if((text[i]==="A")||(text[i]==="a"))
    {
        newText = newText+4;
    }
    
    else if((text[i]==="B")||(text[i]==="b")){
        newText = newText+8
    }

    else if((text[i]==="C")||(text[i]==="c")){
        newText = newText+2
    }
    
    else if((text[i]==="I")||(text[i]==="i")){
        newText = newText+1
    }
    
	else if ((text[i]==="O"||text[i]==="o")){
		newText = newText + "0"
	}
    else{
        newText= newText+text[i];
    }
    }
    
    var output = document.getElementById("output")
    output.innerHTML= newText;
        
    }
	