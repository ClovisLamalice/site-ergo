var info = document.getElementById('info_container');
info.addEventListener("animationend", display_info);

function redirect1() {
    location.href = 'main_me.html';
}

function redirect2() {
    location.href = '../clovis/index.html';
}

function redirect3() {
    location.href = '../hippolyte/comm.html';
}

function change(src) {
    var bodd = document.getElementById('bodd')
    bodd.src=src;
}

function switchSides(){
    var bodd = document.getElementById('bodd')
    if (bodd.src.match('body/body_front.png')||bodd.src.match('body/body_front_abs.png')||bodd.src.match('body/body_front_arm.png')||bodd.src.match('body/body_front_calves.png')||bodd.src.match('body/body_front_chest.png')||bodd.src.match('body/body_front_neck.png')||bodd.src.match('body/body_front_obs.png')||bodd.src.match('body/body_front_shoulders.png')||bodd.src.match('body/body_front_thighs.png')){
        bodd.src = 'body/body_back.png'
        var hitboxes_front = document.getElementsByClassName('front')
        for (var i =0; i <hitboxes_front.length;i++){
            hitboxes_front[i].style.display = 'none'
        }
        var hitboxes_back = document.getElementsByClassName('back')
        for (var i =0; i <hitboxes_back.length;i++){
            hitboxes_back[i].style.display = 'block'
        }
    }else{
        bodd.src = 'body/body_front.png'
        var hitboxes_front = document.getElementsByClassName('front')
        for (var i =0; i <hitboxes_front.length;i++){
            hitboxes_front[i].style.display = 'block'
        }
        var hitboxes_back = document.getElementsByClassName('back')
        for (var i =0; i <hitboxes_back.length;i++){
            hitboxes_back[i].style.display = 'none'
        }

    }
}

function display_info(){
    var desc = document.getElementById('desc')
    desc.style.display = 'flex'
    desc.style.animation = 'fadeInDown 1s linear'
}

// function removepadd(){
//     var el = document.getElementById('image_container')
//     el.style.width = '100%'
//     hr.style.width='100%'
// }

function change_info(i){
    names= ["Grand Pectoral","Cou","Deltoides Antérieurs","Biceps","Avant Bras", "Abdominaux","Obliques","Quadriceps","Tibialis",
    "Trapèzes","Grands Dorsaux","Lombaires","Deltoïdes Postérieurs","Triceps","Avant Bras","Grand Fessier","Ischiojambiers","Mollets"]

    desc=["Le muscle grand pectoral est un muscle de la ceinture du membre thoracique (ou supérieur ou encore ceinture scapulaire). Situé sous la peau, ce muscle est large, triangulaire et puissant, c'est le plus volumineux du membre thoracique. Le grand pectoral est lié à la paroi antérieure du creux axillaire, dans un plan superficiel.",
    "Le cou est principalement composé de 2 muscles et de 4 os. le muscle sterno-cléido-mastoïdien est un muscle vertical, situé entre la clavicule et la base de l'oreille. le muscle trapèze, en forme de losange, recouvre la partie postérieure de la nuque, de l'épaule et le haut du dos",
    "Les deltoïdes sont deux muscles en forme de cônes à sommet dirigé vers le bas qui recouvrent les faces externes des épaules.",
    "Le biceps brachial, le brachial antérieur et le long supinateur forment les muscles fléchisseurs du coude au niveau des bras. Ce sont les plus grands et les plus remarquables des muscles de cette partie du corps.",
    "Les muscles de l'avant bras se répartissent en 3 loges : ventrale, comportant des muscles fléchisseurs, dorsale, formée de muscles extenseurs et latérale.",
    "Les muscles abdominaux ou muscles de la paroi abdominale antéro-latérale sont des muscles squelettiques constituant la paroi antérolatérale de l'abdomen.",
    "C'est un muscle étendu vers le haut et sur les côtés, le tronc peut s'incliner grâce au muscle oblique interne de l'abdomen.",
    "Le muscle quadriceps est le muscle le plus volumineux du corps humain. C'est lui qui supporte en grande partie le poids du corps, et permet de se déplacer. Il se situe dans la loge antérieure de la cuisse.",
    "Le muscle tibial antérieur est fléchisseur du pied sur la jambe (flexion dorsale), adducteur et supinateur. Il recouvre le tibia.",
    "les muscles trapèzes recouvrent la face postérieure du cou et la moitié postérieure du tronc, de chaque côté de la colonne vertébrale. Les muscles trapèzes relient le squelette des membres supérieurs au squelette du tronc.",
    "Les longs dorsaux sont les muscles ilio-costaux du dos et des lombes ; ils assurent la verticalité de la colonne vertébrale. Ils permettent de relever le buste, penché en avant. Ils assurent également l'inclinaison latérale de la colonne vertébrale.",
    "Les muscles lombaires sont des muscles extenseurs de la colonne vertébrale. Ils redressent le dos; ils sont donc érecteurs du rachis. S'ils agissent d'un seul côté, ils provoquent une inclinaison latérale. Ils ont aussi une action de rotation du buste.",
    "Les deltoïdes sont deux muscles en forme de cônes à sommet dirigé vers le bas qui recouvrent les faces externes des épaules.",
    "Le muscle triceps brachial forme la partie postérieure du bras. Ses faisceaux s'insèrent, l'un sur l'omoplate (longue portion), les deux autres sur l'humérus (vastes interne et externe).",
    "Les muscles de l'avant bras se répartissent en 3 loges : ventrale, comportant des muscles fléchisseurs, dorsale, formée de muscles extenseurs et latérale.",
    "Le grand fessier est avant tout un puissant extenseur de la hanche. Il permet également l'abduction et la rotation latérale de la cuisse ce muscle participe aussi à la rétroversion du bassin ainsi qu'à sa stabilisation.",
    "Un muscle ischio-jambier appartient à un groupe musculaire de la cuisse permettant l'extension de la hanche et la flexion du genou. Ce groupe rassemble des muscles polyarticulaires qui vont de la hanche jusqu'à l'arrière du tibia et de la fibula.",
    "Le mollet est musclé par le muscle triceps sural et les muscles péroniers latéraux, c'est-à-dire le muscle long fibulaire et le muscle court fibulaire. Il permet la flexion du pied."]
   
    sources = ['exercise/pecs.jpg','exercise/neck.PNG','exercise/shoulder.jpg','exercise/biceps.jpg',
    'exercise/forearm.png','exercise/abs.jpg','exercise/obliques.jpg','exercise/quads.jpg','','exercise/traps.jpg','exercise/lats.jpg','exercise/butt.jpg',
    'exercise/shoulder.jpg','exercise/triceps.jpg','exercise/forearm.png','exercise/butt.jpg','exercise/ischio.jpg','exercise/calf.jpg']
   
    var name = document.getElementById('name')
    var description = document.getElementById('desc')
    var image = document.getElementById('exercise')
    name.innerHTML = names[i]
    description.innerHTML= desc[i]
    image.src = sources[i]
    if (i == 8) {
        image.style.display = 'none' 
    }else{
        image.style.display= 'block'
    }
}
