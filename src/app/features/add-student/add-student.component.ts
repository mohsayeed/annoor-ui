import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from 'src/app/core/validators/common.validators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addStudentForm!: FormGroup;
  submitted!: boolean;

  constructor(private formBuilder: FormBuilder,
             ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  get formAddstudent() {
    return this.addStudentForm.controls;
  }
  buildForm(){
    this.addStudentForm = this.formBuilder.group({
      studentName: ['',[Validators.required]],
      studentClass: ['', [Validators.required]],
      studentSection: ['', [Validators.required]],
      studentRollNumber: ['', [Validators.required]],
      studentGovtId: ['', [Validators.required]],
      studentAadhaar: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      fatherContactNumber: ['', [Validators.required]],
      motherContactNumber: ['', [Validators.required]],
      rationCardNumber: ['', [Validators.required]],
      fatherAadhaar: ['', [Validators.required]],
      motherAadhaar: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
      branchName: ['', [Validators.required]],
    });
  }
  save(){
    this.submitted = true;
  }
  cancel(){
    
  }
}
