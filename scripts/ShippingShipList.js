import { getShippingShips } from "./database.js";

export const ShippingShipList = () => {
    const shippingShip = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShip) {
        shippingShipsHTML += `<li data-id="${ship.id}"
                                  data-name="${ship.name}"
                                  data-haulerId="${ship.haulerId}"
                                  >${ship.name}
                                </li>`
        
    }   shippingShipsHTML += "</ul>"

        return shippingShipsHTML
}