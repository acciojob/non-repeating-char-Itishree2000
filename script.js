function firstNonRepeatedChar(str) {
 // Write your code here
	let n=str.length;
	if(n===0)
	{
		return null;
	}
	let i=str[0],j=str[0],firstNonRepeatedChar=null;
	for(let i=0;i<n;i++){
		let isRepeated=false;

	for(let j=0;j<n;j++){
		if(i!=j && str[i]===str[j])
		{
			isRepeated=true;
			break;
		}
	}
		if(!isRepeated)
		{
			firstNonRepeatedChar=str[i];
			break;
		}
		return firstNonRepeatedChar;
	}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
