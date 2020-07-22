let serverInfo, serverDescription;

pp.addEventListener('click', async () => {
    serverInfo, serverDescription = undefined;

    axios.get('/serviceavailable/')
         .then(resp => {
             return new Promise((resolve, reject) => { 
                 if (!resp.data.isSucceeded) {
                     serverResponse.innerHTML = 'Произошла ошибка';
                     reject(); 
                 } else {
                     resolve();
                 }
             });
         })
         .then(async resp => {
             await Promise.allSettled([
                new Promise((resolve, reject) => axios.get('/getinfo')
                     .then(resp => {
                         if (resp.data.isSucceeded) {
                             serverInfo = resp.data.text; 
                             resolve();
                         } else {
                             reject();
                         }
                     })
                     .catch(err => serverResponse.innerHTML = 'Произошла ошибка')),

                new Promise((resolve, reject) => axios.get('/getdescription')
                     .then(resp => {
                         if (resp.data.isSucceeded) {
                             serverDescription = resp.data.text; 
                             resolve();   
                         } else {
                            reject();
                        }
                     })
                     .catch(err => serverResponse.innerHTML = 'Произошла ошибка'))
             ]);
         })
         .then(resp => {
             if (serverInfo || serverDescription) {
                serverResponse.innerHTML = `${serverInfo != undefined ? serverInfo + ` ` : ``}` + 
                                           `${serverDescription != undefined ? serverDescription : ``}`;
             } else {
                console.log('Server Error');
             }
         })
         .catch(err => serverResponse.innerHTML = 'Произошла ошибка');
});
