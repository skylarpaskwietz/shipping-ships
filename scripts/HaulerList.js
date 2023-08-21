import { getHaulingShips } from "./database.js";

export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}"
                            data-name="${hauler.name}"
                            data-dockId="${hauler.dockId}"
                            >${hauler.name}
                            </li>`
                            
    }   haulersHTML += "</ul>"

        return haulersHTML
}