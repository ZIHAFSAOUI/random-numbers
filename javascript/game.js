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
            
            message.textContent = `bravo !!! le nombre était bien ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
                               
        if (valeurInput !== randomNumber) {
            if (randomNumber < valeurInput + 11  && randomNumber > valeurInput - 11) {
               
                message.textContent = "plus petite !!"


            } else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6) {
               
                message.textContent = "c'est chaud !!!  "

            } else {
                
                message.textContent = "plus petite!!!";
            }
            vies--;
            verifyloose();        
        }
        actualseCoeurs(vies);
        
     
     
    })  
    
    const verifyloose = () => {
        if (vies === 0) {
            
            essayerBtn.setAttribute("disabled", "");
            message.textContent = `C'est raté. la reponse etait ${randomNumber}`;
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
