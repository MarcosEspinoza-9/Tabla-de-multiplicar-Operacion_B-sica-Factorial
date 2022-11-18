
import React from 'react'

const Ejercicio = () => {
    function rifar() {

      //LO QUE RECIBE EN LA CAJA DE TEXTO LO VA A OBTENER Y SE DECLARA UNA VARIABLE DE TIPO ARREGLO DONDE SE VAN A GUARDAR LOS DATOS
        document.getElementById('t').innerHTML=''
        document.getElementById('multiplicar').innerHTML = ''
        document.getElementById('r').innerHTML=''
        document.getElementById('resultados').innerHTML = ''
        document.getElementById('f').innerHTML=''
        document.getElementById('factorial').innerHTML = ''
        var numeros = []
        for (var i = 1; i <= 4; i++) {
            if (isNaN(parseFloat(document.getElementById('Numero' + i).value))) {
                document.getElementById('Numero' + i).value=''
                document.getElementById('Numero' + i).focus()
                //manda una alerta de que no se ingreso ningun datos
                alert('Debes colocar un numero en la caja del Numero' + i)
                return
            }
            const n = parseFloat(document.getElementById('Numero' + i).value)
            numeros.push(n)
        }
        //MUESTRA LA TABLA DE MULTIPLICAR
        document.getElementById('t').innerHTML = 'Tabla de Multiplicar'
        tabla(numeros.at(0))
        //MUESTRA LA TABLA DE OPERACIONES BASICAS
        document.getElementById('r').innerHTML = 'Operaciones Básicas'
        operaciones(numeros.at(1), numeros.at(2))
        //MUESTRA EL RESULTADO DEL FACTORIAL
        document.getElementById('f').innerHTML = 'Factorial'
        document.getElementById('factorial').innerHTML = numeros.at(3) + '!=' + factorial(numeros.at(3))
    }

    //SE HACE UNA FUNCION PARA HACER LAS OPERACIONES DE LA TABLA DE MULTIOLICAR
   //GENERA NUMEROS DEL 1 AL 11 Y LOS AGREGA EN LA TABLA HACIENDOLE UN PARCEO PARA QUE SEAN NUMEROS
   //ENTONCES; N ES UN NUMERO A INGRESAR Y LO VAMOS A MULTIPLICAR DEL 1 AL 10 COMO ESTA DICHO EN EL ARREGLO
    function tabla(n) {
        var cadena = ''
        for (var i = 1; i < 11; i++) {
            cadena += '<tr>'
                + '<td>' + (parseInt(n)) + '</td>'
                + '<td>x</td>'
                + '<td>' + parseInt(i) + '</td>'
                + '<td>=</td>'
                + '<td>' + (parseInt(n * i)) + '</td>'
                + '</tr>'
        }
        //IMPRIMIR EL RESULTADO
        document.getElementById('multiplicar').innerHTML = cadena
    }


    //SE DECLARO OTRA FUNCION PARA HACER OPERACIONES BASICAS
    function operaciones(x, y) {
        var cadena = ''
        var ops = {
            suma: function suma(x, y) {
                return parseFloat(x) + parseFloat(y)
            },
            resta: function resta(x, y) {
                return parseFloat(x) - parseFloat(y)
            },
            multiplicacion: function multiplicacion(x, y) {
                return parseFloat(x) * parseFloat(y)
            },
            division: function division(x, y) {
                return parseFloat(x) / parseFloat(y)
            }
        }

        //LA CADENA SE ASIGA EL + EL VALOR DE Y APLICA LA OPERACION A REALIZAR
        cadena += x + '+' + y + '=' + ops.suma(x, y) + '</br>'
        cadena += x + '-' + y + '=' + ops.resta(x, y) + '</span></br>'
        cadena += x + 'x' + y + '=' + ops.multiplicacion(x, y) + '</span></br>'
        cadena += x + '/' + y + '=' + ops.division(x, y) + '</span></br>'
        document.getElementById('resultados').innerHTML = cadena
    }

    function factorial(x) {
        if (x === 1) {
            return x
        }
        return x * factorial(x - 1);
    }

    return (
        <div>
            <h1>Practica de Clase</h1>
            <input type='text' id='Numero1' placeholder='Numero1'></input>
            <br></br>
            <input type='text' id='Numero2' placeholder='Numero2'></input>
            <br></br>
            <input type='text' id='Numero3' placeholder='Numero3'></input>
            <br></br>
            <input type='text' id='Numero4' placeholder='Numero4'></input>
            <br></br>
            <button onClick={e => { rifar() }}>Calcular</button>
            <br></br>
            <br></br>
          
            <p id="t"></p>
            <table id='multiplicar' align='center'></table>
            <p id='r'></p>
            <p id='resultados'></p>
            <p id='f'></p>
            <p id='factorial'></p>
        </div>
    )
}

export default Ejercicio