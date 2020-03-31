var longjeux = 900;
var largjeux = 600;

var longbrique = 50;
var largbrique = 40;

var coordx_barre = 400;
var longbarre = 100;
var largbarre = 25;

var deplacement_balle_sur_x = 600;
var deplacement_balle_sur_y = 300;
var taille_balle = 20;

var delai =0; 

var boucleJeu = setInterval( rafraichirJeux, 0.1);

function setup() {
  createCanvas(longjeux, largjeux);
  background(255, 0, 0);
  fill(255, 0, 255);
  stroke(0, 0, 0);
  


  //bloc;
}
function draw() {
  background(0);
  for (let u = 0; u < 200; u += 40) {
    for (let i = 0; i < width; i += 50) {
      fill(255, 0, 0);
      rect(i, u, longbrique, largbrique);
    }
  }
  //Barre
  fill(255, 255, 255);
  rect(coordx_barre, largjeux - largbarre, longbarre, largbarre);

  //Balle
  fill(255, 255, 255);
  ellipse(deplacement_balle_sur_x, deplacement_balle_sur_y, taille_balle, taille_balle);
  
  
  // rebond balle

  // barre déplacement balle
  //bloc = new bloc(100, 40);
    
  
  
  //rafriachissement fenetre
  //fill(255, 0, 0);
  //rect(0, 0, longjeux, largjeux); 
}

  

function commandes() {
  if(keyPressed) {
    delai = frameCount;
    if (key == 'q' || key =='Q') {
    if (coordx_barre > 0  ){
        coordx_barre -= 25
      }
      if (key == 'd' || key =='D') {
      if (coordx_barre < largjeux ){
        coordx_barre += 25
      }
    }
   } 
  }
}
  



