function VisualizzaOperazioni() {
    var a = 8;
    var b = 10;
    var c = 12;
    var media = (a+b+c)/3;
    var minimo = Math.min(a,b,c);
    var massimo = Math.max(a,b,c);
    alert("A = " + a + " B = " + b + " C = " + c);
    alert("Valore Medio " + media + " Valore Massimo " + massimo + " Valore Minimo " + minimo)
}