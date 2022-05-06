import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './login.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    // loginForm: FormGroup | undefined;
    loading = false;
    submitted = false;
    returnUrl: string = '/home';
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private reactiveFormsModule: ReactiveFormsModule
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    loginForm = this.formBuilder.group({
        password: ['', Validators.required],
        phone: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    });


    ngOnInit() {
        // this.loginForm = this.formBuilder.group({
        //     username: ['', Validators.required],
        //     password: ['', Validators.required]
        // });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';


        console.log("return Url", this.returnUrl);
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm && this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.password.value, this.f.phone.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("daat", this.returnUrl);
                    this.router.navigate([this.returnUrl]);
                    this.loading = false;
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    onSignup() {
        this.router.navigate(['/registration']);
    }
}