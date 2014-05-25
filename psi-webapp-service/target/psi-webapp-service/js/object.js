function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default, if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

function scan_good(scan_code,number){
		this.scan_code=scan_code;
		this.number=number;
		this.plan=0;

}

function iventory(scan_code,product_code,design_code,type,year,season,flow,material,color,size,designer,price,ratio,active,name,touserid,toorgid,num1,num2,hide)
{
	this.scan_code=scan_code;
	this.product_code=product_code;
	this.design_code=design_code;
	this.type=type;
	this.year=year;
	this.season=season;
	this.flow=flow;
	this.material=material;
	this.color=color;
	this.size=size;
	this.designer=designer;
	this.price=price;
	this.ratio=ratio;
	this.active=active;
	this.name=name;
	this.num1=num1;
	this.num2=num2;
	this.touserid=touserid;//can be from id
	this.toorgid=toorgid;//can be from id
	this.hide=hide;
}


function stackRequest(action,userid,orgid,inventorys){
	this.action=action;//"organization_stack";
	this.c="gradeC odd";
	this.userid=userid;
	this.orgid=orgid;
	this.inventorys=inventorys;
	this.printPending=function(){
		var a="";
		var cl=this.c;
		jQuery.each(this.inventorys, function() {
        var p=this.hide+","+"\""+this.scan_code+"\"";
		a+="	<tr id='"+this.hide+"' class='"+cl+"'>"+
		"<td class='  '><div class='button blue' onclick='confirm("+p+")'>接收分配</div></td>"+
			"<td class=' '>"+this.num1+"</td>"+
					"<td class=' '>"+this.scan_code+"</td>"+
					"<td class=' '>"+this.toorgid+"</td>"+
					"<td class=' '>"+this.touserid+"</td>"+
					"<td class=' '>"+this.hide+"</td>"+
					"<td class=' '>"+this.product_code+"</td></tr>";
			if(cl=="gradeC odd"){
				cl="gradeC even";
			}else{
				cl="gradeC odd";
			}
		});
		$("#stackTable > tbody").append(a);
		return;
			
	}
	this.dump=function(){
		this.inventorys=new Array();
		$("#stackTable > tbody").children().remove();

	}
	this.addInventorys=function(inventorys){
		this.inventorys=inventorys;
	}
	this.scan=function(scan_code){
	
		if(this.inventorys.length==0){
    		return 0;//not found
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if((scan_code == this.inventorys[i].scan_code)&&(this.inventorys[i].num1>this.inventorys[i].num2)){
  				 this.inventorys[i].num2++;
  				
  				$("#"+this.inventorys[i].touserid).find(">:first-child").next().text(this.inventorys[i].num2);
  				if(this.inventorys[i].num2==this.inventorys[i].num1){
  					$("#"+this.inventorys[i].touserid).find(">:first-child").next().css('border','3px solid green');
  				}
  				 return 1;//success
  			}
			
		}
		return 0;//not found
	}
	
	this.scan1=function(scan_code){
	
		if(this.inventorys.length==0){
    		return 0;//not found
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if((scan_code == this.inventorys[i].scan_code)&&(this.inventorys[i].num1>this.inventorys[i].num2)){
  				 this.inventorys[i].num2++;
  			
  				$("#index"+i).find(">:first-child").next().text(this.inventorys[i].num2);
  				if(this.inventorys[i].num2==this.inventorys[i].num1){
  					$("#index"+i).find(">:first-child").next().css('border','3px solid green');
  				}
  				 return 1;//success
  			}
			
		}
		return 0;//not found
	}
	
	this.complxscan=function(scan_code,fromorgid){
		if(this.inventorys.length==0){
    		return 0;//not found
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if((fromorgid == this.inventorys[i].toorgid)&&(scan_code == this.inventorys[i].scan_code)&&(this.inventorys[i].num1>this.inventorys[i].num2)){
  				 this.inventorys[i].num2++;
  				 var hide=this.inventorys[i].hide;
  				$("#"+hide).find(">:first-child").next().text(this.inventorys[i].num2);
  				if(this.inventorys[i].num2==this.inventorys[i].num1){
  					$("#"+hide).find(">:first-child").next().css('border','3px solid green');
  				}
  				 return 1;//success
  			}
			
		}
		return 0;//not found
	}
	
	
	this.hasInventory=function(inventory){
		if(this.inventorys.length==0){
    		return false;
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if(inventory.scan_code == this.inventorys[i].scan_code)
			return true;
		}
		return false;
	}
	this.add = function (inventory) {
		if(this.inventorys.length==0){
			//$("#stackTable > tbody").css("border","3px solid red");
			$("#stackTable > tbody").children().remove();
			
			//return;
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if(inventory.scan_code == this.inventorys[i].scan_code){
  				if(inventory.num1<this.inventorys[i].num2){
  					alert("你不可以将"+scan_code+"的计划数量改为"+inventory.num1+",\因为你已经扫描了货存:"+this.inventorys[i].num2+"件。");
  					return;
  				}
  				this.inventorys[i].num1=inventory.num1;
  				//$("#"+inventory.scan_code+" td:nth-child(2)").text(this.inventorys[i].num1);
  				$("#"+inventory.scan_code).find(">:first-child").text(this.inventorys[i].num1);
  				if(inventory.num1==this.inventorys[i].num2){
  				$("#"+inventory.scan_code).find(">:first-child").next().css('border','3px solid green');

  				}else{
  					$("#"+inventory.scan_code).find(">:first-child").next().css('border','3px solid red');

  				}

  				return;
  			}
		
		}
		var a="	<tr id='"+inventory.scan_code+"' class='"+this.c+"'>"+
			"<td class=' '>"+inventory.num1+"</td>"+
					"<td class=' ' style='border:3px solid red;'>"+inventory.num2+"</td>"+
					"<td class=' '>"+inventory.scan_code+"</td>"+
					"<td class=' '>"+inventory.product_code+"</td>"+
					"<td class=' '>"+inventory.design_code+"</td>"+
					"<td class=' '>"+inventory.type+"</td>"+
					"<td class=' '>"+inventory.year+"</td>"+
					"<td class=' '>"+inventory.season+"</td>"+
					"<td class=' '>"+inventory.flow+"</td>"+
					"<td class=' '>"+inventory.material+"</td>"+
					"<td class=' '>"+inventory.color+"</td>"+
					"<td class=' '>"+inventory.size+"</td>"+
					"<td class=' '>"+inventory.designer+"</td>"+	
					"<td class=' '>"+inventory.price+"</td>"+	
					"<td class=' '>"+inventory.ratio+"</td>"+	
					"<td class=' '>"+inventory.active+"</td>"+	
					"<td class=' '>"+inventory.name+"</td>";
					if(action=="organization_distribute"){
						a +="<td class='change'>"+inventory.toorgid+"</td>";
					}
					a +="</tr>";
			$("#stackTable > tbody").append(a);
			if(this.c=="gradeC odd"){
				this.c="gradeC even";
			}else{
				this.c="gradeC odd";
			}
			inventorys.push(inventory);
			return;
       }
       this.add2 = function (inventory) {
		if(this.inventorys.length==0){
			//$("#stackTable > tbody").css("border","3px solid red");
			$("#stackTable > tbody").children().remove();
			
			//return;
    	}

		var a="	<tr id='"+inventory.touserid+"' class='"+this.c+"'>"+
			"<td class=' '>"+inventory.num1+"</td>"+
					"<td class=' ' style='border:3px solid red;'>"+inventory.num2+"</td>"+
					"<td class=' '>"+inventory.scan_code+"</td>"+
					"<td class=' '>"+inventory.product_code+"</td>"+
					"<td class=' '>"+inventory.design_code+"</td>"+
					"<td class=' '>"+inventory.type+"</td>"+
					"<td class=' '>"+inventory.year+"</td>"+
					"<td class=' '>"+inventory.season+"</td>"+
					"<td class=' '>"+inventory.flow+"</td>"+
					"<td class=' '>"+inventory.material+"</td>"+
					"<td class=' '>"+inventory.color+"</td>"+
					"<td class=' '>"+inventory.size+"</td>"+
					"<td class=' '>"+inventory.hide+"</td></tr>";
			$("#stackTable > tbody").append(a);
			if(this.c=="gradeC odd"){
				this.c="gradeC even";
			}else{
				this.c="gradeC odd";
			}
			inventorys.push(inventory);
			return;
       }
       
     this.add3 = function (inventory) {
     	var index=0;
		if(this.inventorys.length==0){
			//$("#stackTable > tbody").css("border","3px solid red");
			$("#stackTable > tbody").children().remove();
			
			//return;
    	}
    	for (var i = 0; i < this.inventorys.length; i++) {
    		
  			if(inventory.scan_code == this.inventorys[i].scan_code&&inventory.toorgid==this.inventorys[i].toorgid){
  				if(inventory.num1<this.inventorys[i].num2){
  					alert("你不可以将"+scan_code+"的计划数量改为"+inventory.num1+",\因为你已经扫描了货存:"+this.inventorys[i].num2+"件。");
  					return;
  				}
  				this.inventorys[i].num1=inventory.num1;
  				//$("#"+inventory.scan_code+" td:nth-child(2)").text(this.inventorys[i].num1);
  				$("#index"+index).find(">:first-child").text(this.inventorys[i].num1);
  				if(inventory.num1==this.inventorys[i].num2){
  				$("#index"+index).find(">:first-child").next().css('border','3px solid green');

  				}else{
  					$("#index"+index).find(">:first-child").next().css('border','3px solid red');

  				}

  				return;
  			}
		index++;
		}
		var a="	<tr id='index"+index+"' class='"+this.c+"'>"+
			"<td class=' '>"+inventory.num1+"</td>"+
					"<td class=' ' style='border:3px solid red;'>"+inventory.num2+"</td>"+
					"<td class=' '>"+inventory.scan_code+"</td>"+
					"<td class=' '>"+inventory.product_code+"</td>"+
					"<td class=' '>"+inventory.design_code+"</td>"+
					"<td class=' '>"+inventory.type+"</td>"+
					"<td class=' '>"+inventory.year+"</td>"+
					"<td class=' '>"+inventory.season+"</td>"+
					"<td class=' '>"+inventory.flow+"</td>"+
					"<td class=' '>"+inventory.material+"</td>"+
					"<td class=' '>"+inventory.color+"</td>"+
					"<td class=' '>"+inventory.size+"</td>"+
					"<td class=' '>"+inventory.designer+"</td>"+	
					"<td class=' '>"+inventory.price+"</td>"+	
					"<td class=' '>"+inventory.ratio+"</td>"+	
					"<td class=' '>"+inventory.active+"</td>"+	
					"<td class=' '>"+inventory.name+"</td>";
					if(action=="organization_distribute"){
						a +="<td class='change'>"+inventory.toorgid+"</td>";
					}
					a +="</tr>";
			$("#stackTable > tbody").append(a);
			if(this.c=="gradeC odd"){
				this.c="gradeC even";
			}else{
				this.c="gradeC odd";
			}
			inventorys.push(inventory);
			return;
       }
    this.isReady=function(){
    	if(this.inventorys.length==0){
    		return false;
    	}
    	
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if(this.inventorys[i].num2 != this.inventorys[i].num1)
			return false;
		}
		return true;
    }
    
    this.isPartiallyReady=function(){
    	if(this.inventorys.length==0){
    		return false;
    	}
    	
    	for (var i = 0; i < this.inventorys.length; i++) {
  			if(this.inventorys[i].num2 != this.inventorys[i].num1&&this.inventorys[i].num2>0)
			return false;
		}
		return true;
    }
}
