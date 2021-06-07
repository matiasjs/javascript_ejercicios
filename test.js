jsScope = this;

$(document).ready(function(){
    $('#ejercicios #li1 #resultado').removeClass().addClass((comprobarEjercicio1() ? 'success' : 'fail'));
    $('#ejercicios #li2 #resultado').removeClass().addClass((comprobarEjercicio2() ? 'success' : 'fail'));
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
        const array2 = [1, 2, [4, 0]];
    
        const resultado1 = ejercicio2(array1);
        const resultado2 = ejercicio2(array2);
    
        return (resultado1 !== array1 && resultado1[0] === array1[0] && resultado1[3] === array1[3]) && (resultado2 !== array2 && resultado2[0] === array2[0] && resultado2[1] === array2[1]);   
    } catch (_) {
        return false;
    }
}