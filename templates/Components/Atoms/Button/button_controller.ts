import { Controller } from '@hotwired/stimulus';


export default class extends Controller {

    private times: number = 0;

    connect() {
        this.element.innerHTML = "SuperButton was clicked 0 times";
    }

    onClick() {
        this.element.innerHTML = "SuperButton was clicked " + ++this.times + " times";
    }
}
