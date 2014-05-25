<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>菲雪洛琳 backoffice</title>
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">

	<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.aw-showcase.js"></script>


</head>
 <body>
<script type="text/javascript">
//禁止输入中文汉字
	function isSpecialChar(id){
		var iptData=document.getElementById(id);
		if(iptData.value.match(/[^\x00-\xff]/ig)){
		iptData.value=iptData.value.replace(/[^\x00-\xff]/ig,"");
		}
	}
</script>
	 <style type="text/css">
* {
    margin: 0;
    padding: 0;
    border: 0;

    vertical-align: baseline;
    text-align:left;
}
* {margin:0; padding:0;}

html {
	font: 90%/1.3 arial,sans-serif;
	padding-top:60px;
	padding-left:120px;

	
}

#loginform{
	background:#fff;
	padding:1em;
	border:1px solid #eee;
}

.login {
	background:url(images/user.gif) no-repeat 95% 1em;
}

fieldset div {
	margin:0.3em 0;
	clear:both;
}
form {
	margin:1em;
	width:27em;
}
label {
	float:left;
	width:10em;
	text-align:right;
	margin-right:1em;
}
legend {
	color:#0b77b7;
	font-size:1.2em;
}
legend span {
	width:10em;
	text-align:right;
}
input {
	padding:0.15em;
	width:10em;
	border:1px solid #ddd;
	background:#fafafa;
	font:bold 0.95em arial, sans-serif;
	-moz-border-radius:0.4em;
	-khtml-border-radius:0.4em;
}
input:hover, input:focus {
	border-color:#c5c5c5;
	background:#f6f6f6;
} 
fieldset {
	border:1px solid #ddd;
	padding:0 0.5em 0.5em;
}

#loginform input.default {
	color:#bbb;
}
center{
	background-color:#fafafa;
}
li{
	font-size:1.6em
}

  </style>
  
<table style="display:block;">
	<tbody><tr>
			 <td>
	  <div style="display:block;padding:90px;">
	  	
	  	<strong style="font-size:2.0em;">菲雪洛琳backoffice系统</strong>
	  	<br>
  	<ul>
  		<br>
  		<li>
  			》财务管理
  		</li>
  		<br>
  		<li>
  			》前台营销
  		</li>
  		<br>
  		<li>
  			》后台调配
  		</li>
  		
  	</ul>
  </div>
  </td>
		<td>
					<form id="loginform" method="post" action="api/">
			<input name="action" type="hidden" id="action" value="checklogin">

		<p>珠海菲雪洛琳服装有限公司backoffice</p>
		<br>
		<fieldset class="login" style="padding-top:10px">
			<legend>用户登陆表格</legend>
			
			<div>
				<label for="username">用户名</label> <input type="text" id="username" name="username" onkeyup="isSpecialChar(this.id)">
			</div>
			<br>
			<div>
				<label for="password">密码</label> <input type="password" id="password" name="password">
			</div>
			
			
		</fieldset>
		<br>
		<input type="hidden" id="ip" name="ip" value="24.246.77.88">		<script>
				document.write(
					"<input type='hidden' id='browser' name='browser' value='"+browserName+" "+majorVersion+"'>"
				   +"<input type='hidden' id='os' name='os' value='"+OSName+"'>"
				);
		</script><input type="hidden" id="browser" name="browser" value="Chrome 33"><input type="hidden" id="os" name="os" value="Windows 7 64位">
		<input type="submit" id="submit" name="gender" value="登入"> 
		
	</form>

	 </td>

  </tr>
  		</tbody></table>



<div id="cn-toppage-foot"><a id="bot" href="#top" title="Return to Top of Page">回到顶端</a></div><script type="text/javascript">setCurrent();</script><br>©2009-2012 珠海菲雪 服装公司 All Rights Reserved 
</body>
</html>