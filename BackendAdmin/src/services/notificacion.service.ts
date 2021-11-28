import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Servicio de mensajeria por Twilio
   */

  NotificacionesSMS():void{
    console.log("hola");
    const accountSid = 'ACab27ac8cc28762df0da579e0dbfce6ac'; // Your Account SID from www.twilio.com/console
    const authToken = '2518ac2a34f631bf034354fba26f1f5a'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Prueba de mensajería',
    to: '+57 3023557964', // Text this number
    from: '+18123625389', // From a valid Twilio number
  })
  .then((message: any) => console.log(message.sid));

  }
}

// NOTA PARA PAOLA:
// Para que puedas probar la función de mensajería debes cambiar las constantes de accountSID y de authtoken por los valores que están en tu twilio, además cambiar el numero de from, y el de to debe ser tu numero registrado en twilio. Para terminar debes correr la app y desde el API explorer entras al EmpleadoController y creas uno nuevo desde el método Post, en el momento que lo creas, debe llegarte el msj.  :D
