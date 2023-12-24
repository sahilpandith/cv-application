import { useState } from 'react';
import './App.css';
import GeneralInfo from './GeneralInfo';
import EducationalInfo from './EducationalInfo';
import GeneralInfoDisplay from './GeneralInfoDisplay';
import EducationalInfoDisplay from './EducationalInfoDisplay';
import WorkExpInfo from './WorkExpInfo';
import WorkExpDisplay from './WorkExpDisplay';
import { useRef } from 'react';
import jsPDF from 'jspdf';

function App() {
  const reportTemplateRef = useRef(null);
  const [generalData ,setGeneralData] = useState({
    name:"",
    emailId:"",
    phoneNo:""
});

  const [educationalData ,setEducationalData] = useState({
    instituteName:"",
    degreeType:"",
    startDate:"",
    endDate:""
  });
  const [expData ,setExpData] = useState({
    companyName:"",
    position:"",
    startDate:"",
    endDate:""
  });

  const [ gDataDisplay,setGDataDisplay] = useState({});
  const [edDataDisplay,setEdDataDisplay] = useState([]);
  const [expDataDisplay,setExpDataDisplay] = useState([]);

  

  const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('resume');
			},
		});
	};
  return (
    <div className="root">
      <header><span>Create Your CV</span></header>
      <main>
        <div className='wrapper'>
        <div className='editable-info'>
          <GeneralInfo generalData={generalData} setGeneralData={setGeneralData} setGDataDisplay={setGDataDisplay}></GeneralInfo>
          <EducationalInfo educationalData={educationalData} setEducationalData={setEducationalData} setEdDataDisplay={setEdDataDisplay}></EducationalInfo>
          <WorkExpInfo expData={expData} setExpData={setExpData} setExpDataDisplay={setExpDataDisplay}></WorkExpInfo>
          <button onClick={handleGeneratePdf}>Download</button>
        </div>
        <div ref={reportTemplateRef} className='display-info'>
           <GeneralInfoDisplay data={gDataDisplay}></GeneralInfoDisplay>
           <EducationalInfoDisplay data={edDataDisplay}></EducationalInfoDisplay>
           <WorkExpDisplay data={expDataDisplay}></WorkExpDisplay>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
