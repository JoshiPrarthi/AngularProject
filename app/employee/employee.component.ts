import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
interface Employee {
  id: number;
  name: string;
  contactNumber: string;
  gender: string;
  spouse: string;
  children: string;
  designation: string;
  educationLevel: string;
  bloodGroup: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  employeeList: Employee[] = [];
  emp_id: number = 0;
  emp_name: string = '';
  emp_contactnumber: string = '';
  emp_gender: string = '';
  emp_spouse: string = '';
  emp_children: string = '';
  emp_designation: string = '';
  emp_educationlevel: string = '';
  emp_bloodgroup: string = '';
  employee_add:boolean=false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const action = params['action'];
      if (action == 'add') {
        this.employee_add=true;
      }     });
  }

  add_emp(){
    if (!this.emp_id || !this.emp_name || !this.emp_contactnumber || !this.emp_gender || !this.emp_spouse || !this.emp_children || !this.emp_designation || !this.emp_educationlevel || !this.emp_bloodgroup) {
      alert("All fields are mandatory.");
      return;
    }
    const newEmployee: Employee = {
      id: this.emp_id,
      name: this.emp_name,
      contactNumber: this.emp_contactnumber,
      gender: this.emp_gender,
      spouse: this.emp_spouse,
      children: this.emp_children,
      designation: this.emp_designation,
      educationLevel: this.emp_educationlevel,
      bloodGroup: this.emp_bloodgroup
    };
    this.employeeList.push(newEmployee);
    alert("Employee Added Successfully.");

    this.emp_id = 0;
    this.emp_name = '';
    this.emp_contactnumber = '';
    this.emp_gender = '';
    this.emp_spouse = '';
    this.emp_children = '';
    this.emp_designation = '';
    this.emp_educationlevel = '';
    this.emp_bloodgroup = '';
  }
}