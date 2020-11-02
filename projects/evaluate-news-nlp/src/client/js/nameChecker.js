function checkNonEmpty(inputText) {
    const defaultText = 
    console.log("::: Running checkNonEmpty :::");
    if(inputText==="" || inputText==="test") {
        alert("Running default test")
        return getDefaultText();
    }
    return inputText
}

function getDefaultText(){
    return "Attention, document col­lector ! Une fois n’est pas coutume, « Le Canard » a décidé de mettre en ligne sur son site Internet une œuvre majeure, un document pour l’Histoire : le programme santé de François Fillon ! Car cette perle est devenue introuvable sur le site du candidat, qui ne contient plus qu’un inoffensif résumé. Au soir du 13 décembre, après le grand rétropédalage de Fillon sur la Sécu, son équipe a supprimé du site de campagne ses 16 pages de « propositions détaillées » sur la santé. La fleur au fusil, Fifi y promettait rien de moins que la mort de la Sécu, laquelle serait « foca­lis[ée] » sur les « affections graves ou de longue durée ». Tout « le reste » passerait entre les mains des mutuelles et des assurances privées, annonçait le programme détaillé, aujourd’hui balancé aux oubliettes."
    }

export {checkNonEmpty}
//module.exports = getDefaultText