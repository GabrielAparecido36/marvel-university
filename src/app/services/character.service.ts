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

    public getCharacterById(id: number) {
        return this.http.get(`${this.globalState.getApiURL()}characters/${id}${this.globalState.getApiParams()}`);
    }
    public getCharacterComicsById(id: number, params: string = '') {
        return this.http.get(`${this.globalState.getApiURL()}characters/${id}/comics${this.globalState.getApiParams()}${params}`);
    }
}