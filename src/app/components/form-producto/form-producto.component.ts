import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
