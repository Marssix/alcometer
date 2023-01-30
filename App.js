import React, { useState } from "react"
import Select from "react-select"

const App = () => {
  const [result, setResult] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] =useState();
  const [bottles, setBottles] =useState();
  const [time, setTime] =useState();
  var alcohol;
  var litres;
  var grams;
  var burning;

  const handleAlcohollvl = () => {
    litres = bottles.value * 0.33;
    grams = litres * 8 * 4.5;
    burning = weight / 10;
    grams = grams - (burning * time.value);
    console.log(gender);
    switch (gender){
      case "male":
        alcohol = grams / (weight * 0.7);
        setResult(Number(alcohol).toFixed(2));
        if(alcohol <= 0){alcohol = 0;}
        break;
      case "female":
        alcohol = grams / (weight * 0.6);
        if(alcohol <= 0){alcohol = 0;}
        setResult(Number(alcohol).toFixed(2));
        break;
        }
    }


  //Time
  const timeOptions = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
  ]
  //Bottles
  const bottleOptions = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
  ]

  const onGenderChange = e => {
    setGender(e.target.value)
  }
  return (
    <div>
      <h1>Alcohol blood level</h1>
      <br></br> <br></br>
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight in kg"
      />
      <br></br>
      <h4>Select the number of bottles</h4>
      <Select options={bottleOptions} onChange={setBottles} />
      <br></br>
      <h4>Hours from drinking</h4>
      <Select options={timeOptions} onChange={setTime} />
            <h4>Gender:</h4>
            <input type="radio"
             name="male"
             value="male"
             id= "male"
             checked={gender === "male"}
             onChange={onGenderChange}
          />
          <label htmlFor="male">Male</label>
            <input type="radio"
             name="female"
             value="female"
             id= "female"
             checked={gender === "Female"}
             onChange={onGenderChange}
          />
          <label htmlFor="female">Female</label>
      <br></br>
      <p>Selected Gender: {gender}</p>
      <br></br>
      <button onClick={handleAlcohollvl}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
}
export default App;
