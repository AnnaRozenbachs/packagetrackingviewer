import { useState } from "react"
import { useEffect } from "react"
import DatatableView from './Components/DataTableView'
import Translations from './Translations.json'

const Home =()=>{

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
        .then(response=> response.json())
        .then(data => setData(data))
        .catch((error)=> console.error("error", error));

    },[]);

    return (
      
       <DatatableView translations={Translations} dataView={data}/>
        
    )
}
export default Home