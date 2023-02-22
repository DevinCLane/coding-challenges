/* 
Extract domain name

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example: domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites" 
domainName("https://www.cnet.com") == "cnet

https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

const domainName = str => {
    // slice off http://
    // slice off https://
    // split the string at the .
    // return the 0 index
    return str.replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('.')
        [0]
}


console.log(domainName("http://github.com/carbonfive/raygun"), "github" )
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites" )
console.log(domainName("https://www.cnet.com"), "cnet")