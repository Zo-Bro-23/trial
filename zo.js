function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sendRequest() {
    console.log('querying DB')
    sleep(3000).then(res => console.log('Got result ', res))
    console.log('Next task; finished querying')
}

sendRequest()