
import React from 'react'

const Ejercicio = () => {
    function rifar() {
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
        document.getElementById('t').innerHTML = 'Tabla de Multiplicar'
        tabla(numeros.at(0))
        document.getElementById('r').innerHTML = 'Operaciones Básicas'
        operaciones(numeros.at(1), numeros.at(2))
        document.getElementById('f').innerHTML = 'Factorial'
        document.getElementById('factorial').innerHTML = numeros.at(3) + '!=' + factorial(numeros.at(3))
    }

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
        document.getElementById('multiplicar').innerHTML = cadena
    }

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