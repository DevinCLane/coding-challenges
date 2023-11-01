/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example: domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites" 
domainName("https://www.cnet.com") == "cnet

https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

const extractDomainName = (url) => {
    // split by http://
    return url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(".")[0];
};

console.log(extractDomainName("http://github.com/carbonfive/raygun"), "github");
console.log(extractDomainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(extractDomainName("https://www.cnet.com"), "cnet");
