var Nombre_alumnos=[]
function submit(){
    var Ver_alumno=[]
    for(var i=1; i<5; i++){
      var nombres=document.getElementById("nombre_alumno_" + i).value;
      Nombre_alumnos.push(nombres);
  }
  var longitud_arreglo=Nombre_alumnos.length;
  for(var o=0; o<longitud_arreglo; o++){
   Ver_alumno.push("<h4>" + Nombre_alumnos[o] + "</h4>");
  }
  document.getElementById("mostrar_nombres_con_comas").innerHTML=Ver_alumno;
  document.getElementById("botón_enviar").style.display="none";
  document.getElementById("botón_ordenar").style.display="inline-block";
}

function sorting()
{
   Nombre_alumnos.sort();


   var nombres_ordenados =[];
    var longitud_ordenada = Nombre_alumnos.length;


    for(var g = 0; g < longitud_ordenada; g++){
        nombres_ordenados.push("<h4>"+Nombre_alumnos[g]+"</h4>")
    }
document.getElementById("mostrar_nombres_sin_comas").innerHTML= nombres_ordenados;


}
