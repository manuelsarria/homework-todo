require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('======================'.green);
        console.log('seleccionde una opcion'.green);
        console.log('======================\n'.green);
    
        console.log(`${ '1.'.green } crear una tarea`);
        console.log(`${ '2.'.green } listar tareas`);
        console.log(`${ '3.'.green } listar tareas completadas`);
        console.log(`${ '4.'.green } listar tareas pensientes`);
        console.log(`${ '5.'.green } completar tareas`);
        console.log(`${ '6.'.green } borrar tareas`);
        console.log(`${ '0.'.green } salir`);
    
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
    
        });
    
        readLine.question('Seleccione una opcion: ',(opt) => {
    
            readLine.close();
            resolve(opt);
        })
    });


}

const pausa = () => {

    return new Promise( resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout

        });

        readLine.question(`Presiona ${'ENTER'.blue} `,(opt) => {

            readLine.close();
            resolve();
        })

    })


}


module.exports = {
    mostrarMenu,
    pausa
}