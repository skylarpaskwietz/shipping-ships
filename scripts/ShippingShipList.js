import { getShippingShips, getHaulingShips } from "./database.js";

const shippingShip = getShippingShips()
export const ShippingShipList = () => {

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShip) {
        shippingShipsHTML += `<li data-type="cargo_ship"
                                  data-id="${ship.id}"
                                  data-name="${ship.name}"
                                  data-hauler_id="${ship.haulerId}"
                                  >${ship.name}
                                </li>`
        
    }   shippingShipsHTML += "</ul>"

        return shippingShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        
            if (itemClicked.dataset.type === "cargo_ship") {
            
           
                const haulingShip = getHaulingShips()
                let myHauling = ""

           
                    
                    for (const hauler of haulingShip) {
                        if (parseInt(itemClicked.dataset.hauler_id) === hauler.id){
                            myHauling = hauler.name
                            
                            
                        }       
                    }
                
                
                window.alert(`${itemClicked.dataset.name} is being hauled by ${myHauling}`) 
     }
    }
)