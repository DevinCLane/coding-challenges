/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example: domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites" 
domainName("https://www.cnet.com") == "cnet

https://www.codewars.com/kata/514a024011ea4fb54200004b

Replace (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
Split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 
*/

const domainName = str => {
    // remove https://
    const domain = str.replace("https://", '').replace("http://", '').replace('www.', '').replace('com', '')
    // remove www.
    // remove com
    // split the string by the '.'
    const domainArray = domain.split('.')
    // return the first element of the resultant array
    return domainArray[0]
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.comn"), "cnet")