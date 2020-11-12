function palindrome(message) {
    return (message === message.split("").reverse().join(""));

}

palindrome('hello'); 
palindrome('abcba');