import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { environment } from '../environments/envinronment.prod';
import { TodoState } from '../app/store/todo.state';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeEditComponent } from './challenge/challenge-edit.component/challenge-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, ReactiveFormsModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: !environment.production
    })],
  declarations: [AppComponent, ItemsComponent,
    ItemDetailComponent, ChallengeComponent, ChallengeEditComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
