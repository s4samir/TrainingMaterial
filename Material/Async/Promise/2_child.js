let promiseToCleanTheRoom = new Promise(function (resolve, reject) {

    let isClean = true;

    if (isClean) {
        resolve('Clean');
    } else {
        resolve('not Clean');
    }
})

promiseToCleanTheRoom
    .then(function (result) {
        console.log("the room is " + result);
    })
    .catch(function (result) {
        console.log("the room is " + result);
    })




