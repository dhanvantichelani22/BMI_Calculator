import React, { useState } from 'react'

const Calculate = () => {
  const [age,setAge] = useState();
  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [bmi,setBMI] = useState('');
  const [msg,setMsg] = useState('');
  // const [error,SetErrorMsg] = useState('');

  const reset = ()=>{
    window.location.reload()
  }

  const handleCalculate = (e)=>{
    e.preventDefault();
    if(height === 0 || weight === 0 ){
      alert("Number Cannot Be Zero So Please Enter Valid Height And Weight");
    }
    else if (height === ""){
      alert("Please Enter Your Height");
    }
    else if (weight === ""){
      alert("Please Enter Your Weight");
    }
    else {
        let bmiFormulate = (weight / (height*height) * 703);
        setBMI(bmiFormulate.toFixed(2));
    
    if(bmi < 18.5){
        setMsg("You're Underweight");
      }
    else if (bmi >= 18.5 || bmi <= 24.9){
        setMsg("You're Normal");
      }
      else if(bmi >= 25 || bmi <= 29.9 ){
        setMsg("You're OverWeight");
      }
      else{
        setMsg("You're Obesity");
      }
  }
}
 
  return (
    <div className="container">
      <h2>BMI CALCULATOR</h2>
      <div className='card'>
      <div className="box-input">
        <form onSubmit={handleCalculate}>
        <div>
          <label>Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" placeholder=" Enter Age..." required value={age} onChange={(e)=>setAge(e.target.value)}/><br/><br/>
        </div>
        <div>
          <label>Weight : </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" placeholder="Please Enter weight..." value={weight} onChange={(e)=>setWeight(e.target.value)}/><br/><br/>
        </div>
        <div>
          <label>Height :</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" placeholder="Please Enter Height..."  value={height} onChange={(e)=>setHeight(e.target.value)}/><br/><br/>
        </div>
        <div>
          {/* disabled={!weight || !height} */}
            <button type='submit' className='btn calculate' >Calculate</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='reset' className='btn reset' onClick={reset}>Clear</button>
        </div>
        <div className='result'>
            <h3>Age :{age}</h3>
            <h3>Your BMI is : {bmi}</h3>
            <p className="p-msg">{msg}</p>
          {/* <p className="error-text">{error}</p> */}
        </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Calculate