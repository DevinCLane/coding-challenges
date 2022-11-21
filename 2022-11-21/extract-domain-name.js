/* 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const extractDomainName = str => {
    // remove https://
    return str.replace('https://', '')
    // remove http://
        .replace('http://', '')
        // www .
        .replace('www.', '')
        // create a new array, split at the .
        .split('.')
        // return the 1st element of that array
        [0]
    
}

console.log(extractDomainName("http://github.com/carbonfive/raygun"), "github")
console.log(extractDomainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(extractDomainName("https://www.cnet.com"), "cnet")