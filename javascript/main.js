
var frogObject   = sections;
const downIcon=' <i class="fa fa-arrow-down"></i>'; 
const upIcon=' <i class="fa fa-arrow-up"></i>'; 
const downLock=' <i class="fa fa-lock"></i>';
	

var lockArray=new Array();
var openArray=new Array();
var buttonArray=new Array();
  
  
  
  function myFunction(){
 	let htmlOut = "";

	
	let count=0;
	frogObject.map( animalObject =>{
	    openArray[count]=0;
	    if(count==0)
		 lockArray[count]=1
		else
		 lockArray[count]=0;

		let icon=downIcon;
		if(count>0)
		  icon=downLock;
		buttonArray[count]=animalObject.title.value;
		htmlOut +=  `<div class="collapsible"  onclick="buttonClick(${count})"><div class="headerName">${buttonArray[count]}</div> ${icon}</div>`;
		
		htmlOut +=`<div class="content">
					<div>${animalObject.panel.value}</div>
					
					<div><img src="./images/${animalObject.panel.image.src}"  alt="${animalObject.panel.image.title}" style="width:100%"></div>
					
				  </div>`;
		count++;		  
		
	})
	document.getElementById("demo").innerHTML=htmlOut;

	



	
}


function buttonClick(buttonId ){

	let button = document.getElementsByClassName("collapsible")[buttonId];
	let panel = document.getElementsByClassName("content")[buttonId];
	let iconSize = document.getElementsByClassName("collapsible").length;	
	let nextButton = document.getElementsByClassName("collapsible")[buttonId+1];
	
	
	button.classList.toggle("active");
	console.log("button Click"+buttonId);
    
    if(lockArray[buttonId]==1)
	{
	
		if (panel.style.display === "grid") {
					//close
					lockChildern(buttonId);
					button.innerHTML=buttonArray[buttonId]+downIcon;
					panel.style.display = "none";
		} else {
				 
					button.innerHTML=buttonArray[buttonId]+upIcon;;
					panel.style.display = "grid";
					if((buttonId+1)!=iconSize)
					{
						lockArray[buttonId+1]=1;
						nextButton.innerHTML=buttonArray[buttonId+1]+downIcon;
					}
		}
	}
	
	

}


function lockChildern(kids){
    let buttons = document.getElementsByClassName("collapsible");
	let panels = document.getElementsByClassName("content");
	
	for(i=(kids+1);i<buttons.length;i++){
	  panels[i].style.display="none";
	  lockArray[i]=0;
	  buttons[i].innerHTML=buttonArray[i]+' <i class="fa fa-lock"></i>';
	
	}

}


window.visualViewport.addEventListener("resize", viewportHandler);
function viewportHandler(event) {
 
  console.log("window.innerHeight"+window.innerHeight);
  console.log("scale"+event.target.scale ) ;
}

