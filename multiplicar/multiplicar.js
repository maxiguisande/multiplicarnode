const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });
    })
}

let listarTabla = (base, limite) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`.rainbow);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}