import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Assurez-vous que ceci est importé
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    ProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Assurez-vous que ceci est ajouté
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
