/* 
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. 
For example: 
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites" 
domainName("https://www.cnet.com") == "cnet
*/

// 

const urlParser = url => {
    // remove https://
    // remove http://
    // remove www.
    // remove .com
    const domainName = url.replace('https://', '').replace('http://', '').replace('www.', '').replace('com', '')
    const domainNameArray = domainName.split('.')
    return domainNameArray[0]
}

console.log(urlParser("http://github.com/carbonfive/raygun"), "github")
console.log(urlParser("http://www.zombie-bites.com"), "zombie-bites")
console.log(urlParser("https://www.cnet.com"), "cnet")