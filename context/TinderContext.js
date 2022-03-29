import {useState, createContext, useEffect} from 'react'

import { useMoralis } from 'react-moralis'
const TinderContext=createContext()

export const TinderProvider=({children})=>{
    const { authenticate, isAuthenticated, user, Moralis } = useMoralis()
    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()

    const checkWalletConnection=async()=>{

    }

    return(
        <TinderContext
            value={{}}
        >
            {children}
        </TinderContext>
    )
}