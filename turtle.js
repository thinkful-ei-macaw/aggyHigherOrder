
function turtle(arr){
    let stepArr = arr.filter(element => {
        return element[0] >= 0 && element[1] >= 0;
    })

    let stepMap = stepArr.map(element => element[0] + element[1]);

    let counter = 0;

    stepCount.arr.forEach(element =>{
        counter++
        console.log(`Movement #${counter}: ${element} ${element == 0 || element > 1 ? 'steps' : 'step'}`);
    });
}
turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);