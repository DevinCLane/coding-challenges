/*
https://www.codewars.com/kata/514a024011ea4fb54200004b

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet
*/

// take in a string, it will include "extra" characters like . and // , lower case
// return just the domain name as a string: e.g., everything between www or // and .com etc
// https://www.cnet.com => cnet

function domainName(url) {
    let noHttp = url.replace("http://", ".")
    let noWww = noHttp.replace("www.", "")
    let noHttps = noWww.replace("https://", ".")
    let arr = noHttps.split('.')
    return arr[0]
    // get rid of http://
    // if has www. also get rid of this
    // get rid of everything including the dot after this
    // search for the url within the string
    // split at the ., if there's no dot on the left, split at the /
    // return only that part of the string
  }
  
  console.log(domainName('http://github.com/carbonfive/raygun'), 'github')
  console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites')
  console.log(domainName('https://www.cnet.com'), 'cnet')