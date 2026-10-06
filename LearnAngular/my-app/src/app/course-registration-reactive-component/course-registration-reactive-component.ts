import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-registration-reactive-component',
  standalone: false,
  styleUrl: './course-registration-reactive-component.css',
  templateUrl: './course-registration-reactive-component.html',
})
export class CourseRegistrationReactiveComponent {
  public regForm: FormGroup = new FormGroup(
      {
        name: new FormControl('Trần Duy Thanh', [Validators.required, Validators.minLength(3), this.customNameValidator]), // cái chỗ ngoặc vuông là điền constraints cho nội dung phải điền 
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, this.customPasswordValidator]),
        confirmPass: new FormControl('', [Validators.required])
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  setDefaultValues() {
    this.regForm.patchValue({ // đưa dữ liệu từ typeScript lên html
      name: 'Trần Duy Thanh',
      email: 'thanhtd@uel.edu.vn'
    });
  }

  onSubmit(): void {
    if (this.regForm.valid) {
      console.log('Registration information:', this.regForm.value);
    }
  }

  customNameValidator(control: AbstractControl): ValidationErrors | null {
    const matchName = /[@#$%^&]/.test(control.value);

    return matchName ? { nameNotMatch: { value: control.value } } : null;
  }

  customPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    return passwordPattern.test(control.value) ? null : { weakPassword: true };
  }
  
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPass = control.get('confirmPass');
  
    if (password && confirmPass && password.value !== confirmPass.value) {
      return { mismatch: true };
    }
  
    return null;
  }
}