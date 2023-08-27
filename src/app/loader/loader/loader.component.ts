import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { LoaderState } from '../../interfaces/interfaces';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading = false;
  constructor(private loaderservice: LoaderService) {
    this.loaderservice.isLoading.subscribe((val) => {
      this.loading = val;
    })
  }

  ngOnInit(): void {

  }
}
