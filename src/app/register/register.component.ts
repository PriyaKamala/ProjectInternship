import { Component, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDetails:any={name:'',password:'',email:'',dob:'',phone:'',city:'',}
  error:any={name:false,password:false,email:false,dob:false,phone:false, city:false}
    constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
  register(){
    let haserror = false;
    if(this.registerDetails.name == undefined ||this.registerDetails.name == "" )
    {
      this.error.name = "required";
      haserror=true;
    }
    else
    {
      this.error.name=false;
    }
    if(this.registerDetails.password == undefined || this.registerDetails.password == "")
    {
      this.error.password = "required";
      haserror=true;
    }
    else
    {
      this.error.password=false;
    }
    if(this.registerDetails.email == undefined || this.registerDetails.email == "")
    {
      this.error.email = "required";
      haserror=true;
    }
    else
    {
      this.error.email=false;
    }
    if(this.registerDetails.dob == undefined || this.registerDetails.dob == "")
    {
      this.error.dob = "required";
      haserror=true;
    }
    else
    {
      this.error.dob=false;
    }
    if(this.registerDetails.phone == undefined || this.registerDetails.phone == "")
    {
      this.error.phone = "required";
      haserror=true;
    }
    else
    {
      this.error.phone=false;
    }
    
    if(this.registerDetails.city == undefined || this.registerDetails.city == "")
    {
      this.error.city = "required";
      haserror=true;
    }
    else
    {
      this.error.city=false;
     }
   console.log(this.registerDetails)
    {
      if(haserror)
      {
        console.error(this.error)
        return;
      }
    }
    var formdata = new FormData();
    formdata.set("name",this.registerDetails.name)
    formdata.set("password",this.registerDetails.password)
    formdata.set("email",this.registerDetails.email)
    formdata.set("dob",this.registerDetails.dob)
    
    formdata.set("phone",this.registerDetails.phone)
    formdata.set("city",this.registerDetails.city)
    console.log(this.registerDetails)
    this.http.post("http://localhost:9005/admin/addRegister",formdata).subscribe((data:any)=>{
      console.log(data)
    })
    
  }
  }