describe("mdc", function(){
	it("MDC de dois numeros", function(){
		var expResult = 3;
		var result = mdc(10, 6);
		
		expect(expResult).toEqual(result);
	});
});