import { getHaulingShips, getShippingShips } from "./database.js";

export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler"
                            data-id="${hauler.id}"
                            data-name="${hauler.name}"
                            data-dock_id="${hauler.dockId}"
                            >${hauler.name}
                            </li>`

    }   haulersHTML += "</ul>"

        return haulersHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const myHaulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const myShippingShips = getShippingShips()

            for (const hauler of myShippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(myHaulerId) === hauler.haulerId) {
                    shipCounter++
                }
            }

            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
                    // Increase the counter by 1
        }

    }
)

