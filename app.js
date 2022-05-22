

require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

    console.log('hola mundo');

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
        
        }

    //    const tarea = new Tarea('comprar comida');
    //    console.log(tarea);

       if (opt !== '0') await pausa();

       console.log({ opt });
        
    } while (opt !== '0');

}

main();