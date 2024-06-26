------------------HTML----------------------------
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Calculate me! - A calculator made my me</title>
</head>

<body>
  <h1 class="text-center">CODSOFT CALCULATOR!</h1>
  <div class="container flex flex-col items-center mx-auto m-w-20">
    <div class="row">
      <input class="input" type="text"/>
    </div>
    <div class="row">
      <button class="button">C</button>
      <button class="button">%</button>
      <button class="button">M+</button>
      <button class="button">M-</button>
    </div>
    <div class="row">
      <button class="button">7</button>
      <button class="button">8</button>
      <button class="button">9</button>
      <button class="button">*</button>
    </div>
    <div class="row">
      <button class="button">4</button>
      <button class="button">5</button>
      <button class="button">6</button>
      <button class="button">/</button>
    </div>
    <div class="row">
      <button class="button">1</button>
      <button class="button">2</button>
      <button class="button">3</button>
      <button class="button">+</button>
    </div>
    <div class="row">
      <button class="button">0</button>
      <button class="button">.</button>
      <button class="button">=</button>
      <button class="button">-</button>
    </div>
  </div>/
</body>
--------------------CSS---------------------------------------------------------------------------------
  <style>
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Ubuntu:wght@300&display=swap'); */
  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 0, 21);
    background-color: rgb(84, 129, 129); 
  }
  
  .button{
    width: 66px;
    padding: 20px;
    margin: 0 3px;
    border: 2px solid rgb(195, 31, 31);
    border-radius: 9px;
    cursor: pointer;
  }
  
  .row{
    margin: 8px 0;
  }
  .row input{
    width: 291px;
    font-size: 20px;
      margin: 0;
      padding: 10px 0px;
      border: 2px solid rgba(58, 8, 237, 0.872);
      border-radius: 5px;
  }
  
  .text-center{
      text-align: center;
    }
    
  .bg-red{
      background: rgb(147, 22, 210);
    }
    
    .mx-auto{
      margin: auto;
    }
    
    .flex{
      display:flex;
    } 
    .flex-col{
      flex-direction: column;
    }
    
    .items-center{
      align-items: center;
    }
  </style>
----------------------------JAVASCRIPT-----------------------------------------------------
  
  <script>
  
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
  </script>

</html>
