import React, { useState } from 'react';
import './SkillSearch.css';

let SKILLS = ['Java', 'React', 'HTML', 'AWS', 'Azure', 'DevOPS', 'JavaScript', 'TypeScript',"AccessData Certified Examiner", 'Active listening',
'Adaptability',
'Administration',
'Advocacy',
'Analysis',
'Analytical',
'Assertiveness',
'Attention to detail'];

function SkillSearch() {
  const [inputValue, setInputValue] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputWidth, setInputWidth] = useState(80); // add state for input width

  function handleInputChange(event) {
    const value = event.target.value;
  
    if (/^[a-zA-Z0-9]*$/.test(value)) { // check if value contains only letters and numbers
      setInputValue(value);
  
      let factor = /[A-Z]/.test(value) && value.includes('W') ? 14.3 : (/[w]/.test(value) ? 12.3 : /[A-Z]/.test(value) && !value.includes('W') ? 11 : 8.9);
  
      setInputWidth(value.length * factor);
  
      if (value.length === 0) {
        setInputWidth(80);
      }
    }
  }

  function handleSelectSkill(skill) {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setInputValue('');
      setInputWidth(80);
    } else {
      setInputValue('');
      setInputWidth(80);
    }
  }

  function handleDeleteSkill(skill) {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  }

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
          style={{ width: inputWidth }}
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