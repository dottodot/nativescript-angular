import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { ActivatedRoute, Router, Route } from "@angular/router";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "first",
    template: `
    <StackLayout>
        <Label text="FirstComponent" class="header"></Label>

        <Button text="GO TO SECOND" [nsRouterLink]="['/second','1']"></Button>
        <Button text="BACK" (tap)="goBack()"></Button>
        <Label [text]="message"></Label>
    </StackLayout>`
})
export class FirstComponent implements OnInit, OnDestroy {
    public message: string = "";
    constructor(private routerExt: RouterExtensions, page: Page) {
        console.log("FirstComponent - constructor() page: " + page);
    }

    ngOnInit() {
        console.log("FirstComponent - ngOnInit()");
    }

    ngOnDestroy() {
        console.log("FirstComponent - ngOnDestroy()");
    }

    goBack() {
        this.message = "";
        if (this.routerExt.canGoBack()) {
            this.routerExt.back();
        } else {
            this.message = "canGoBack() - false"
        }
    }
}