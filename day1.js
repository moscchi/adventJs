function contarOvejas(ovejas) {
  const rpta = ovejas.filter(ovejita => ovejita.name.toLowerCase().includes('a') && ovejita.name.toLowerCase().includes('n') && ovejita.color.includes('rojo'));
  return rpta;
};

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
];

console.log(contarOvejas(ovejas));
