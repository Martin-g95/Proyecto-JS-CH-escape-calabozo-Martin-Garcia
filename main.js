alert("Luego de un extraño sueño en donde sientes que caes al vacio, te despiertas adolorido, intentas tocar las paredes para sostenerte, pero solo das manotazos a la oscuridad, la boca te sabe a polvo y empiezas a toser, estas totalmente desorientado y no tienes una minima pizca de idea de donde estas.");
const nombre = prompt("*Escuchas un leve susurro... que te pregunta: ¿Cual es tu nombre?")

alert("De repente, una antorcha se enciende sola, y puedes observar un poco a tu alrededor, para tu desgracia, puedes darte cuenta en donde estas... El suelo esta hecho de adoquines, y se puede ver paja humeda en el mismo, hay tierra, polvo y...Eso es una rata?")
alert("La rata chilla y sale corriendo, mientras la sigues con la mirada puedes observar que traspasa una reja... y cuando levantas la vista, puedes darte cuenta exactamente donde estas...Estas encerrado. Estas encerrado en un calabozo.")
alert("Te apresuras hacia delante, intentas abrir la reja moviendo los barrotes, mientras mas fuerza haces para moverlos, mas cosas puedes observar a tu alrededor, hacia los costados se extienden pasillos muy oscuros y la antorcha que se encendio sola solo ilumina el frente de tu celda, cuando bajas un poco la mirada, observas una calavera,vieja y con grietas, puedes sentir un escalofrio que te recorre por la espalda cuando miras hacia la oscuridad de las dos vacias cuencas del craneo... parece que el abismo, te esta observando. Tienes que salir de aqui.")
//Esta funcion lanza los dados, son del 1 al 10, no puede ser menor que uno y no puede ser mayor que 10, incluyen el 1 y el 10, math random me da los numeros pero decimales, floor hace que sean enteros.

const LANZAR_DADOS = (min, max) => {
    return Math.floor(Math.random() *(max - min)) + min;
    
}

let abrirReja = prompt("Observas y analizas la reja, esta cerrada a cal y canto, pero aun asi miras en la cerradura, esta oxidada, observas que hay un hueso fino en el suelo, lo tomas, e intentas usarlo como ganzua, al parecer el destino tomara riendas sobre tu futuro, entonces, lanzara unos dados por ti, si esos dados dan menor que 5, se rompera tu hueso, si dan mayor que 5, entonces, podras abrir la puerta. escribe 'dados' para continuar.");
//bucle que condiciona al usuario a escribir bien
while (abrirReja !== "dados") {
    alert("Por favor, escribe 'dados'");
    abrirReja = prompt("Observas y analizas la reja, esta cerrada a cal y canto, pero aun asi miras en la cerradura, esta oxidada, observas que hay un hueso fino en el suelo, lo tomas, e intentas usarlo como ganzua, sera mejor lanzar unos dados para ver si puedes lograrlo, ¿que te parece?, si esos dados dan menor que 5, se rompera tu hueso, si dan mayor que 5, entonces, podras abrir la puerta. escribe 'dados' para continuar.");
}
//resultado de los dados
abrirReja = LANZAR_DADOS(1,10);
alert(`El destino ha dictado que tu numero es: ${abrirReja}`);
//condicion de la tirada de los dados
if (abrirReja >=5){
    alert("Lo lograste, pudiste abrir la reja, ahora puedes continuar.")
}else if(abrirReja <=4){
    alert("Lamentablemente tu ganzua se ha roto, lo siento, te quedaras aqui por siempre... Se te cae una lagrima al suelo, te tiemblan las manos, pero magicamente, la reja se abre, puede continuar.");
}

alert("Cuando abres la reja oxidada que te apresaba, puedes observar un pasillo negruzco y espeso a lo largo de pequeñas luces que parecen antorchas tenues que se van volviendo mas pequeñas mientras mas se expande el pasillo, decides continuar a pesar de la oscuridad que te envuelve.");
alert("Luego de caminar unos metros, te encuentras con una puerta que se encuentra cerrada, por arriba hay una placa de madera que dice 'Laboratorio', ¿porque habria un laboratorio aqui? y al costado de esta puerta hay una palanca, la mueves, y puedes observar como unos tubos de cristal que se encuentran bordeando la puerta se mueven, se llenan de un liquido verde y largan una especie de vapor, la puerta se abre.");

alert("las antorchas estan encendidas... que raro, hay una mesa con mutiples objetos de alquimia, tubos, frascos, alambiques, cables, herramientas, libros, hornallas, y muchos papeles, decides leer uno de ellos y para tu sorpresa, es una receta de una pocion, se llama 'Elixir del despertar' y la descripcion de la pocion dice que puede ayudar a escaparte, ya que puede teletransportarte. Manos a la obra.");

let hongo = parseInt(prompt("La lista es especifica, debes colocar un puñado de 3 hongos 'Amanita Muscaria', y por suerte, los tienes justo en la mesa, ahora escribe la cantidad de hongos que quieres colocar, ten en cuenta que el maximo son 5 hongos, aunque la receta dice que coloques 3"));
//bucle que condiciona al usuario a escribir bien
while(!hongo || hongo <1 || hongo >5){
    alert("Tienes que colocar un numero del 1 al 5, y solo deben ser numeros")
    hongo = parseInt(prompt("La lista es especifica, debes colocar un puñado de 3 hongos 'Amanita Muscaria', y por suerte, los tienes justo en la mesa, ahora escribe la cantidad de hongos que quieres colocar, ten en cuenta que el maximo son 5 hongos, aunque la receta dice que coloques 3"));

}
//resultado de los dados
alert(`Has tomado un puñado de ${hongo} hongos y los colocaste en el recipiente, y continua con la receta.`)

let lenguaDragon = parseInt(prompt("La lista dice que debes colocar en el mortero unas 5 hojas de 'Lengua de dragon' ten en cuenta, que tambien dice que maximo son hasta 15 hojas, escribe la cantidad de hojas que quieres colocar en el recipiente. "));
//bucle que condiciona al usuario a escribir bien
while(!lenguaDragon || lenguaDragon <5 || lenguaDragon >15){
    alert("No puedes colocar menos de 5 hojas o mas de 15, recuerda que solo debes colocar numeros")
    lenguaDragon = parseInt(prompt("La lista dice que debes colocar en el mortero unas 5 hojas de 'Lengua de dragon' ten en cuenta, que tambien dice que maximo son hasta 15 hojas, escribe la cantidad de hojas que quieres colocar en el recipiente. "));
}
//resultado de los dados

alert(`Has tomado un puñado de ${lenguaDragon} hojas de lenguas de dragon y los colocaste en el mortero, bien hecho!`)

alert("Una vez que has colocado los ingredientes en el mortero, la receta dice que debes agregar cuidadosamente un reagente que esta sobre la mesa, se llama 'Escencia fatua' y parece una mezcla viscosa y humeante en un pequeño frasco, hay un problema... no dice cuanto agregar, asi que, la suerte esta hechada, tiremos unos dados.")

let escenciaFatua = prompt("Escribe 'dados' para ver cuantos ml de Escencia debes vertir en el mortero.")
//bucle que condiciona al usuario a escribir bien
while (escenciaFatua !== "dados") {
    alert("Por favor, escribe 'dados'");
    escenciaFatua = prompt("Escribe 'dados' para ver cuantos ml de Escencia debes vertir en el mortero.");
}
escenciaFatua = LANZAR_DADOS(1,10);
//resultado de los dados
alert(`Luego de vertirlo cuidadosamente el liquido espeso en el mortero, te das cuenta que has usado unos  ${escenciaFatua} ml de Escencia.`);

let agua = prompt("Casi por el final de la receta, dice que debemos colocar los ingredientes en un frasco con agua para empezar el proceso de destilacion, al no decir la cantidad de agua que necesitamos, lanzaremos nuevamente los dados, por favor, escribe 'dados'")

//bucle que condiciona al usuario a escribir bien
while (agua !== "dados") {
    alert("Por favor, escribe 'dados'");
    agua = prompt("Casi por el final de la receta, dice que debemos colocar los ingredientes en un frasco con agua para empezar el proceso de destilacion, al no decir la cantidad de agua que necesitamos, lanzaremos nuevamente los dados, por favor, escribe 'dados'")
}

agua = LANZAR_DADOS(1,10);
//resultado de los dados
alert(`Decidiste usar ${agua} ml de agua, ahora segun la receta, viertes todo en el frasco grande para empezar el proceso de destilacion.`)

alert("Ya tienes todos los componentes necesarios para el elixir, una vez que mueles los componentes en el mortero, la receta dice que debes colocar los ingredientes en el frasco de agua, y luego pones a hervir ese frasco y colocas el alambique para que el vapor de los ingredientes pase por un tubo de vidrio, ese vapor se condensa y gotea en un frasco mas pequeño, en donde ahi estara el producto final del elixir, este proceso se llama destilacion.")
//La multiplicacion de los datos generados, tanto de forma aleatoria como colocados por el usuario.


let sumaIngredientes= hongo + lenguaDragon + escenciaFatua;
let tiempoHervor= sumaIngredientes * agua;
//resultado de la multiplicacion.
alert(`Cuando enciendes la hornalla, la receta dice que, el tiempo de hervor de la mezcla deben ser el resultado de la suma de los ingredientes y la multiplicacion por la cantidad de agua. Una vez que has hecho memoria, deberias hervir la mezcla unos ${tiempoHervor} segundos.`)

alert("Has esperado a que evapore todo el contenido de los ingredientes, y una vez terminado el proceso ,por fin puedes observar la pocion... es azul, e inunda algo de luz tenue en tu mano, escapandose por la distancia entre tus dedos, pero de repente escuchas un ruido horroso que te espabila y te pone los pelos de punta.")
alert("¡ESTUVISTE TRATANDO DE ESCAPAR MALDITA ESCORIA, PERO NO IRAS LEJOS DE AQUI, NO HAY ESCAPATORIA!")

alert("Miras la pocion en tu mano, esta tibia, y estas espantado, pero no hay otra salida, un gigantesco ogro de piel palida y con muchisimas manchas negras esta a punto de tomarte por la cabeza, y bebes la pocion, es asquerosa, pero mientras cierras los ojos para aguantar el sabor, de repente sientes un cosquilleo por todo el cuerpo, te has vuelto etereo, y reapareciste en otra parte del calabozo.")

alert("Debajo de tus pies, hay un simbolo runico, habra sido el punto de salida de la pocion, tambien ves mucha agua corriendo, y hacia los costados te das cuenta que estas en una alcantarilla, pero lo que mas te impacta es que al final de unos metros, hay luz, la luz del sol, vas corriendo hacia ella y lo unico que te separa de tu libertad es otra reja muy oxidada...Creo que,puedes romperla.")

alert("Otra vez, se escucha ese grito espantoso, a lo lejos, puedes escuchar que el agua se agita como si alguien pesado esta corriendo en un charco, y cada vez se siente mas fuerte, el ogro te ha visto que intentas escapar, y viene corriendo dando gruñidos y agitando una maza golpeando las paredes.")
//En este ciclo for, se ira restando los metros definidos, mostrara un alert en cada metro que este restando
for (let escape = 6;  escape--;){
    alert(`¡El ogro esta a ${escape} metros cerca de ti!`)
    if (escape === 0){
        alert("¡Esto no puede terminar asi! debes lanzar los dados una vez mas!")
    }
}
//bucle que condiciona al usuario a escribir bien
let libertad = prompt("Escribe 'dados' para saber cual sera tu destino. si sacas menos que 5, el ogro te atrapara, si sacas mas de 5, obtendras la tan preciada libertad.")
//bucle 
while(libertad != "dados"){
    alert("Debes escribir 'dados' para continuar")
    libertad = prompt("Escribe 'dados' para saber cual sera tu destino. si sacas menos que 5, el ogro te atrapara, si sacas mas de 5, obtendras la tan preciada libertad.")
}
libertad = LANZAR_DADOS(1,10);
alert(`El destino dicta tu final, has sacado ${libertad}`)

//Condicional del fin del juego.
if(libertad >=5){
    alert(`Con todas las fuerzas que te quedaban, pudiste romper la reja, ahora empiezas a correr hacia la luz, puedes sentir la tibia brisa del ambiente recorrer tu lastimado cuerpo, por primera vez en tanto tiempo puedes respirar aire limpio y fresco, ¡felicidades ${nombre}, ahora eres libre!`)
    alert("Fin.")
} else{
    alert("Intentaste abrirla usando tus pocas fuerzas... Pero no lo lograste, el ogro te agarro por la espalda y te lanzo hacia la pared, entre el golpe que has sentido en todo tu cuerpo y el mareo, sientes el dolor de como te esta sujetando por la cabeza, y te lleva arrastrandote devuelta hacia los calabozos... Esta vez, se aseguraran de que nunca vuelvas a ver la luz del sol.")
    alert("Fin.")
}





















