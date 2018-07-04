import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timetable-component',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent {
  public timetable: Timetable;
  public timetables :Timetable[];
  public serviceEnum = ServiceEnum;
  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    this.timetable = new Timetable();
    this.getTimetables();
  }

  public save() {
    this.http.post(this.baseUrl + 'api/Timetable/', this.timetable);
  }

  public getTimetables(){
  this.http.get<Timetable[]>(this.baseUrl + 'api/Timetable').subscribe(result => {
      this.timetables = result;
    }, error => console.error(error));
  }

  public lineChange(_line: number) {
    this.timetable.line = _line;
  }
  public serviceChange(_service: ServiceEnum) {
    this.timetable.service = _service;
  }
}

//TODO :Move in to sepearte file
export class Timetable {
  public date: Date;
  public time: String;
  public line: number;
  public service: ServiceEnum;
}

export enum ServiceEnum {
  TRAIN = 0,
  COACH = 1
}
