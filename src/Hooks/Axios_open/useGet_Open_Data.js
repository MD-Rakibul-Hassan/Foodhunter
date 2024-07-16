import axios from "axios"
import { useState } from "react"


const useGet_Open_Data = (url) => {
    const [data,setData] = useState([])
    axios.get(url)
        .then(res => {
        setData(res.data)
    })
    return data
}

export default useGet_Open_Data
