import { Component } from '@angular/core';

interface Event {
  event_no: number;
  event_name: string;
  event_description: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events: Event[] = [];
  event_no: number=0;
  event_name: string='';
  event_description: string='';

  addEvent() {
    const newEvent: Event = { event_no: this.event_no, event_name: this.event_name, event_description: this.event_description };
    this.events.push(newEvent);
    alert("Event Added Successfully.");

  }
}
