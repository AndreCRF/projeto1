function mdc(a, b){
	var resto;
	
	do{
		resto = a % b;
		
		a = b;
		b = resto;
	} while (resto != 0);

	return a;
}