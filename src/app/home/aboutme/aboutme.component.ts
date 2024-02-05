// import { Component } from '@angular/core';
import { Component, ViewChild, OnInit, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentsService } from 'src/app/services/contents.service';
import { getBackEndUrl } from 'src/main';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  content: ContentsService;
  countcoming: number = 0;
  invitedcoming: invited[] = [];
  invitednotcoming: invited[] = [];
  constructor(private route: ActivatedRoute, content: ContentsService) {
    this.content = content;
  }
  ngOnInit() {
    this.content.getInvitesConfimation().subscribe((response: invited[]) => {
      console.log(response);
      this.invitedcoming = response.filter((invited, index, arr) => {
        if (invited["iscoming"] == true) {
          this.countcoming += invited["howmany"];
        }
        return invited["iscoming"] == true;
      });
      this.invitednotcoming = response.filter((invited, index, arr) => invited["iscoming"] == false);
      console.log(this.invitedcoming);
      console.log(this.invitednotcoming);  
    }, (error) => {
      console.log(error);
    });
  }
}

interface invited {
  invitescode: string,
  names: string,
  iscoming: boolean,
  max: number,
  howmany: number
}