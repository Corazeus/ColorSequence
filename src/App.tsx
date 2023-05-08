import {useState} from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import './App.css'


function App() {

  let currentbutton;
  let currentcolor = '';
  let i = 0;

  const [color, setColor] = useState([
    {name: 'Red'},
    {name: 'Green'},
    {name: 'Blue'},
    {name: 'Yellow'},
    {name: 'Orange'},
    {name: 'Pink'},
    {name: 'Purple'},
    {name: 'Magenta'},
    {name: 'Brown'},
  ].sort( () => Math.random() - .5));

  const [rand, setRand] = useState([
    {n: 0},
    {n: 1},
    {n: 2},
    {n: 3},
    {n: 4},
    {n: 5},
    {n: 6},
    {n: 7},
    {n: 8},
  ].sort( () => Math.random() - .5));

  const handleClick = (id:any, colorname:any) => {

    currentbutton = document.getElementById('btn'+id)
    currentcolor = color[i].name;

    clicked(colorname, currentbutton);

    console.log(currentcolor)
  };

  function clicked(colorname:any, currentbutton:any){

  if(colorname === currentcolor && colorname !== color[8].name){

      i++;
      currentbutton!.style.backgroundColor = colorname;

  }else if(colorname !== currentcolor){

    for(let i=1; i<10; i++){
      const btn = document.getElementById('btn'+i)
      btn!.style.backgroundColor = '#497359';
    }
    i=0;
    currentcolor = '';

  }else{

    alert("Good Job!");
    currentcolor='';
    i=0;

    for(let i=1; i<10; i++){
      const btn = document.getElementById('btn'+i)
      btn!.style.backgroundColor = '#497359';
    }

    window.location.reload();

  }
  };

  return (


    <div className="App">

      <header className="App-header">

      <div className='colors' style={{display:'flex'}}>
        { color.map((item, i) =>
              <Box key={i} sx={{width: 40, height: 40, backgroundColor:`${item.name}`}}/>
        )}
      </div>

      <br></br>
      <br></br>

        <ButtonGroup variant='contained' aria-label='btnGroup1'>
        <Button id='btn1' onClick={() => handleClick('1', color[rand[0].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn2' onClick={() => handleClick('2', color[rand[1].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn3' onClick={() => handleClick('3', color[rand[2].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        </ButtonGroup>

        <ButtonGroup variant='contained' aria-label='btnGroup1'>
        <Button id='btn4' onClick={() => handleClick('4', color[rand[3].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn5' onClick={() => handleClick('5', color[rand[4].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn6' onClick={() => handleClick('6', color[rand[5].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        </ButtonGroup>

        <ButtonGroup variant='contained' aria-label='btnGroup1'>
        <Button id='btn7' onClick={() => handleClick('7', color[rand[6].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn8' onClick={() => handleClick('8', color[rand[7].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        <Button id='btn9' onClick={() => handleClick('9', color[rand[8].n].name)} variant='contained' sx={{backgroundColor: '#497359', width: 200, height: 80, margin: 1}}></Button>
        </ButtonGroup>

      </header>
    </div>
  );

}

export default App;
