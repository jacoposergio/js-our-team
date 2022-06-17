// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

const teamMembersArray = [
    {
        name: 'Wayne Barret',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social media manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Tony Soprano',
        role: 'Mob boss',
        image: 'new-team-member-04.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office manager',
        image: 'walter-gordon-office-manager.jpg'
    },
];

const teamContainer = document.querySelector('.team-container')

//! Per ogni classe nell'array 
//! stampo una card (appendo team-card template a classes-container)
for(let i = 0; i < teamMembersArray.length; i++) {
    const thisMember = teamMembersArray[i];
    console.log("questo membro",thisMember);
    
    //! console.log(thisClass);

    //! Creare un nuovo template compilato coi dati giusti
    const classToDraw = `
    <div class="team-card">
      <div class="card-image">
        <img
            src="img/${thisMember.image}"
            alt="Wayne Barnett"
        />
      </div>
    <div class="card-text">
      <h3> ${thisMember.name} </h3>
      <p>${thisMember.role}</p>
    </div>
   </div>
    `;

    // concatenarlo a classesContainer
    teamContainer.innerHTML += classToDraw;
}