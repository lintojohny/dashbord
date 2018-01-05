import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from './admin/pages/sidebar/sidebar.component';
import { HeaderComponent } from './admin/pages/header/header.component';
import { FormsComponent } from './admin/pages/forms/forms.component';
import { FooterComponent } from './admin/pages/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainContentComponent } from './admin/pages/main-content/main-content.component';
import { ProductService } from './services/product.service';
import { CategoriesComponent } from './category/categories/categories.component';
import { ProductsComponent } from './category/products/products.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditComponent } from './category/categories/edit/edit.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {MatRadioModule} from '@angular/material/radio';
import { OptionsComponent } from './category/options/options.component';
import {Component, VERSION, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AttributesComponent } from './category/attributes/attributes.component';
import { ReviewsComponent } from './category/reviews/reviews.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InformationComponent } from './category/information/information.component';
import { FeedbackComponent } from './category/feedback/feedback.component';
import { GalleryComponent } from './category/gallery/gallery.component';
import { TableReservationComponent } from './category/table-reservation/table-reservation.component';
import { DriverManagementComponent } from './category/driver-management/driver-management.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ModulesComponent } from './extensions/modules/modules.component';
import { DeliveryComponent } from './extensions/delivery/delivery.component';
import { PaymentsComponent } from './extensions/payments/payments.component';
import { OrderTotalsComponent } from './extensions/order-totals/order-totals.component';
import { LastComponent } from './category/last/last.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FormsComponent,
    FooterComponent,
    MainContentComponent,
    ProductsComponent,
    CategoriesComponent,
    EditComponent,
    OptionsComponent,
    AttributesComponent,
    ReviewsComponent,
    InformationComponent,
    FeedbackComponent,
    GalleryComponent,
    TableReservationComponent,
    DriverManagementComponent,
    NavbarComponent,
    ModulesComponent,
    DeliveryComponent,
    PaymentsComponent,
    OrderTotalsComponent,
    LastComponent
      ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatRadioModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    FroalaEditorModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'admin', component: MainContentComponent   },
      { path: 'sidebar', component: SidebarComponent  },
      { path: 'forms', component: FormsComponent  },
      { path: 'footer', component: FooterComponent  } ,
      { path: 'category/categories', component: CategoriesComponent  },
      { path: 'category/categories/edit', component: EditComponent  },
      { path: 'category/products', component: ProductsComponent  },
      { path: 'category/options', component: OptionsComponent  },
      { path: 'category/reviews', component: ReviewsComponent  },
      { path: 'category/attributes', component: AttributesComponent  },
      { path: 'category/information', component: InformationComponent  },
      { path: 'category/feedback', component: FeedbackComponent  },
      { path: 'category/gallery', component: GalleryComponent  },
      { path: 'category/table-reservation', component: TableReservationComponent  },
      { path: 'category/driver-management', component: DriverManagementComponent  },
      { path: 'extentions/modules', component: ModulesComponent  },
      { path: 'extentions/delivery', component: DeliveryComponent  },
      { path: 'extentions/payments', component: PaymentsComponent  },
      { path: 'extentions/order-totals', component: OrderTotalsComponent  }
    ])

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
