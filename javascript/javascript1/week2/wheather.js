function clothesPicker(temperature) {
   if(temperature >= 40) {
    return 'Stay home';
  }
   else if(temperature >= 20) {
    return 'wear a t-shirt and a short';
  }
  else if(temperature >= 10)
  {
    return 'wear pants and spring jacket';
  }
  else if(temperature >= 0)
  {
    return 'wear a winter jacket';
  }
  else
  return 'wear winter jacket, scarf and a winter hat';
}
const clocthesToWear = clothesPicker(30);
console.log(clothesToWear);