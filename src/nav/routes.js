import AllCards from "../views/base/AllCards";
import Decks from "../views/base/Decks";

import { ReactComponent as AllCardsIcon } from "../assets/allcards.svg";
import { ReactComponent as DecksIcon } from "../assets/decks.svg";

export const routes = [
    {
        name: 'All Cards',
        path: '/all-cards',
        icon: <AllCardsIcon/>,
        component: <AllCards/>
    },
    {
        name: 'Decks',
        path: '/decks',
        icon: <DecksIcon/>,
        component: <Decks/>
    },
]