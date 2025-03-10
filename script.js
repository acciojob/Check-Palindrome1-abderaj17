// complete the given function

function palindrome(str){
	let reversedWord = "";
 for(let i = str.length; i > 0; i--){
	 reversedWord += str[i];
 }
	if(reversedWord == str){
		return true;
	}
	return false;
}
module.exports = palindrome
