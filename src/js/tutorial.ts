import { Page } from './page';

export class Tutorial extends Page{
    private questionsElement: HTMLElement | null;

    public constructor(data: {} = {}){
        super(data);

        this.questionsElement = document.querySelector('questions');

        // TODO: alerts missing?
        if(typeof this.data.alert !== 'undefined'){
            this.setContent('alert', this.data.alert);
        }
        if(typeof this.data.info !== 'undefined'){
            this.setContent('info', this.data.info);
        }
        // TODO: fix images in tutorial
        if(typeof this.data.tutorial !== 'undefined'){
            this.setContent('questions', this.data.tutorial);
        }
    }
}