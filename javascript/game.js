//element du DOM
const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');
const body = document.getElementsByTagName('body')[0];
// model de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const ceurPlein = ' <ion-icon name="heart"></ion-icon>';


// fontd
// const bgFroid = background-image, linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
// const bgTiede = background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
// const bgChaude = background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
// bgBrulant = background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);

// const bgWin =  linear-gradient(-225deg; #69EACB 0%; #EACCF8 ;48%; #6654F1 ; 100%);
// const bgLoose = 'background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)';

// play the damn game :

const play = () => {

    // nombre aléatoire
    const randomNumber = Math.floor(Math.random() * 101);
    const totalVies = 10;
    let vies=totalVies;
    console.log(randomNumber);
    


    // full logique
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        const valeurInput = parseInt(input.value);
        if (valeurInput < 0 || valeurInput > 100) return;

        if (valeurInput === randomNumber) {
            body.style.backgroundImage = bgWin;
            message.textContent = `bravo !!! le nombre était bien ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }

        if (valeurInput !== randomNumber) {
            if (randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3) {
                body.style.backgroundImage = bgBrulant;
                message.textContent = "c'est brulant !!!  "


            } else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6) {
                body.style.backgroundImage = bgChaude;
                message.textContent = "c'est chaud !!!  "

            } else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11){
                
                body.style.backgroundImage = bgTiede;
                message.textContent = "c'est TIED !!!  "
            } else {
                body.style.backgroundImage = bgFroid;
                message.textContent = "c'est Froid !!!";
            }
            vies--;
            verifyloose();        
        }
        actualseCoeurs(vies);
        
     
     
    })  
    
    const verifyloose = () => {
        if (vies === 0) {
            body.style.backgroundImage = bgLoose;
            body.style.color = '#990000';
            essayerBtn.setAttribute("disabled", "");
            message.textContent = `vous avez perdu. la reponse etait $(randomNumber)`;
            rejouerBtn.style.display = "block";
        }
    }

    const actualseCoeurs =(vies) => {
        divVies.innerHTML="";
        let tableauDeVies =[];
        for(let i=0; i < vies ; i++){
            tableauDeVies.push(ceurPlein);
        }
        for(let i=0; i < totalVies - vies; i++){
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur  => {
            divVies.innerHTML += coeur;
        })

    }
    actualseCoeurs(vies);

    rejouerBtn.addEventListener('click',() =>{
        message.style.display='none';
        document.location.reload(true);
    })




}        
play();
