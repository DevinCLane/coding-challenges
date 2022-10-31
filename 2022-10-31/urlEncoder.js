/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example: domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites" 
domainName("https://www.cnet.com") == "cnet

https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

const domainName = str => {
// remove https://
    return str.replace('https://', '')
    // remove http://
    .replace('http://', '')
// remove www.
    .replace('www.', '')
    // use split ('.') to create an array with 'cnet' and 'com etc etc'
    .split('.')
    // return the first element of the array
    [0]
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")