function assert(expr){
 if(!expr){
  output(false, "Erreur d'intégrité des données");
  throw new Error("Erreur d'intégrité.");
 }
 output(true, "intégrité OK.");
}

function output(result, message){
 var p = document.createElement('p');
 message += result ? ' : SUCCESS' : ' : FAILURE';
 p.style.color = result ? '#0c0' : '#c00';
 p.innerHTML = message;
 document.body.appendChild(p);
}

