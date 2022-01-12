import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getEnvVarList } from '../../utils/envVarList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  processEnv: any = getEnvVarList();
}
