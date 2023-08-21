import { DockList } from "./DockList.js";
import { HaulerList } from "./HaulerList.js";
import { ShippingShipList } from "./ShippingShipList.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__shippingShips">
        <h2>Shipping Ships</h2>
        ${ShippingShipList()}
    </section>

</article>
`

mainContainer.innerHTML = applicationHTML