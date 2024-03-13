const passwordBox = document.getElementById('password');
const copyBox = document.getElementById('copy');

function generator() {
  let charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  let password = [];
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * charset.length);
    password.push(charset[random]);
  }
  passwordBox.value = password.join('');
}

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
  console.log('Contraseña copiada en el portapapeles');
  console.log(passwordBox.value);
  alert('Contraseña copiada en el portapapeles');
}
