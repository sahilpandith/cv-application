import './WorkExpInfo.css'


// eslint-disable-next-line react/prop-types
function WorkExpInfo({expData ,setExpData,setExpDataDisplay}){

 const handler = (key,e) => {
    setExpData({...expData,[key]:e.target.value})
 }

 function addWorkExp(e){
    e.preventDefault();
    setExpDataDisplay((prev) => [...prev,expData]);
    console.log(expData);
}
 return <div className="work-info-wrapper">
     <div className="title">
         Work Experience
     </div>
     <form className="form" onSubmit={addWorkExp}>
         <label htmlFor="name">Company Name</label>
         <input type="text" id="name" value={expData.companyName} onChange={(e) => handler('companyName',e)}/>
         <label htmlFor="degree">Position</label>
         <input type="text" id="degree" value={expData.position} onChange={(e) => handler('position',e)}/>
         <label htmlFor="startDate">Start Date</label>
         <input type="date" id="startDate" value={expData.startDate} onChange={(e) => handler('startDate',e)}/>
         <label htmlFor="endDate">Untill</label>
         <input type="date" id="endDate" value={expData.endDate} onChange={(e) => handler('endDate',e)}/>
         <button type='submit'>Add</button>
     </form>
 </div>
}


export default WorkExpInfo