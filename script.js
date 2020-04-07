var longjeux = 900;
var largjeux = 600;

var longbrique = 50;
var largbrique = 40;

var coordx_barre = 400;
var longbarre = 100;
var largbarre = 25;

var deplacement_balle_sur_x = 300;
var deplacement_balle_sur_y = 300;
var taille_balle = 20;
var vitesse_balle = 0.8;
var direction_X = 1;
var direction_Y = -1;

var delai = 0;

var boucleJeu = setInterval(rafraichirJeux, 0.1);

function setup() {
  createCanvas(longjeux, largjeux);
  background(255, 0, 0);
  fill(255, 0, 255);
  stroke(0, 0, 0);
  background(0);
  for (let u = 0; u < 200; u += 40) {
    for (let i = 0; i < width; i += 50) {
      fill(255, 0, 0);
      rect(i, u, longbrique, largbrique);
    }

    //bloc;
  }
}
function draw() {
  //Barre
  fill(255, 255, 255);
  rect(coordx_barre, largjeux - largbarre, longbarre, largbarre);

  //Balle
  fill(255, 255, 255);
  ellipse(
    (deplacement_balle_sur_x += vitesse_balle * direction_X),
    (deplacement_balle_sur_y += vitesse_balle * direction_Y),
    taille_balle,
    taille_balle
  );

  // rebond balle
  // rebond balle gauche
  if (deplacement_balle_sur_x <= 10) {
    direction_X = 1;
  }
  // rebond balle droite
  if (deplacement_balle_sur_x >= 890) {
    direction_X = -1;
  }
  // rebond balle haut

  if (deplacement_balle_sur_y <= 10) {
    direction_Y = 1;
  }
  //context.clearrect(0, 0, longjeux, largjeux);
  // barre déplacement balle
  //bloc = new bloc(100, 40);

  //rafriachissement fenetre
  //fill(255, 0, 0);
}
setInterval(draw, 100);

function commandes() {
  if (keyPressed) {
    delai = frameCount;
    if (key == "q" || key == "Q") {
      if (coordx_barre > 0) {
        coordx_barre -= 25;
      }
      if (key == "d" || key == "D") {
        if (coordx_barre < largjeux) {
          coordx_barre += 25;
        }
      }
    }
  }
}
