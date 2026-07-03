import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonSelect, IonSelectOption, IonButton 
} from '@ionic/angular/standalone';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonItem, IonSelect, IonSelectOption, IonButton, 
    TranslateModule
  ],
})
export class HomePage {
  
  // 1. Declaración de variables
  idiomas = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  idiomaActual = 'es';

  // 2. Constructor único con inyección de dependencias
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.idiomaActual);
    this.translate.use(this.idiomaActual);
  }

  // 3. Métodos funcionales
  cambiarIdioma(event: any) {
    const idiomaSeleccionado = event.detail.value;
    this.translate.use(idiomaSeleccionado);
  }
}