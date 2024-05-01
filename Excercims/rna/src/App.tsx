import React from 'react';

function toRna(dna: string): string {
  let rna = '';
  for (let c of dna) {
    switch (c) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        throw new Error('Invalid input DNA.');
    }
  }
  return rna;
}

function DnaToRnaConverter() {
  const dnaInput: string = 'GCTA'; 
  const rnaOutput: string = toRna(dnaInput);

  return (
    <div>
      <h2>DNA to RNA Converter</h2>
      <p>Input DNA: {dnaInput}</p>
      <p>Output RNA: {rnaOutput}</p>
    </div>
  );
}

export default DnaToRnaConverter;
