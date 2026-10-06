import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListService } from './product-list-service/product-list-service';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './product-list-search-component/product-list-search-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';
import { Contact } from './contact/contact';
import { authGuard } from './classes/auth.guard';
import { CourseRegistrationComponent } from './course-registration-component/course-registration-component';
import { LoginComponent } from './login-component/login-component';
import { CourseRegistrationReactiveComponent } from './course-registration-reactive-component/course-registration-reactive-component';
import { ProductImageEventComponent } from './product-image-event-component/product-image-event-component';
import { ProductImageEventDetailComponent } from './product-image-event-detail-component/product-image-event-detail-component';
import { ProductCatalogComponent } from './product-catalog-component/product-catalog-component';
import { CustomerGroupComponent } from './customer-group-component/customer-group-component';

const routes: Routes = [
  {path: 'binding-property', component: BindingPropertyComponent},
  {path: 'binding-class', component: BindingClassComponent},
  {path: 'binding-style', component: BindingStyleComponent},
  {path: 'binding-event', component: BindingEventComponent},
  {path: 'binding-two-way', component: BindingTwoWayComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-dropdown-list', component: ProductDropdownListComponent},
  {path: 'product-list-service', component: ProductListService},
  {path: 'product-list-call-http-service', component: ProductListCallHttpServiceComponent},
  {path: 'product-http-handle-error-service', component: ProductHttpHandleErrorServiceComponent},
  {path: "products/:id", component: ProductDetailComponent},
  {path: 'products', component: ProductListAdvancedComponent},
  {path: 'search-product', component: ProductListSearchComponent, canActivate: [authGuard]},
  {
    path: 'samplenested',
    component: ProductListAdvancedComponent,
    children: [
      {path:'search', component: ProductListSearchComponent},
      {path:'detail/:id', component: ProductDetailComponent}
    ]
  },
  {path: 'lazyinfo',
    loadComponent: () => 
      import('./lazy-component/lazy-component')
    .then(c => c.LazyComponent),
    canActivate: [authGuard]
  },
  {path: "course-register", component: CourseRegistrationComponent}, 
  {path: "course-reactive-register", component: CourseRegistrationReactiveComponent}, 
  // Homework - Ex 13: Json Array Model – Product Event (danh sách + chi tiết theo :id)
  {path: 'product-image-event', component: ProductImageEventComponent},
  {path: 'product-image-event/:id', component: ProductImageEventDetailComponent},
  // Homework - Ex 14: Json Array Model – Product - Catalog
  {path: 'product-catalog', component: ProductCatalogComponent},
  // Homework - Ex 18: Json Array Model – Group Customers
  {path: 'customer-group', component: CustomerGroupComponent},
  {path: 'contacts', component: Contact},
  {path: '', component: Contact},
  {path:"login", component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
