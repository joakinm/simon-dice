var i;
var jugadas = 1;
var activado;
var arreglo = new Array();

function nuevajugada() // muestra diferentes focos en alguno de los 4 botones
{
    activado = colorearobjeto();
    setInterval(document.getElementById("boton"+ activado).focus(),3000);
   arreglo[jugadas-1] = activado;
   i=0;
   //document.getElementById("comienzo").focus();
}

function repetiryagregar(){
    var j;
    for (j=0;j<=jugadas-1;j++)
    {
        setInterval(document.getElementById("boton"+ arreglo[j]).focus(),3000);
    }
    jugadas++;
    nuevajugada();
}
function presiono(nro) //cuando el usuario aprieta un boton corre esta funcion, pasa el nro del boton
{
    if(arreglo.length != 0)
    {
        if(nro == arreglo[i])
        {
            i++;
        }
        else
        {
            alert("perdio!");
            arreglo = new Array();
            jugadas=1;
        }
        if(i == jugadas)
        {
        alert("siguiente nivel");
        repetiryagregar();
        }
    }
    else
    {
        alert("no empezaste, o no empezaste de nuevo");
    }
    
}
function colorearobjeto()
{
    var num=Math.random();
    if(num < 0.25) return 1;  // probabilidad a 1 
    else if(num < 0.50) return 2; //  probabilidad a 2
    else if(num < 0.75) return 3 // probabilidad a 3
    else return 4;  //probabilidad a 4
}