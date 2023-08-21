const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "Pioneering Spirit", dockid: 4},
        {id: 2, name: "Boaty McBoatface", dockid: 2},
        {id: 3, name: "Seawise Giant", dockid: 1},
        {id: 4, name: "Big Float", dockid: 3},
        {id: 5, name: "He Who Floats", dockid: 2},
        {id: 6, name: "Sara", dockid: 4},
        {id: 7, name: "Violet", dockid: 3}
    ],
    shippingShips: [
        {id: 1, name: "Esso Atlantic", haulerId: 1},
        {id: 2, name: "Prairial", haulerId: 4},
        {id: 3, name: "Palais Royal", haulerId: 6},
        {id: 4, name: "Rivoli", haulerId: 2},
        {id: 5, name: "Champes Elysee", haulerId: 7},
        {id: 6, name: "CCCCCCC", haulerId: 3},
        {id: 7, name: "Master Exploder", haulerId: 5},
        {id: 8, name: "Pacific Him", haulerId: 7},
        {id: 9, name: "Greenhouse Contributor", haulerId: 4},
        {id: 10, name: "Need Bigger Boat", haulerId: 1}
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map (shippingShip => ({...shippingShip}))
}