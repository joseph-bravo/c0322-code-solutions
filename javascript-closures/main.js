function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical School: ', medicalSchool('Joseph Bravo'));
console.log('Law School: ', lawSchool('Joseph Bravo'));
