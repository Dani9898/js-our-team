const membri = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
    },
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg", 
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

    for ( let i = 0; i < 6; i++) {
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

