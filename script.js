var longjeux = 900;
var largjeux = 600;

var longbrique = 50;
var largbrique = 30;

var coordx_barre = 500;
var longbarre = 100;
var largbarre = 25;

var deplacement_balle_sur_x = 300;
var deplacement_balle_sur_y = 300;
var taille_balle = 20;
var vitesse_balle = 1;

var direction_X = 1;
var direction_Y = -1;

var delai = 0;

var boucleJeu = setInterval(rafraichirJeux, 1);

function rafraichirJeux() {
  createCanvas(longjeux, largjeux);
  background(255, 0, 0);
  fill(255, 0, 255);
  stroke(0, 0, 0);
  background(0);
  barre();
  setup();
  commande();
  balle();
  rebond();
}

function setup(){
  //brique

  for (let u = 0; u < 200; u += largbrique) {
    for (let i = 0; i < width; i += longbrique) {
      fill(255, 0, 0);
      rect(i, u, longbrique, largbrique);
      drawSprites();
      
    }
  }
}
function barre() {
  //Barre
  fill(255, 255, 100);
  rect(coordx_barre, largjeux - largbarre, longbarre, largbarre);
}
function balle() {
  //Balle
  fill(255, 255, 255);
  ellipse(
    (deplacement_balle_sur_x += vitesse_balle * direction_X),
    (deplacement_balle_sur_y += vitesse_balle * direction_Y),
    taille_balle,
    taille_balle
  );
}
function rebond() {
  // rebond balle
  // rebond balle gauche
  if (deplacement_balle_sur_x <= taille_balle / 2) {
    direction_X = 1;
  }
  // rebond balle droite
  if (deplacement_balle_sur_x >= longjeux - taille_balle / 2) {
    direction_X = -1;
  }
  // rebond balle haut
  if (deplacement_balle_sur_y <= taille_balle / 2) {
    direction_Y = 1;
  }
  //rebond barre
  if (
    deplacement_balle_sur_x >= coordx_barre - taille_balle / 2 &&
    deplacement_balle_sur_x <= coordx_barre + longbarre + taille_balle / 2 &&
    deplacement_balle_sur_y >= largjeux - largbarre
  ) {
    direction_Y = -1;
  }
  //rebond bloc
  
  
  
  //perdu
  if (deplacement_balle_sur_y >= largjeux) {
    alert("Perdu");
  }

  //(0, 0, longjeux, largjeux);
  // barre déplacement balle
  //bloc = new bloc(100, 40);

  //rafriachissement fenetre
  //fill(255, 0, 0);
}

function commande() {
  if (key == "q" || key == "Q") {
    if (keyIsPressed === true) {
      if (coordx_barre > 0) {
        coordx_barre -= 1;
      }
    }
  }
  if (key == "d" || key == "D") {
    if (keyIsPressed === true) {
      if (coordx_barre + longbarre < longjeux) {
        coordx_barre += 1;
      }
    }
  }
}
//function collision(balle, brique){
// brique.remove();
//