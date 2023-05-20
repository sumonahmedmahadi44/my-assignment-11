import { useEffect } from "react"

const SetTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}-Unique Car Toys`
    },[title])
};
export default SetTitle;