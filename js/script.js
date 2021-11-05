const membri = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chied Editor",
        "foto": "img/angela-caroll-chief-editor.jpg", 
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg", 
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg", 
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg", 
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg", 
    },

];
console.log(membri);



// Stampare le card dei membri.
// per stamparne una  selezioniamo il container => const container = document.querySelector(".team-container"). Nel contenuto dell'src dell'img, h3, p mettere il contenuto delle proprietà dell'oggetto =>
// container.innerHTML += `
    // <div class="team-card">
    //      <div class="card-image">
    //         <img
    //           src="${membri[0].foto}"
    //           alt="membri[0].nome"/>
    //       </div>
    //       <div class="card-text">
    //         <h3>membri[0].nome</h3>
    //         <p>membri[0].ruolo</p>
    //       </div>
    // </div>

    const container = document.querySelector(".team-container");

    for ( let i = 0; i < membri.length; i++) {
        container.innerHTML += `
    <div class="team-card">
         <div class="card-image">
             <img
              src="${membri[i].foto}"
              alt="${membri[i].nome}"/>
          </div>
          <div class="card-text">
            <h3>${membri[i].nome}</h3>
            <p>${membri[i].ruolo}</p>
           </div>
    </div> `
    }

    // al click del pulsante salvare i dati scritti in variabili.
    const addButton = document.getElementById("addMemberButton");
    addButton.addEventListener("click", function(){

        let userName = document.getElementById("name").value;
        let userRole = document.getElementById("role").value;
        let userImage = document.getElementById("image").value;
        
        console.log(userName, userRole, userImage);

        const datiNuovoMembro = {
            "nome": userName,
            "ruolo": userRole,
            "foto": userImage,
        }

        container.innerHTML += `
        <div class="team-card">
             <div class="card-image">
                 <img
                  src="${datiNuovoMembro.foto}"
                  alt="${datiNuovoMembro.nome}"/>
              </div>
              <div class="card-text">
                <h3>${datiNuovoMembro.nome}</h3>
                <p>${datiNuovoMembro.ruolo}</p>
               </div>
        </div> `

    })
    


