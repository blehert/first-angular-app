import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MainCardComponent } from './components/main-card/main-card.component'
import { CardComponent } from './components/card/card.component'
import { NavigateComponent } from './components/navigate/navigate.component'
import { SummaryPageComponent } from './pages/summary-page/summary-page.component'
import { ListPageComponent } from './pages/list-page/list-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    CardComponent,
    NavigateComponent,
    SummaryPageComponent,
    ListPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
