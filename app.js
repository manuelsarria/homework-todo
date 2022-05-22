

require('colors');

const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async() => {

    console.log('hola mundo');

    let opt = '';

    const tareas = new Tareas();

    const tareaDB = leerDb();

    if (tareaDB) {
        tareas.cargarTareasForArray(tareaDB);
    }


    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion: ')
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoTareas();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                tareas.listarPendientesCompletadas(false);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);

                break;
    
        }

        guardarDB(tareas.listadoArr);

    //    const tarea = new Tarea('comprar comida');
    //    console.log(tarea);

       if (opt !== '0') await pausa();

       console.log({ opt });
        
    } while (opt !== '0');

}

main();