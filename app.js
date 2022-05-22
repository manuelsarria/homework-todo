

require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async() => {

    console.log('hola mundo');

    let opt = '';

    do {

       opt = await inquirerMenu();

       if (opt !== '0') await pausa();

       console.log({ opt });
        
    } while (opt !== '0');

}

main();