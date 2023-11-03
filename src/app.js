const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0}
  ];
  
  const alive = characters.filter(item => item.health > 0);
  // Error eslint: "error 'alive' is assigned a value but never used  no-unused-vars"

  console.log(alive); // fix =)