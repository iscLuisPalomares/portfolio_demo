import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getBackEndUrl } from 'src/main';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  backendUrl: string = "";
  constructor(private route: ActivatedRoute) {
    // document.location.href = 'https://3.80.80.145:8000/validate';
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log("checking query params");
        let invitescode = params['invitescode'];
        document.location.href = `https://3.80.80.145:8000/validate/${invitescode}`;
      }
      );
    // this.backendUrl = getBackEndUrl();
  }
}
