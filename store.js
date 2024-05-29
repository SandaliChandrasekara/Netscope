
	var price1;
	var price2;
	var price3;
	var price4;
	var price5;
	var quantityArray =[];
	var productArray =[];
	var priceArray =[];
	var alertMessage =[];


function shopedProduct1(){
	price1=document.getElementById('product1').value*700;	
	window.alert(document.getElementById('product1').value+" Antman ticket is added to your cart Rs"+price1);
	quantityArray.push(document.getElementById('product1').value);
	productArray.push("Ant-Man and the Wasp: Quantumania");
	priceArray.push(price1);
	
}

function shopedProduct2(){
	price2=document.getElementById('product2').value*600.00;	
	window.alert(document.getElementById('product2').value+" Bhoola ticket is added to your cart Rs "+price2);
	quantityArray.push(document.getElementById('product2').value);
	productArray.push("Bhoola");
	priceArray.push(price2);
}

function shopedProduct3(){
	price3=document.getElementById('product3').value*850.00;	
	window.alert(document.getElementById('product3').value+" John-Wick ticket is added to your cart. Rs"+price3);
	quantityArray.push(document.getElementById('product3').value);
	productArray.push("John Wick- Chapter 4");
	priceArray.push(price3);
}

function shopedProduct4(){
	price4=document.getElementById('product4').value*750.00;	
	window.alert(document.getElementById('product4').value+" Gajaman(3D) ticket is added to your cart. Rs"+price4);
	quantityArray.push(document.getElementById('product4').value);
	productArray.push("Gajaman(3D)");
	priceArray.push(price4);
}

function shopedProduct5(){
	price5=document.getElementById('product5').value*800.00;	
	window.alert(document.getElementById('product5').value+" Pathu Thala ticket added to your cart. Rs"+price5);
	quantityArray.push(document.getElementById('product5').value);
	productArray.push("Pathu Thala");
	priceArray.push(price5);
}



function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var credit = document.getElementById("Cnumber").value;
	var mobile = document.getElementById("Mnumber").value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
	
	if(name.length < 3){
		alert("Name must be filled out");
		return false;
	}
	
	
	if(!email.match(mailformat)){
		alert("Email must be filled out");
		return false;
	}
	
	
	if(address==""){
		alert("Address must be filled out");
		return false;
	}

	if(credit==""){
		alert("Credit card number must be filled out");
		return false;
	}

	if(mobile.length < 9){
		alert("Mobile Number must be filled out");
		return false;
	}

	var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
	
	
	window.alert("Customer name : "+document.getElementById('name').value + "\nCustomer Email : "+document.getElementById("email").value + "\nYour order summary : \n" + alertMessage.join("\n") + "\nYour total is Rs " + totalPrice.toString() + "\nThank you for shopping with Netscope online shop.\nYour tickets will be delivered within soon.")

}