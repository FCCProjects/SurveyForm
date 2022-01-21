import './App.css';

import React from 'react'

const App = () => {
  return (
    <div>
      <body>
        <h2>Computer Science Survery Form</h2>
        <h6>Thank you for taking the survey</h6> 

        <div className='center'>
          <form id="survey-form" className='box'>
            <label for="name" id="name-input">Name</label>
            <input type="text" id="name-input" name="name" placeholder= "Enter your name" required></input>

            <label for="email" id="email-input">Email</label>
            <input type="text" id="name-input" name="email" placeholder= "Enter your Email" required></input>

            <label for="age" id="age-input">Age (optional)</label>
            <input type="text" id="age-input" name="age" placeholder="Age" required></input>

            <label for="role" id="roll-input">Which option best describes your current role?</label> 
            <select id="roles" className="pulldown" placeholder="Select current role">
              <option value="Select current role" disabled selected>Select current role</option>
              <option value="Student">Student</option>
              <option value="Full Time Job">Full time job</option>
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="Other">Other</option>
            </select>



            <p>Would you recommend Computer Science to a Friend?</p>
            <div id="answers1">
              <div id="answer">
                <input id="input1" type="radio" name="input1"/>
                <label>Definitely</label>
              </div>
                

              <div id="answer">
                <input id="input1" type="radio" name="input1"/>
                <label>Maybe</label>
              </div>

              <div id="answer">
                <input id="input1" type="radio" name="input1"/>
                <label>Not Sure</label>
              </div>
            </div>





            
            
            <label for="feature" id="feature-input">What is your favorite feature of Computer Science?</label>
            <select id="feature"className="pulldown">
              <option value="Select an option" disabled selected>Select an option</option>
              <option value="Challenges">Challenges</option>
              <option value="Projects">Projects</option>
              <option value="Community">Community</option>
            </select>

            <p>What would you like to see improved?</p>
            <label><input type="checkbox" name="option1" id="option1"></input>Front-end Projects</label> 
            <label><input type="checkbox" name="option2" id="option2"></input>Back-end Projects</label>
            <label><input type="checkbox" name="option3" id="option3"></input>Data Visualization</label>
            <label><input type="checkbox" name="option4" id="option4"></input>Challenges</label>
            <label><input type="checkbox" name="option5" id="option5"></input>Open Source Community</label>
            <label><input type="checkbox" name="option6" id="option6"></input>Gitter help rooms</label>
            <label><input type="checkbox" name="option7" id="option7"></input>Videos</label>
            <label><input type="checkbox" name="option8" id="option8"></input>City Meetups</label>
            <label><input type="checkbox" name="option9" id="option9"></input>Wiki</label>
            <label><input type="checkbox" name="option10" id="option10"></input>Forum</label>
            <label><input type="checkbox" name="option11" id="option11"></input>Additional Courses</label>

            <p>Any comments or suggestions?</p>
            <textarea rows="7" cols="90" name="comment" form="usrform">Enter text here...</textarea>  

            <button type="submit">Submit</button>


           </form>
          
        </div> 

      </body>
    </div>
  )
}

export default App;
