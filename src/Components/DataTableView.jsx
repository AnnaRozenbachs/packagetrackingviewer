import { useState } from 'react'
import Moment from 'react-moment'
import Translate from './Translate'
import lang from './ImageLanguageSource'


const DataTableView =(data)=>{
    
    const [activeLang, setActiveLang] = useState(lang[0].id);

    let translations = data.translations[0];
    
    const selectLanguage= (id)=>()=>{
        setActiveLang(id);
    }

    return (
        <div className="main">
            <div className="container">
                <div className="row row-cols-auto">
                    <div className="col-headline col-xs-4">
                        <h1><Translate lang={activeLang} value={translations.ApplicationHeadLine} default="Package tracking viewer" /></h1>
                    </div>
                    {
                        lang.map(item => (
                            <div key={item.id} className="col">
                                <img className={activeLang == item.id ? "active" : ""} onClick={selectLanguage(item.id)} src={item.src}></img>
                            </div>
                        ))
                    }
                </div>             
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th><Translate lang={activeLang} value={translations.tableHeaderParcelId} default="Parcel Id" /></th> 
                                <th><Translate lang={activeLang} value={translations.tableHeaderLocationName} default="Location name" /></th>
                                <th><Translate lang={activeLang} value={translations.tableHeaderColumnSender} default="Sender" /></th>
                                <th><Translate lang={activeLang} value={translations.tableHeaderColumnStatus} default="Status" /></th>
                                <th><Translate lang={activeLang} value={translations.tableHeaderColumnUsername} default="Username" /></th>
                                <th><Translate lang={activeLang} value={translations.tableHeaderColumnETA} default="ETA" /></th>
                            </tr>
                        </thead>
                        <tbody>
                           {data.dataView.length>0?                            
                               
                                data.dataView.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.parcel_id}</td>
                                        <td>{item.location_name}</td>
                                        <td>{item.sender}</td>
                                        <td><Translate default={item.status} lang={activeLang} value={translations[item.status]}/></td>
                                        <td>{item.user_name}</td>
                                        <td>{<Moment format='yyyy-MM-DD'>{item.eta}</Moment>}</td>
                                    </tr>
                                
                                )):
                              <tr><td colSpan="6">Loading</td></tr>
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default DataTableView