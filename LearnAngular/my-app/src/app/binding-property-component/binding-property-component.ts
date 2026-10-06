import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string="Hoàng Phương Anh"
  public email:string="anhhpk24411e@uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=false
  public hello:string="Welcome to K24411E hehehe!!!"
  public red_color:string="red"
  public advanced_message:string="This is advanced message"
}
