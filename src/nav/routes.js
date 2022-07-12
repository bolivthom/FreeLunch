import AllCards from "../views/base/AllCards";
import Card from "../views/base/Card";
import Decks from "../views/base/Decks";

import { ReactComponent as AllCardsIcon } from "../assets/allcards.svg";
import { ReactComponent as DecksIcon } from "../assets/decks.svg";

export const routes = [
    {
        name: 'All Cards',
        path: '/all-cards',
        root: true,
        icon: <AllCardsIcon/>,
        component: <AllCards/>
    },
    {
        name: 'Card',
        path: '/card/:id',
        icon: <AllCardsIcon/>,
        component: <Card/>,
    },
    {
        name: 'Decks',
        path: '/decks',
        icon: <DecksIcon/>,
        component: <Decks/>
    },
]