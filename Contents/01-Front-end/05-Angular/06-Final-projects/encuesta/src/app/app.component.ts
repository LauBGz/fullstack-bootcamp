import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encuesta';

    //donde se guardarán los datos
    formData: object = {}

    submitData(form){
      form.reset();
      console.log(this.formData)
      alert("Datos enviados!")
    }
}
