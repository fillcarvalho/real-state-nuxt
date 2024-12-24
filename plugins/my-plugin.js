export default (context, inject) => {
  inject('name', 'Filipe');
  inject('lastName', 'Costa');

  inject('createPhrase', (name) => `Olá ${name}`)
}
