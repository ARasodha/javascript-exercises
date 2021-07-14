// E2 Point Mutations:
/*
Input: string
Output: number
Rules
- calculate the Hamming distance between two DNA strands
- Hamming distance: the number of differences between to homologous DNA strands taken from
different genomes with a common ancestor, we get a mea sure of the minimum number of point
mutations that could have occurred on the evolutionary path between two strands
- The Hamming distance is only defined for sequences of equal length. If two sequences
have unequal length, compute the hamming distance over the shorter length

Data Structures
- working with strings

Algorithm
- create DNA class
  - strand property equal to the argument passed in of the DNA sequence
- instance methods:
  - hammingDistance() 
    - takes a new sequence to compare as a argument
    - returns number of differences letters 
    - if 1 sequence is larger, it ignores extra characters on it
  - resize() - helper method will resize the longer string to be the same size as the shorter
  string without mutating the original
  - calculateDistance - helper method will calculate the difference of letters in each
  sequence and return the difference

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(newStrand) {
    let [newStrandResized, originalStrand] = this.resize(newStrand, this.strand)
    return this.calculateDistance(newStrandResized, originalStrand);
  }
    
  resize(firstStrand, secondStrand) {
    if (firstStrand.length > secondStrand.length) {
      firstStrand = firstStrand.slice(0, secondStrand.length);
    } else if (firstStrand.length < secondStrand.length) {
      secondStrand = secondStrand.slice(0, firstStrand.length);
    }
    return [firstStrand, secondStrand];
  }

  calculateDistance(firstStrand, secondStrand) {
    let distance = 0;
    firstStrand.split('').forEach((letter, idx) => {
      if (letter !== secondStrand[idx]) distance++;
    });

    return distance;
  }
}

module.exports = DNA;

// Alternative Solution:
// class DNA {
//   constructor(strand) {
//     this.strand = strand;
//   }

//   hammingDistance(comparison) {
//     let minLength = Math.min(this.strand.length, comparison.length);
//     let differences = 0;

//     for (let i = 0; i < minLength; i++) {
//       if (this.strand[i] !== comparison[i]) {
//         differences += 1;
//       }
//     }

//     return differences;
//   }
// }

// module.exports = DNA;