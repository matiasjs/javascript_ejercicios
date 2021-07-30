jsScope = this;

$(document).ready(function(){
    $('#ejercicios #li1 #resultado').removeClass().addClass((comprobarEjercicio1() ? 'success' : 'fail'));
    $('#ejercicios #li2 #resultado').removeClass().addClass((comprobarEjercicio2() ? 'success' : 'fail'));
    $('#ejercicios #li3 #resultado').removeClass().addClass((comprobarEjercicio3() ? 'success' : 'fail'));
    $('#ejercicios #li4 #resultado').removeClass().addClass((comprobarEjercicio4() ? 'success' : 'fail'));
    $('#ejercicios #li5 #resultado').removeClass().addClass((comprobarEjercicio5() ? 'success' : 'fail'));
    $('#ejercicios #li6 #resultado').removeClass().addClass((comprobarEjercicio6() ? 'success' : 'fail'));
    $('#ejercicios #li7 #resultado').removeClass().addClass((comprobarEjercicio7() ? 'success' : 'fail'));
    $('#ejercicios #li8 #resultado').removeClass().addClass((comprobarEjercicio8() ? 'success' : 'fail'));
    $('#ejercicios #li9 #resultado').removeClass().addClass((comprobarEjercicio9() ? 'success' : 'fail'));
    $('#ejercicios #li10 #resultado').removeClass().addClass((comprobarEjercicio10() ? 'success' : 'fail'));
});

function comprobarEjercicio1() {
    try {
        return ejercicio1([1, 2, 3]) && !ejercicio1('asd');
    } catch (_) {
        return false;
        
    }
}

function comprobarEjercicio2() {
    try {
        const array1 = [1, 2, 4, 0];
        const resultado = ejercicio2(array1);

        return resultado[4] === 9;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio3() {
    try {
        const array1 = [1, 2, 4, 0];
    
        return ejercicio3(array1) === array1[0];
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio4() {
    try {
        const array1 = [1, 2, 4, 0];
    
        return ejercicio4(array1) === array1[3];
    } catch (_) {
        return false;
    }
}


function comprobarEjercicio5() {
    try {
        const array1 = [1, 2, 4, 3];
    
        return ejercicio5(array1) === 10;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio6() {
    try {
        const array1 = [1, 2, 3, 4];
        const resultado = ejercicio6(array1);
        return resultado[0] === 4 && resultado[1] === 3 && resultado[2] === 2 && resultado[3] === 1;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio7() {
    try {
        const array1 = [4, 2, 1, 7];
        const resultado = ejercicio7(array1);
        return resultado[0] === 1 && resultado[1] === 2 && resultado[2] === 4 && resultado[3] === 7;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio8() {
    try {
        const array1 = [5, 5, 1, 1, 5, 3, 2, 9];
        
        return ejercicio8(array1) === 5;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio9() {
    try {
        const array1 = [4, 2, 1, 7];
        const resultado = ejercicio9(array1);
        return resultado[0] === 5 && resultado[1] === 3 && resultado[2] === 2 && resultado[3] === 8;
    } catch (_) {
        return false;
    }
}

function comprobarEjercicio10() {
    try {
        const array1 = [4, 2, 1, 7];
        
        return array1.includes(ejercicio10(array1));
    } catch (_) {
        return false;
    }
}
