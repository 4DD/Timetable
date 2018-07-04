import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timetable, ServiceEnum } from './timetable.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimetableService {
  private timetableApiUrl: string;
  constructor(public http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.timetableApiUrl = baseUrl + 'api/Timetable/';
  }
  public save(timetable: Timetable) {
    this.http.post(this.timetableApiUrl, timetable);
  }
  public getTimetables(): Timetable[]{
    this.http.get<Timetable[]>(this.timetableApiUrl).subscribe(result => {
      return result;
    }
    );
  }
}
