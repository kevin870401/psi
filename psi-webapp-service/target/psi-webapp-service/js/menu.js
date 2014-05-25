/**
 * @author 邓 海然
 */
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1){
	OSName="Windows";
	if (navigator.appVersion.indexOf("NT 5.1")!=-1){
		OSName+=" xp 32位";
	}else if (navigator.appVersion.indexOf("NT 5.2")!=-1){
		OSName+=" xp 64位";
	}else if (navigator.appVersion.indexOf("NT 6.0")!=-1){
		
			if (navigator.appVersion.indexOf("WOW64")==-1){
					OSName+=" Vista 32位";
		}else{
					OSName+=" Vista 64位";
		}
	}else if (navigator.appVersion.indexOf("NT 6.1")!=-1){
			if (navigator.appVersion.indexOf("WOW64")==-1){
					OSName+=" 7 32位";
		}else{
					OSName+=" 7 64位";
		}
	}else if (navigator.appVersion.indexOf("NT 6.2")!=-1){
		if (navigator.appVersion.indexOf("WOW64")==-1){
					OSName+=" 8 32位";
		}else{
					OSName+=" 8 64位";
		}
	}
		
		      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         fullVersion = parseFloat( RegExp.$1 );
         majorVersion=fullVersion;
} 
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
//console.log(nVer);
// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}
/*
console.log(''
 +'Browser name  = '+browserName+'\n'
 +'Full version  = '+fullVersion+'\n'
 +'Major version = '+majorVersion+'\n'
 +'navigator.appName = '+navigator.appName+'\n'
 +'navigator.userAgent = '+navigator.userAgent+'\n'
)*/
		function chatwith(a){
			
			    window.location = "../index.php?page=contact_user&id="+a

		}
function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}

var $_GET = getQueryParams(document.location.search);

function setCurrent(){

  if(typeof $_GET.page === "undefined"||$_GET.page=="home"){
	
	$("#home").attr("class","current");
	
	
  }else if($_GET.page.substring(0,13)=="organization_"){
  	
  	$(".org"+$_GET.id+" >#"+$_GET.page).attr("class","current");
  	
  	
  }else{
  		$("#"+$_GET.page).attr("class","current");

  }
 
}
function popupshow(){
	jQuery(".dim").hide();
	
	
	
}

function popuphide(){
	jQuery(".dim").show();
	
	
	
}

