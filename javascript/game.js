//element du DOM
const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');
const body = document.getElementsByTagName('body')[0];

const counterDisplayElem = document.querySelector('.counter-display');

// model de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const ceurPlein = ' <ion-icon name="heart"></ion-icon>';




// play the damn game :


// counter
let count = 0;

const play = () => {
    
    // nombre aléatoire
    const randomNumber = Math.floor(Math.random() * 101);
    const totalVies = 10;
    let vies=totalVies;
    console.log(randomNumber);


    
    
    // full logique
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        count ++;

        const valeurInput = parseInt(input.value);
        if (valeurInput < 0 || valeurInput > 100) return;
        
        if (valeurInput === randomNumber && count<=2 ) {
            
            message.textContent = "Bravo, vous etes un Génie !!!";
            rejouerBtn.style.display = "block";
        }else if(valeurInput === randomNumber && count>=3 ) {
            
            message.textContent = `Félicitations, vous avez gagné après  ${count}`;
            rejouerBtn.style.display = "block";
        }
        
        
        if (valeurInput !== randomNumber) {
            if (randomNumber > valeurInput ) {  
                message.textContent = "plus petite!!"
                
            } else if (randomNumber < valeurInput ){
                
                message.textContent = "plus grande!!"
                
            } 
            if (vies === 0) {
                
                essayerBtn.setAttribute("disabled", "");
                message.textContent = `C'est raté. la reponse etait ${randomNumber}`;
                rejouerBtn.style.display = "block";
            }
            vies--;
            verifyloose();     
   
        }
        actualseCoeurs(vies);
        counterDisplayElem.innerHTML=count;

        
        
        
    })  
    
    const verifyloose = () => {
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
