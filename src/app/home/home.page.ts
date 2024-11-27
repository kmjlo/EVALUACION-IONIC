import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticatorService } from '../servicio/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';


  constructor(private navCtrl: NavController, private alertController: AlertController, private auth: AuthenticatorService) {}

  // Función para validar el nombre de usuario y la contraseña
  async onLogin() {
    // Verifica que los campos no estén vacíos
    

    if (this.username.trim() === '' || this.password.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar un nombre de usuario y una contraseña',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.username.length < 5) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario debe tener al menos 5 caracteres',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (this.password.length < 5) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña debe tener al menos 5 caracteres',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    

    this.auth.login(this.username, this.password).subscribe(
      async (response: any) => {
        // Si la respuesta es positiva, redirige al usuario
        console.log('Ingreso exitoso', response);
        this.navCtrl.navigateForward(`/welcome/${this.username}`);
      },
      async (error: any) => {
        // Si las credenciales no son correctas, muestra un error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Nombre de usuario o contraseña incorrectos',
          buttons: ['OK']
        });
        await alert.present();
      }
    );

  }

  onResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }

  
}

