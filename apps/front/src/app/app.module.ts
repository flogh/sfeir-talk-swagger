import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiModule } from "@sfeir-talk-swagger/openapi";

@NgModule({
    imports: [BrowserModule, HttpClientModule, ApiModule.forRoot({ rootUrl: "http://localhost:3000" })],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
