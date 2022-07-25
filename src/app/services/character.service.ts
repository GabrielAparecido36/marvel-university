import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GlobalState } from "../global.state";

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    constructor(private http: HttpClient, private globalState: GlobalState) { }

    public getCharacter(params: string = '') {
        return this.http.get(`${this.globalState.getApiURL()}characters${this.globalState.getApiParams()}${params}`);
    }
}