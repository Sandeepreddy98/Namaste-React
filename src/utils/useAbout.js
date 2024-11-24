import { useEffect, useState } from "react"

const useAbout = (userId) => {
    const [userInfo,setUserInfo] = useState(null)

    useEffect(() => {
        fetchUserData()
    },[])
    
    const fetchUserData = async () => {
        const gitHubData = await fetch("https://api.github.com/users/" + userId).then(res => res.json())
        setUserInfo(gitHubData)
    }
    return userInfo
}

export default useAbout