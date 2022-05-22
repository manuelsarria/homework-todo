const inquirer = require('inquirer');
require('colors');



const preguntas = [{

    type: 'list',
    name: 'opcion',
    message: 'que deseas hacer ?',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tareas'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
] 
}
];

const inquirerMenu = async() => {


    console.clear();
    console.log('======================'.green);
    console.log('seleccionde una opcion'.green);
    console.log('======================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}


const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `presione ${'enter'.green} para continuar`,
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)

}

module.exports = {
    inquirerMenu,
    pausa
}