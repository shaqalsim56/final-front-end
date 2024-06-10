import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoggedInPageComponent } from './pages/logged-in-page/logged-in-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ViewUsersComponent } from './pages/view-users/view-users.component';
import { NeedLoginComponent } from './pages/need-login/need-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManageVehiclesRentComponent } from './pages/manage-vehicles-rent/manage-vehicles-rent.component';
import { ViewVehiclesRentComponent } from './pages/view-vehicles-rent/view-vehicles-rent.component';
import { UpdateVehicleRentComponent } from './pages/update-vehicle-rent/update-vehicle-rent.component';
import { DeleteVehicleRentComponent } from './pages/delete-vehicle-rent/delete-vehicle-rent.component';
import { ManageVehiclesSaleComponent } from './pages/manage-vehicles-sale/manage-vehicles-sale.component';
import { ViewVehiclesSaleComponent } from './pages/view-vehicles-sale/view-vehicles-sale.component';
import { UpdateVehicleSaleComponent } from './pages/update-vehicle-sale/update-vehicle-sale.component';
import { DeleteVehicleSaleComponent } from './pages/delete-vehicle-sale/delete-vehicle-sale.component';
import { ViewSingleUserComponent } from './pages/view-single-user/view-single-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { ViewRentalLoggedOutComponent } from './pages/view-rental-logged-out/view-rental-logged-out.component';
import { BookRentalComponent } from './pages/book-rental/book-rental.component';
import { ViewRentalLoggedInComponent } from './pages/view-rental-logged-in/view-rental-logged-in.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';
import { SeeAllRentalsLoggedOutComponent } from './pages/see-all-rentals-logged-out/see-all-rentals-logged-out.component';
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
import { AboutLoggedInComponent } from './pages/about-logged-in/about-logged-in.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path: '', title: 'Homepage', component: HomepageComponent, pathMatch: 'full'},
  {path: 'login', title:'Login Page', component: LoginPageComponent, pathMatch: 'full'},

  {path: 'register', title:'Register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'logged-in', title: 'Homepage', component: LoggedInPageComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'about-logged-in', title: 'About Page', component: AboutLoggedInComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'about', title: 'About Page', component: AboutComponent, pathMatch: 'full'},

  {path: 'account', title: 'My Account', component: AccountComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'account-purchases', title: 'My Account', component: AccountPurchasesComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'user-update-booking/:id', title: 'Update Booking', component: UserUpdateBookingComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  
  {path: 'book-rental/:id', title: 'Book Rental', component: BookRentalComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'confirmation-page/:id', title: 'Booking Confirmed', component: BookingConfirmationComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'make-purchase/:id', title: 'Complete Purchase', component: MakePurchaseComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'confirmation-page-purchase/:id', title: ' Sale Confirmed', component: SaleConfirmationComponent, pathMatch: 'full', canActivate: [AuthGuard]},


  {path: 'all-users', title: 'All Users', component: ViewUsersComponent, pathMatch: 'full', canActivate: [AuthGuard]},


  {path: 'all-bookings', title: 'All Bookings', component: ViewBookingsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'update-booking/:id', title: 'Update Booking', component: UpdateBookingComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'view-booking/:id', title: 'View Booking', component: ViewBookingComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'delete-booking/:id', title: 'Delete Booking', component: DeleteBookingComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'need-login', title: 'Cannot Access ', component: NeedLoginComponent, pathMatch: 'full'},
  {path: 'admin-login', title: 'Admin Login ', component: AdminLoginComponent, pathMatch: 'full'},

  {path: 'view-rental/:id', title: 'View Rental ', component: ViewRentalLoggedOutComponent, pathMatch: 'full'},
  {path: 'view-rental-logged-in/:id', title: 'View Rental ', component: ViewRentalLoggedInComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'view-selling/:id', title: 'View Vehicle For Sale', component: ViewSellingLoggedOutComponent, pathMatch: 'full'},
  {path: 'view-selling-logged-in/:id', title: 'View Vehicle For Sale', component: ViewSellingLoggedInComponent, pathMatch: 'full', canActivate:[AuthGuard] },

  {path: 'see-all-rentals', title: 'View All Rental ', component: SeeAllRentalsLoggedOutComponent, pathMatch: 'full'},
  {path: 'see-all-rentals-logged-in', title: 'View All Rental ', component: SeeAllRentalsLoggedInComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'see-all-selling', title: 'View All Vehicles For Sales ', component: SeeAllSellingLoggedOutComponent, pathMatch: 'full'},
  {path: 'see-all-selling-logged-in', title: 'View All Vehicles For Sales', component: SeeAllSellingLoggedInComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'view-all-purchases', title: 'View All Purchases', component: ViewAllPurchasesComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'view-single-purchase/:id', title: 'View Purchase', component: ViewSinglePurchasesComponent, pathMatch: 'full', canActivate: [AuthGuard]},


  {path: 'manage-rental-cars', title: 'Manage Rental Cars ', component: ManageVehiclesRentComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'manage-sales-cars', title: 'Manage Cars For Sale ', component: ManageVehiclesSaleComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  
  {path: 'view-vehicle-rent/:id', title: 'View Vehicle', component: ViewVehiclesRentComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'view-vehicle-sale/:id', title: 'View Vehicle', component: ViewVehiclesSaleComponent, pathMatch: 'full', canActivate: [AuthGuard]},


  {path: 'view-user/:id', title: 'View User', component: ViewSingleUserComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'update-user/:id', title: 'Update User', component: UpdateUserComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'delete-user/:id', title: 'Delete User', component: DeleteUserComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'update-vehicle-rent/:id', title: 'Update Vehicle', component: UpdateVehicleRentComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'update-vehicle-sale/:id', title: 'Update Vehicle', component: UpdateVehicleSaleComponent, pathMatch: 'full', canActivate: [AuthGuard]},

  {path: 'delete-vehicle-rent/:id', title: 'Delete Vehicle', component: DeleteVehicleRentComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'delete-vehicle-sale/:id', title: 'Delete Vehicle', component: DeleteVehicleSaleComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  

  {path: 'admin-dashboard', title: 'Admin Dashboard ', component: AdminDashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
