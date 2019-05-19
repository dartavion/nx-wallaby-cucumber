import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@nx-wallaby-cucumber/api-interface";

@Component({
  selector: "nx-wallaby-cucumber-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  hello$ = this.http.get<Message>("/api/hello");
  constructor(private http: HttpClient) {}
}
