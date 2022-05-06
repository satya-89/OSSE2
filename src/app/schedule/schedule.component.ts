import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../home/dashboard-data.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  searchResults:any = [];
  loading = false;
  error = '';
  hideResults = true;

  constructor( private dashboardService: DashboardDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let userIdParam: any = this.route.snapshot.queryParamMap.get('id');
    let gradeParam: any = this.route.snapshot.queryParamMap.get('grade');
    let subjectParam: any = this.route.snapshot.queryParamMap.get('subject');
   // const secondParam: string = this.route.snapshot.queryParamMap.get('secondParamKey');

   console.log("userId" , userIdParam);
   
   this.dashboardService.getSchedule(userIdParam, gradeParam , subjectParam)
   .pipe(first())
   .subscribe(
       data => {
        
         this.searchResults = data;
          // console.log("search", this.returnUrl);
        //   this.router.navigate([this.returnUrl]);
           this.loading = false;
       },
       error => {
           this.error = error;
           this.loading = false;
       });

  }

}
