import { Page } from './page';
import { Home } from './home';
import { Tutorial } from './tutorial';

import homeTemplate from '../templates/home.mustache';
import tutorialTemplate from '../templates/tutorial.mustache';

import fablabData from '../data/fablab.json';
import studHostingData from '../data/studhosting.json';
import wordPressData from '../data/wordpress.json';

export class App{
    protected page: Page;
    protected pageParam: any;
    protected urlParams: URLSearchParams;

    public constructor(){
        const queryString = window.location.search;
        this.urlParams = new URLSearchParams(queryString);
        this.pageParam = this.urlParams.get('p');

        this.init();
    }

    protected init(){
        switch(true){
            case (this.pageParam == "fablab"):
                this.page = new Tutorial(fablabData);
                this.page.setTemplate(tutorialTemplate);
                this.page.setTitle('fablab');
                this.page.setContent('title', 'FabLab');
                break;
            case (this.pageParam === "studhosting"):
                this.page = new Tutorial(studHostingData);
                this.page.setTemplate(tutorialTemplate);
                this.page.setTitle('studhosting');
                this.page.setContent('title', 'Studentenhosting');
                break;
            case (this.pageParam === "wordpress"):
                this.page = new Tutorial(wordPressData);
                this.page.setTemplate(tutorialTemplate);
                this.page.setTitle('wordpress');
                this.page.setContent('title', 'Wordpress');
                break;
            default:
                this.page = new Home();
                this.page.setTemplate(homeTemplate);
                this.page.setTitle('index');
                this.page.setContent('name', 'Leanne');
                break;
        }
        console.log(this.page);
        this.page.init();
    }
}

window.addEventListener("load", (event) => new App() );