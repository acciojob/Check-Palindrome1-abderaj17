function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split("").reverse().join("");

    // Compare the original cleaned string with the reversed one
    return cleanStr === reversedStr;
}

module.exports = palindrome;
