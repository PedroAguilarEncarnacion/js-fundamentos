/*
 CLOSURE: función que tiene acceso a variables de un Ámbito externo,
 incluso después de que esa funcinan haya terminado de ejecutarse.

 Ãmbito léxico: cada vez que se declara una función,
 crea su propio Ámbito léxico, y puede acceder a las variables
 dentro de ese Ámbito y a las variables en Ámbitos superiores.
*/

function outerFunction () {
    let outerVariable = "I am from outer function"

    function innterFunction () {
        console.log(outerVariable)
    }

    return innterFunction
}

//const closureExample = outerFunction()
//closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = "Hello, "
    function inner (name) {
        console.log(message + name)
    }
    return inner
}
const closureA = outer()
const closureB = outer()
closureA("Alice")
closureA("Bob")