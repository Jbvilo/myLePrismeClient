import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-text-box',
  templateUrl: './infos-text-box.component.html',
  styleUrls: ['./infos-text-box.component.scss']
})
export class InfosTextBoxComponent implements OnInit {
  @Input() info!: any;
  @Input() intitule!: string;
  @Input() modification!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
