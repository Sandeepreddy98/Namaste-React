import { useEffect, useState } from "react"

const useNetworkStatus = () => {
    // State to store the network status
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        window.addEventListener('offline',() => {
            setIsOnline(false)
        })

        window.addEventListener('online',() => {
            setIsOnline(true)
        })

        return ()=> {
            window.removeEventListener('offline',() => {})
            window.removeEventListener('online',() => {})
        }

    },[])

    return isOnline
}

export default useNetworkStatus