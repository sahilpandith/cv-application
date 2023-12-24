import './GeneralInfoDisplay.css';
function GeneralInfoDisplay({ data }){
    return <div className="g-display-wrapper">
        <div className="name">{data.name}</div>
        <div className="email">{data.emailId}</div>
        <div className="phoneNo">{data.phoneNo}</div>
    </div>
}

export default GeneralInfoDisplay;