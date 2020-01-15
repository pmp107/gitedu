import { Component } from '@angular/core'
import { UserDetails, AuthenticationService } from '../authentication.service'


@Component({
    templateUrl:'./login.component.html'
})

export class ProfileComponent{
      details:UserDetails

       constructor(private auth:AuthenticationService){}

      
    ngOnInit()
    {
        this.auth.profile().subscribe(
            user => {
                this.details = user
            },
            err =>{
                console.error(err)
            }
        )


    }
}