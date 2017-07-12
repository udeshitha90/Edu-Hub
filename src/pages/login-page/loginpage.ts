import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TabsPage } from "../tabs/tabs";
//import { SqliteProvider } from "../../providers/sqlite-provider";


@Component({
  selector: 'page-login-page',
  templateUrl: 'loginpage.html'
})
export class LoginPage {
@ViewChild('signupSlider') signupSlider: any;
 UserDetails
    LoginForm: FormGroup;
    SingupForm: FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,private alertCtrl: AlertController) {
   this.UserDetails={Uname:''};
   this.LoginForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        age: ['']
    });
 
    this.SingupForm = formBuilder.group({
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
        bio: ['']
    });
  }
    next(){
        this.signupSlider.slideNext();
    }

      prev(){
        this.signupSlider.slidePrev();
    }

    // login(UserDetails){
    // this.sqlite.createDatabase();
    // this.sqlite.getUserDetailsByNamePassword(UserDetails).then((result)=>{
    //     if(result==true){
          
    //          this.presentAlert("Login Succefully");
    //          this.navCtrl.push(TabsPage,{params1:UserDetails});
            
    //     }else{
    //          this.presentAlert("Try Again");
    //     }
       
    // });
    
    // }
    // CreateAccount(UserDetails){
    // this.sqlite.createDatabase();
    // this.sqlite.AddUserDetails(UserDetails).then((result)=>{
    //     this.presentAlert(result);
       
    // });
    // }

    presentAlert(message) {
  let alert = this.alertCtrl.create({
    title: 'Loginn',
    subTitle: message,
    buttons: ['ok']
  });
  alert.present();
}
}
