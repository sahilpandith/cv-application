/* eslint-disable react/jsx-key */
import './EducationalInfoDisplay.css'


// eslint-disable-next-line react/prop-types
function EducationalInfoDisplay({data }){
 
 return <div className="educational-info-display-wrapper">
        { data.length >0 &&<div className="title">
            <div className="educational-qualification">
                Educational Qualification
            </div>
            <ol>
            {data.map(d => <li>
                <div className='item'>
                                <div>Institute</div><div>{d.instituteName}</div>
                                <div>Degree</div><div>{d.degreeType}</div>
                                <div>Start Date</div><div>{d.startDate}</div>
                                <div>End Date</div><div>{d.endDate}</div>
                            </div>
            </li>
            )}
            </ol>            
        </div>}
 </div>
}


export default EducationalInfoDisplay