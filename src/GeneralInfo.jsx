import './GeneralInfo.css'


// eslint-disable-next-line react/prop-types
function GeneralInfo({generalData,setGeneralData,setGDataDisplay}){

 const handler = (key,e) => {
    setGeneralData({...generalData,[key]:e.target.value})
 }

 function addGeneralInfo(e){
    e.preventDefault();
    setGDataDisplay(generalData)
}
 return <div className="general-info-wrapper">
     <div className="title">
         General Information
     </div>
     <form className="form" onSubmit={addGeneralInfo}>
         <label htmlFor="name">Name</label>
         <input type="text" id="name" value={generalData.name} onChange={(e) => handler('name',e)}/>
         <label htmlFor="email">Email</label>
         <input type="email" id="email" value={generalData.emailId} onChange={(e) => handler('emailId',e)}/>
         <label htmlFor="phone">Phone no.</label>
         <input type="tel" id="phone" value={generalData.phoneNo} onChange={(e) => handler('phoneNo',e)}/>
         <button type='submit'>Add</button>
     </form>
 </div>
}


export default GeneralInfo