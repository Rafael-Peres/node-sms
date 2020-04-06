const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

(async function () {
  const sms = await axios({
    url: 'https://api2.totalvoice.com.br/sms',
    method: 'post',
    headers: {
      'Access-Token': process.env.TOTALVOICE_API_KEY
    },
    data: {
      'numero_destino': process.env.DESTINY_TELEPHONE,
      'mensagem': 'Teste de envio de SMS com total voice'
    }
  });
  console.log(sms.data)
})();