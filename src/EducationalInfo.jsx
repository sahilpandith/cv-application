import './EducationalInfo.css'


// eslint-disable-next-line react/prop-types
function EducationalInfo({educationalData ,setEducationalData,setEdDataDisplay}){

 const handler = (key,e) => {
    setEducationalData({...educationalData,[key]:e.target.value})
 }

 function addEducationalQualification(e){
    e.preventDefault();
    setEdDataDisplay((prev) => [...prev,educationalData]);
    console.log(educationalData);
}
 return <div className="educational-info-wrapper">
     <div className="title">
         Educational Qualification
     </div>
     <form className="form" onSubmit={addEducationalQualification}>
         <label htmlFor="name">Institute Name</label>
         <input type="text" id="name" value={educationalData.instituteName} onChange={(e) => handler('instituteName',e)}/>
         <label htmlFor="degree">Degree Name</label>
         <input type="text" id="degree" value={educationalData.degreeType} onChange={(e) => handler('degreeType',e)}/>
         <label htmlFor="startDate">Start Date</label>
         <input type="date" id="startDate" value={educationalData.startDate} onChange={(e) => handler('startDate',e)}/>
         <label htmlFor="endDate">End Date</label>
         <input type="date" id="endDate" value={educationalData.endDate} onChange={(e) => handler('endDate',e)}/>
         <button type='submit'>Add</button>
     </form>
 </div>
}


export default EducationalInfo