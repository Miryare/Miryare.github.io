//2016 07 20 Fondo verde con elipse q sigue al  mouse

//declaro variable diametro
var diametro;

//asigno valor
diametro = 50;

//hay variables locales y globales. (adentro y fuera de una funcion)

//para ejecutar una funcion blabla() hay q poneral dentro de setup o draw


function setup() {
  
  
  //createCanvas(dimesionhorizontal,Dimensionvertical);
  createCanvas(400,300);
  //background (red,green,blue);
  background (0,255,0);
}

//se ejecuta luego de setup y se ejecuta 60 veces por segundo
function draw() {
  //dibuja una elipse (posicion en x, y, ancho , alto)
  //pncel por defecto es de un pinxel de ancho negro y relleno blanco
  //noFill(); lo deja sin relleno
  
  var anchoBorde= 10;
  
   //para no ver la estela del elipse
    background (0,255,0);
  
  estilo1();
  
  diametro = diametro + 1;
  
  
}

function estilo1(){
 //definir el tamaño del borde
  //strokeWeight(px);
  strokeWeight(10);
  //color del borde
  stroke (255,0,0);
  fill(1,1,1);
  ellipse(mouseX,mouseY,diametro,diametro); 
}

function estilo2(){
 //definir el tamaño del borde
  //strokeWeight(px);
  strokeWeight(10);
  //color del borde
  stroke (255,255,0);
  fill(1,1,1);
  ellipse(mouseX,mouseY,diametro,diametro); 
}
