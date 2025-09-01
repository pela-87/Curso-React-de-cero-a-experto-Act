
const myPromise = new Promise<number>(( resolver, reject ) => {
    setTimeout(() => {
        //! Yo quiero mi dinero. Caso exito
        // resolver(100);
        //! Mi amigo se fugo y no pago. Caso fracaso
        reject('Mi amigo se fugo.')
    }, 2000) //2 segundos
});

myPromise
    .then(( myMoney ) => {
        console.log( `Tengo mi dinero ${myMoney}`);
    })
    .catch( (resolve => {
        console.warn(resolve)
        })
    )
    .finally(() => {
        console.log('La vida sigue, con o sin la plata.')
    });