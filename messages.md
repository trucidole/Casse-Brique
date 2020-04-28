### 24/03 10h-12h :

EM - Bonjour, dans ce fichier, si nous sommes connectés, nous pouvons discuter en direct (chatter) en cas de besoin ;

EM - Ou y laisser des questions/commentaires d'une connection sur l'autre...

GC - Je n'arrive pas à enlever la trainée de la balle, j'ai trouvé une façon de raffraichir mais celle_ci est soit inefficace soit 
fait disparaître la balle et la barre avec. auriez vous un conseil?

### 07/04 12h :

EM - La trainée noir de la balle me semble correcte si la balle rebondit sur les briques...

GC - Oui c'est juste que à uun moment la barre laissait également une trainée mais j'ai réussi à le modifier pour que cela ne le fasse plus

GC - Par contre quand j'appuye une fois sur Q par exemple le mouvement ne s'arrête pas

EM - Je pense que la solution se trouve  : [https://p5js.org/reference/#/p5/keyPressed](https://p5js.org/reference/#/p5/keyPressed)
> "Because of how operating systems handle key repeats, holding down a key may cause multiple calls to keyTyped() (and keyReleased() as well). The rate of repeat is set by the operating system and how each computer is configured.
>
> Browsers may have different default behaviors attached to various key events. To prevent any default behavior for this event, add "return false" to the end of the method."