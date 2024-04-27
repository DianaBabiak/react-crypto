import {createContext, useEffect, useState} from "react";
import {fakeFetchAssets, fakeFetchCrypto} from "../api.js";
import {percentDifference} from "../utils.js";

export const CryptoContext = createContext({
    assets:[],
    crypto:[],
    isLoading:false
})

export function CryptoContextProvider ({children}){
    const [isLoading, setIsLoading]=useState(false)
    const [crypto, setCrypto]=useState([])
    const [assets, setAssets]=useState([])

    function mapAssets(assets, result) {
        return assets.map((asset) => {
            const coin = result.find((c) => c.id === asset.id)
            return {
                grow: asset.price < coin.price,
                growPercent: percentDifference(asset.price, coin.price),
                totalAmount: asset.amount * coin.price,
                totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                name: coin.name,
                ...asset,
            }
        })
    }

    useEffect(()=>{
        async function preload (){
            setIsLoading(true)
            const {result}= await fakeFetchCrypto()
            setCrypto(result)
            const assets = await fakeFetchAssets()
            setAssets(mapAssets(assets, result))
            setIsLoading(false)
        }
        preload()
    },[])

    function addAsset(newAsset) {
        setAssets((prev) => mapAssets([...prev, newAsset], crypto))
    }
    return <CryptoContext.Provider value={{isLoading , assets , crypto,  addAsset}}>
        {children}
    </CryptoContext.Provider>
}