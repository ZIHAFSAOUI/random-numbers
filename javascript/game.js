//element du DOM
const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const counterDisplayElem = document.querySelector('.counter-display');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');


// model de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const ceurPlein = ' <ion-icon name="heart"></ion-icon>';




// counter
let count = 0;

// play the game :
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
            
            message.textContent = "Bravo, vous etes un Génie 👏 !!!";
            rejouerBtn.style.display = "block";
        }else if(valeurInput === randomNumber && count>=3 ) {
            
            message.textContent = `Félicitations, vous avez gagné après 👏 ${count}`;
            rejouerBtn.style.display = "block";
        }
        
        
        if (valeurInput !== randomNumber) {
            if (randomNumber > valeurInput ) {  
                message.textContent = "plus petite ⚠ !!"
                
            } else if (randomNumber < valeurInput ){
                
                message.textContent = "plus grande ⚠!!"
                
            }
            vies--;
            verifyloose();     
   
        }

        
    })  
    
    const verifyloose = () => {
        if (vies === 0) {
                
                essayerBtn.setAttribute("disabled", "");
                message.textContent = `C'est raté. la reponse etait ${randomNumber}`;
                rejouerBtn.style.display = "block";
            }
    }
     actualseCoeurs(vies);
        counterDisplayElem.innerHTML=count;

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
