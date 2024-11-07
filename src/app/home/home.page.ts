import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';


  constructor(private navCtrl: NavController, private alertController: AlertController) {}

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

    console.log('Ingreso exitoso');
    this.navCtrl.navigateForward(`/welcome/${this.username}`);
  }

  onResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }
}
