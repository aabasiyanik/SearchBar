import React, { useState } from 'react';
import './SkillSearch.css';

let SKILLS = ['Java', 'React', 'HTML', 'AWS', 'Azure', 'DevOPS', 'JavaScript', 'TypeScript',"AccessData Certified Examiner",
"Access Control",
"Access Dimensions",
"Access Gateway",
"Access Lists",
"Access Points",
"Access to Justice",
"Accident Investigation",
"Accountants",
"Accounting",
"Accounts Payable",
"Accounts Receivable",
"Account Management",
"Account Reconciliation",
"Account Segmentation",
"Accredited Buyer Rep",
"Accredited Cruise Counselor",
"Accretion",
"Accruals"];

function SkillSearch() {
  const [inputValue, setInputValue] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSelectSkill(skill) {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setInputValue('');
    } else {
      setInputValue('');
    }
  }

  function handleDeleteSkill(skill) {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  }

  const availableSkills = SKILLS.filter((skill) => !selectedSkills.includes(skill));

  function renderSkillChip(skill) {
    return (
      <div className="skill-chip" key={skill}>
        <span className="skill-text">{skill}</span>
        <button className="delete-button" onClick={() => handleDeleteSkill(skill)}>
          X
        </button>
      </div>
    );
  }

  return (
    <div className="skill-search">
      <div className="selected-skills">
        {selectedSkills.map((skill) => renderSkillChip(skill))}
      </div>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Add skill"
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue && (
          <div className="options-dropdown">
            <ul className="options">
              {SKILLS
                .filter((skill) => skill.toLowerCase().includes(inputValue.toLowerCase()) && skill.toLowerCase().indexOf(inputValue.toLowerCase()) === 0)
                .map((skill) => (
                  <li key={skill} onClick={() => handleSelectSkill(skill)}>
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillSearch;