function CalcolaPreventivo() {

    var SommaPreventivo = 0

    if (document.getElementById(opzione1).checked) {
       SommaPreventivo = SommaPreventivo + 900;
    }
    else if (document.getElementById(opzione2).checked) {
      SommaPreventivo = SommaPreventivo + 1100  ;
    }
    else if (document.getElementById(opzione3).checked) {
        SommaPreventivo = SommaPreventivo + 300;
    }
    else if (document.getElementById(opzione4).checked) {
        SommaPreventivo = SommaPreventivo + 300;
    }
    else if (document.getElementById(opzione5).checked) {
        SommaPreventivo = SommaPreventivo + 300;
    }
    else if (document.getElementById(opzione6).checked) {
        SommaPreventivo = SommaPreventivo + 600;
    }
    else if (document.getElementById(opzione7).checked) {
        SommaPreventivo = SommaPreventivo + 300;
    }
    else if (document.getElementById(opzione8).checked) {
        SommaPreventivo = SommaPreventivo + 300;
    }
    else if (document.getElementById(opzione9).checked) {
        document.getElementById(opzione9).value = 400;
    }
    else if (document.getElementById(opzione10).checked) {
        SommaPreventivo = SommaPreventivo + 800;
    }
    else if (document.getElementById(opzione11).checked) {
        SommaPreventivo = SommaPreventivo + 450;
    }
    else if (document.getElementById(opzione12).checked) {
        SommaPreventivo = SommaPreventivo + 250;
    }
    else if (document.getElementById(opzione13).checked) {
        SommaPreventivo = SommaPreventivo + 400;
    }
    else if (document.getElementById(opzione14).checked) {
        SommaPreventivo = SommaPreventivo + 600;
    }
    else if (document.getElementById(viterbo).checked) {
        SommaPreventivo = SommaPreventivo + [(SommaPreventivo/100)*5];

    } else if (document.getElementById(rieti).checked) {
        SommaPreventivo = SommaPreventivo + [(SommaPreventivo/100)*5];
    }
var PrezzoIva = SommaPreventivo + [(SommaPreventivo/100)*22];

document.getElementById("testo").innerHTML ='<Grazie di aver richiesto un preventivo!<br/>Il prezzo non comprensivo di I.V.A. è: ' + SommaPreventivo + '<br/>Il prezzo comprensivo di I.V.A. è: ' + PrezzoIva;

}
CalcolaPreventivo()