import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthStorage {

    get accessToken(): string | null {
        return localStorage.getItem('access_token');
    }

    set accessToken(value) {
        if (value) {
            localStorage.setItem('access_token', value);
        } else {
            localStorage.removeItem('access_token');
        }
    }
}
