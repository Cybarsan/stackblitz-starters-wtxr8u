import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  standalone: true,
})
export class BComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openModal() {
    this.modalService.open({
      title: 'test',
      description: 'test description from component b',
    });
  }
}
