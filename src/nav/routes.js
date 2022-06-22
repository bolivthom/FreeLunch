import AllCards from "../views/base/AllCards";
import Decks from "../views/base/Decks";


export const routes = [
    {
        name: 'All Cards',
        path: '/all-cards',
        component: <AllCards/>
    },
    {
        name: 'Decks',
        path: '/decks',
        component: <Decks/>
    },
]