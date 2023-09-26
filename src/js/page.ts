/**
 * cannot find module types, use:
 * npm install -D @types/mustache 
 */
import { render } from 'mustache';

export class Page{
    protected template: string;
    protected title: string | undefined;
    protected contentTarget: HTMLElement | null;
    protected content: {[key: string]: string} = {};
    protected data: {};

    public constructor(data: {} = {}){
        this.data = data;
        this.contentTarget = document.getElementById('target');
    }

    public setTemplate(template: string){ this.template = template; }
    public setTitle(title: string){ this.title = title; }

    public setContent(key: string, content: string){
        this.content[key] = content;
    }

    public init(){
        this.render(
            this.template,
            this.content,
            this.contentTarget
        );
    }

    protected render(templateSource: string, content = {}, target: HTMLElement | null){
        fetch(templateSource)
            .then((response) => response.text())
            .then((template) => {
                const rendered = render(template, content);
                if(target !== null){
                    target.innerHTML = rendered;
                }
                console.log(rendered);
            })
            .catch((error) => {
                console.log(error)
            });
    }
}