import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  // Función para validar el formato de correo electrónico
  isValidEmail(email: string): boolean {
    // Expresión regular para validar el formato del correo
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  async onResetPassword() {
    if (this.email.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar un correo electrónico',
        buttons: ['OK']
      });
      await alert.present();
    } else if (!this.isValidEmail(this.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El formato del correo electrónico no es válido',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Correo enviado',
        message: `Se ha mandado un correo de verificación a ${this.email}`,
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
