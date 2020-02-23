function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const meatballSwarmWarning = hazardWarningCreator('Far realm meat sighting in area');
const worldRevolvingWarning = hazardWarningCreator('The World is Revolving! Strap in for safety!');


rocksWarning('Ur');
rocksWarning('Pinnacle');
meatballSwarmWarning('Ur');
worldRevolvingWarning('Spiral Island');