
### Leap Year Checker

El siguiente código implementa una función para verificar si un año dado es bisiesto y una componente de React que muestra si el año actual es bisiesto o no.

```typescript
// leap.ts
function isLeap(year: number): boolean {
  return year % 400 === 0 ? (year % 4 === 0 ? true : false) : year % 4 === 0 && year % 100 !== 0;
}

function LeapYearChecker() {
  const currentYear: number = new Date().getFullYear();
  const isCurrentYearLeap: boolean = isLeap(currentYear);

  return (
    <div>
      <h2>Leap Year Checker</h2>
      <p>Current year: {currentYear}</p>
      <p>Is current year a leap year? {isCurrentYearLeap ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default LeapYearChecker;
```

### DNA to RNA Converter

Este código convierte una cadena de ADN en su equivalente de ARN utilizando una función de conversión y muestra el resultado en una interfaz de React.

```typescript
// rna.tsx
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
```

Estos fragmentos de código pueden ser utilizados en un proyecto de React con TypeScript. El primero permite verificar si el año actual es bisiesto, mientras que el segundo convierte una secuencia de ADN en ARN.
