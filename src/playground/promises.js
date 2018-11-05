const newPromise = new Promise((resolve, reject) => {
    resolve('This is my resolved data'),
    setTimeout(
        () => reject('This is my resolved data'),
        2000
    )
    ;
});


newPromise
    .then(console.log)
    .catch((cool) => console.log('catch', cool))