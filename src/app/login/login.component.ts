import { Component, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails:any={email:'',password:''}
  error:any={email:false,password:false}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  login()
  {
    let haserror=false;
    if(this.loginDetails.email == undefined || this.loginDetails.email == "")
    {
      this.error.email = "required";
      haserror=true;
    }
    else
    {
      this.error.email=false;
    }
    if(this.loginDetails.password == undefined || this.loginDetails.password == "")
    {
      this.error.password = "required";
      haserror=true;
    }
    else
    {
      this.error.password=false;
    }
    console.log(this.loginDetails)
    {
      if(haserror)
      {
        console.error(this.error)
        return;
      }
    }
    var formdata = new FormData();
    formdata.set("email",this.loginDetails.email)
    formdata.set("password",this.loginDetails.password)
    console.log(this.loginDetails)
    this.http.post("http://localhost:9005/admin/validateSuperAdmin",formdata).subscribe((data:any)=>{
      console.log(data)
    })
    
  }
  }


