import { getDocks, getHaulingShips } from "./database.js";

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
                          data-id="${dock.id}"
                          data-location="${dock.location}"
                          data-volume="${dock.volume}"
                          >${dock.location} can hold ${dock.volume} million tons of cargo
                          </li>`
                     
        
    }   docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock" ) {

            const newHaulers = getHaulingShips()
            let haulerDock = ""

            for (const haul of newHaulers) {
                if (parseInt(itemClicked.dataset.id) === haul.dockid) {
                haulerDock = haul.name 
                //  else haulerDock = "nothing"
            }
        }       window.alert(`${itemClicked.dataset.location} is currently unloading ${haulerDock}`)
    }
    }
)