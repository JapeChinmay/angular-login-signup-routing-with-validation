import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { HomeComponent } from './home/home.component';
import { AuthGuardService } from '../auth.guards.service';
import { AuthService } from '../auth-service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FeatureRoutingModule],
  providers: [AuthGuardService],
})
export class FeatureModule {}
