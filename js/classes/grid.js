class grid{
 constructor(){
 }
}
  this.position ={
    x: 0,
    y: 0,
  };
  this.velocity ={
    x: 3,
    y: 0,
  };
  this.invaders = [];

  const columns = Math.floor(Math.random()* 10 + 5);
  const rows = Math.floor(Math.random()* 10 + 2);
  this.whidth = columns * 30;

   for(let i = 0; i < columns; i++){
    for(let j = 0; j < rows; j++) { 
        this.invaders.push{new invader()}
    }
    
        }

        


