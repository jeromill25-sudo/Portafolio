//botones de habilidades
const rightHab = document.querySelector("#righthab");
const leftHab = document.querySelector("#lefthab");
const content = document.getElementById("content");
//botones de proyectos
const rightProyect = document.querySelector("#rigthpro");
const leftProyect = document.querySelector("#leftpro");
const contentProyect = document.getElementById("contentProyect")

const light = document.querySelector("#light");
const background = document.getElementById("background");
const bloq= document.querySelectorAll(".bloq")
const habilidades = document.querySelectorAll(".habilidades");
const colors =  [
    "linear-gradient(to right, #0f2027, #203a43, #2c5364)",   // azul petróleo a gris azulado
    "linear-gradient(to right, #000428, #004e92)",             // azul oscuro elegante
    "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)",    // azul, vino y dorado (muy pro)
    "linear-gradient(to right, #373B44, #4286f4)",             // gris metálico a azul vivo
    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",    // ✅ morado oscuro a azul profundo (más serio)
    "linear-gradient(to right, #232526, #414345)",             // ✅ gris metálico a negro grafito (sobrio y moderno)
    "linear-gradient(to right, #141E30, #243B55)",             // azul acero moderno
    "linear-gradient(to right, #1f4037, #99f2c8)"              // verde oscuro a menta (opcional)
];

const borderColors = [
    "#00ff88", // Verde neón suave – combina con fondo verde o negro
    "#00ffff", // Cian brillante – resalta sobre negro o morado
    "#0064EB", // azul
    "#ff4500", // Naranja neón – aporta contraste cálido
    "#ffffff", // Blanco – limpio y versátil
   "#7902BF" , // Rosa neón – da contraste moderno en fondos negros o verdes
    "#BDD7DB", // Violeta brillante – ideal para fondos morados o oscuros
    "#ffffff", // Morado eléctrico – combina con degradados morados
    "#ffffff",  // Verde esmeralda – más natural y elegante
];
const shadow = ["#000000"];
let colorIndex = 0;
//fondo

    light.addEventListener("click",function(){
        background.style.background= colors[colorIndex];
        colorIndex = (colorIndex + 1)% colors.length;
        bloq.forEach(bloq=>{
            bloq.style.borderColor = borderColors[colorIndex];
            bloq.style.boxShadow = `0px 8px 16px ${shadow} ,inset 0 0 16px${borderColors[colorIndex]}`;
        });
        habilidades.forEach(habilidades => {
            habilidades.style.borderColor = borderColors[colorIndex];
            habilidades.style.boxShadow =`0px 8px 16px ${shadow} ,inset 0 0 16px ${borderColors[colorIndex]}`;
        });
    });

//efecto visuales para botones
//light
light.addEventListener("click", function(){
    this.classList.add("clicked")
    setTimeout(()=>{
        this.classList.remove("clicked");
    },100);
});

//habilidades botones
leftHab.addEventListener("click", function() {
    //efecto visual de presionado
    this.classList.add("clicked");
    //forma normal del boton
    setTimeout(() => {
        this.classList.remove("clicked");
    },100);
    content.scrollBy({
        left: -300,  // ← izquierda (negativo)
        behavior: "smooth"
    });
});

rightHab.addEventListener("click", function() {
    //efecto visual de presionado
    this.classList.add("clicked");
    //forma normal del boton
    setTimeout(() => {
        this.classList.remove("clicked");
    },100);
    content.scrollBy({
        left: 300,  // ← izquierda (negativo)
        behavior: "smooth"
    });
});
//proyectos botones
leftProyect.addEventListener("click", function() {
    //efecto visual de presionado
    this.classList.add("clicked");
    //forma normal del boton
    setTimeout(() => {
        this.classList.remove("clicked");
    },100);
    contentProyect.scrollBy({
        left: -300,  // ← izquierda (negativo)
        behavior: "smooth"
    });
});

rightProyect.addEventListener("click", function() {
    //efecto visual de presionado
    this.classList.add("clicked");
    //forma normal del boton
    setTimeout(() => {
        this.classList.remove("clicked");
    },100);
    contentProyect.scrollBy({
        left: 300,  // ← izquierda (negativo)
        behavior: "smooth"
    });
});