import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  standalone: true,
})
export class AComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openModal() {
    this.modalService.open({
      title: 'test',
      description: 'test description',
    });
  }
}
