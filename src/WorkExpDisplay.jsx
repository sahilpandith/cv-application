/* eslint-disable react/jsx-key */
import './WorkExpDisplay.css'


// eslint-disable-next-line react/prop-types
function WorkExpDisplay({data }){
 
 return <div className="work-info-display-wrapper">
        { data.length >0 && <div className="title">
            <div className="work-qualification">
                Work Experience
            </div>
            <ol>
            {data.map(d => <li>
                <div className='item'>
                                <div>Company Name</div><div>{d.companyName}</div>
                                <div>Position</div><div>{d.position}</div>
                                <div>Start Date</div><div>{d.startDate}</div>
                                <div>Untill</div><div>{d.endDate ? d.endDate : 'present'}</div>
                            </div>
            </li>
            )}
            </ol>            
        </div>}
 </div>
}


export default WorkExpDisplay