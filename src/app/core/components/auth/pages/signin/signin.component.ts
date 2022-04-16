import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public formAuth: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });
  msgError!: string;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  public onSubmitForm(): void {
    if (this.formAuth.valid) {
      this.authService
        .signin({
          email: this.formAuth.value.email,
          password: this.formAuth.value.password,
        })
        .subscribe({
          next: (res) => res,
          error: (err) => (this.msgError = err),
        });
    }
  }
}
