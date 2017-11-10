var axios = require('axios');

function axiosRequest()
{
    console.log('Sending Request');
    axios.get('http://local.test/api')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log('Reponse displayed');
}

function axiosRequestPost()
{
    console.log('Sending Request');
    axios.post('http://local.test/api')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
    console.log('Reponse displayed');
}


  

console.log("script Ready");