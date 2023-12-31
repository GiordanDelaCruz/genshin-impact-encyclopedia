const accordions = document.getElementsByClassName("accordion-button");
const visionLinkArray = document.getElementsByClassName("vision-icon")[0].src.split("/");

// Determine charatcer vision
const vision = visionLinkArray[ visionLinkArray.length - 3];

updateAccordionTheme(vision);

/** This function will update the color accordions to match the vision
 * 
 * @param {*} vis       Character Vision
 */
function updateAccordionTheme(vis){
    for(var i = 0; i < accordions.length; i++){
        accordions[i].classList.add("text-white");

        if(vis === "pyro"){
            accordions[i].classList.add("accordion-pryo");
        }else if(vis ==="hydro"){
            accordions[i].classList.add("accordion-hydro");
        }else if(vis ==="anemo"){
            accordions[i].classList.add("accordion-anemo");
        }else if(vis ==="electro"){
            accordions[i].classList.add("accordion-electro");
        }else if(vis ==="dendro"){
            accordions[i].classList.add("accordion-dendro");
        }else if(vis ==="cryo"){
            accordions[i].classList.add("accordion-cryo");
        }else if(vis === "geo"){
            accordions[i].classList.add("accordion-geo");
        }
    }
}

