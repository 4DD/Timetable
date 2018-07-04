import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable-component',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent {
  public timetable: Timetable;
  public timetables :Timetable[];
  public serviceEnum = ServiceEnum;
  constructor(public timetableService:TimetableService) {
    this.timetable = new Timetable();
    this.getTimetables();
  }

  public save() {
    this.timetableService.save(this.timetable);
  }

  public getTimetables(){
    this.timetables  = this.timetableService.getTimetables();
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
