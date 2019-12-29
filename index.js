

// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5].reduce(function(totalBatteries, element){ return element  + totalBatteries}, 0)
   console.log(batteryBatches);