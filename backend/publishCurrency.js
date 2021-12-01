import socketServer from './server.js';
import axios from 'axios'
async function getCurrencyPrice(){
    // let data  = await axios.get(`https://api.exchangerate-api.com/v4/latest/INR`);
    // console.log(data)
    // data['data']['rates'] = { };
    // data['data']['rates'].USD = Math.random()
    // data['data']['rates'].EUR = Math.random()
    // data['data']['rates'].SGD = Math.random()
    // data['data']['rates'].AUD = Math.random()
    // data['data']['rates'].GBP = Math.random()
    let data ={
        data:{
            rates:{
                USD : Math.random(),
                EUR : Math.random(),
                SGD : Math.random(),
                AUD : Math.random(),
                GBP : Math.random()
            }
        }
    }
    socketServer.emit('event', data['data']); 
    currencyExchangePublisher()
         
}
export const currencyExchangePublisher = () =>{
    console.log('currency exchange publishing....')

    setTimeout(function(){ 
        getCurrencyPrice()
     }, 5000);
    
}
export default  currencyExchangePublisher;