const Translate=(props)=>{
    if(props.value == undefined || null)
    {
        return props.default
    }
    return props.value[props.lang];
        
}
export default Translate