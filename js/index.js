function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        console.log(DNAStrand.pairs[c]);
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

DNAStrand('ATTGC');