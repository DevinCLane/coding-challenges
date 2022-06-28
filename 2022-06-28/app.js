/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

const DNAStrand = dna => {
    // replace every A with T and T with A
    // replace every C with G and G with C
    // loop through array, check letter, push complement letter to new string, return new string
    let result = ""
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                result += 'T'
                break;
            case 'T':
                result += 'A'
                break;
            case 'C':
                result += 'G'
                break;
            case 'G':
                result += 'C'
                break;
    }
}
return result
}

// test cases

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"),"CATA","String GTAT is")   