import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoggedInPageComponent } from './pages/logged-in-page/logged-in-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInterceptor } from './services/interceptor/custom.interceptor';
import { ViewUsersComponent } from './pages/view-users/view-users.component';
import { NeedLoginComponent } from './pages/need-login/need-login.component';
import { NoLoginHeaderComponent } from './partials/headers/no-login-header/no-login-header.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManageVehiclesRentComponent } from './pages/manage-vehicles-rent/manage-vehicles-rent.component';
import { AdminHeaderComponent } from './partials/headers/admin-header/admin-header.component';
import { ViewVehiclesRentComponent } from './pages/view-vehicles-rent/view-vehicles-rent.component';
import { UpdateVehicleRentComponent } from './pages/update-vehicle-rent/update-vehicle-rent.component';
import { DeleteVehicleRentComponent } from './pages/delete-vehicle-rent/delete-vehicle-rent.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { ManageVehiclesSaleComponent } from './pages/manage-vehicles-sale/manage-vehicles-sale.component';
import { ViewVehiclesSaleComponent } from './pages/view-vehicles-sale/view-vehicles-sale.component';
import { UpdateVehicleSaleComponent } from './pages/update-vehicle-sale/update-vehicle-sale.component';
import { DeleteVehicleSaleComponent } from './pages/delete-vehicle-sale/delete-vehicle-sale.component';
import { ViewSingleUserComponent } from './pages/view-single-user/view-single-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { UserHeaderComponent } from './partials/headers/user-header/user-header.component';
import { ViewRentalLoggedOutComponent } from './pages/view-rental-logged-out/view-rental-logged-out.component';
import { ViewRentalLoggedInComponent } from './pages/view-rental-logged-in/view-rental-logged-in.component';
import { BookRentalComponent } from './pages/book-rental/book-rental.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';
import { SeeAllRentalsLoggedOutComponent } from './pages/see-all-rentals-logged-out/see-all-rentals-logged-out.component';
import { FilterPipe } from './services/filter.pipe';
import { SeeAllRentalsLoggedInComponent } from './pages/see-all-rentals-logged-in/see-all-rentals-logged-in.component';
import { ViewBookingsComponent } from './pages/view-bookings/view-bookings.component';
import { SeeAllSellingLoggedOutComponent } from './pages/see-all-selling-logged-out/see-all-selling-logged-out.component';
import { ViewSellingLoggedOutComponent } from './pages/view-selling-logged-out/view-selling-logged-out.component';
import { SeeAllSellingLoggedInComponent } from './pages/see-all-selling-logged-in/see-all-selling-logged-in.component';
import { ViewSellingLoggedInComponent } from './pages/view-selling-logged-in/view-selling-logged-in.component';
import { MakePurchaseComponent } from './pages/make-purchase/make-purchase.component';
import { SaleConfirmationComponent } from './pages/sale-confirmation/sale-confirmation.component';
import { AccountComponent } from './pages/account/account.component';
import { AccountPurchasesComponent } from './pages/account-purchases/account-purchases.component';
import { UpdateBookingComponent } from './pages/update-booking/update-booking.component';
import { ViewBookingComponent } from './pages/view-booking/view-booking.component';
import { DeleteBookingComponent } from './pages/delete-booking/delete-booking.component';
import { ViewAllPurchasesComponent } from './pages/view-all-purchases/view-all-purchases.component';
import { ViewSinglePurchasesComponent } from './pages/view-single-purchases/view-single-purchases.component';
import { UserUpdateBookingComponent } from './pages/user-update-booking/user-update-booking.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutLoggedInComponent } from './pages/about-logged-in/about-logged-in.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    LoggedInPageComponent,
    ViewUsersComponent,
    NeedLoginComponent,
    NoLoginHeaderComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    RegisterComponent,
    ManageVehiclesRentComponent,
    AdminHeaderComponent,
    ViewVehiclesRentComponent,
    UpdateVehicleRentComponent,
    DeleteVehicleRentComponent,
    ManageVehiclesSaleComponent,
    ViewVehiclesSaleComponent,
    UpdateVehicleSaleComponent,
    DeleteVehicleSaleComponent,
    ViewSingleUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UserHeaderComponent,
    ViewRentalLoggedOutComponent,
    ViewRentalLoggedInComponent,
    BookRentalComponent,
    BookingConfirmationComponent,
    SeeAllRentalsLoggedOutComponent,
    FilterPipe,
    SeeAllRentalsLoggedInComponent,
    ViewBookingsComponent,
    SeeAllSellingLoggedOutComponent,
    ViewSellingLoggedOutComponent,
    SeeAllSellingLoggedInComponent,
    ViewSellingLoggedInComponent,
    MakePurchaseComponent,
    SaleConfirmationComponent,
    AccountComponent,
    AccountPurchasesComponent,
    UpdateBookingComponent,
    ViewBookingComponent,
    DeleteBookingComponent,
    ViewAllPurchasesComponent,
    ViewSinglePurchasesComponent,
    UserUpdateBookingComponent,
    FooterComponent,
    AboutLoggedInComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
