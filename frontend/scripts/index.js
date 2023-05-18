import('../scripts/bancoDeDados.js').then(module => {
    const minhaVariavel = module.data;
    console.log(minhaVariavel); // Prints 'Valor da minha variável'
  }).catch(error => {
    console.error('Error:', error);
  });