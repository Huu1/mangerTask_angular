import { trigger,transition,style,state, animate } from "@angular/animations";

export const cardAnim=trigger('card',[
    state('out',style({transform:'scale(1)','box-shadow':"none"})),
    state('in',style({transform:'scale(1.05)','box-shadow':"3px 3px 5px 6px #ccc"}))
    ,transition("out=>hover",animate('500ms ease-in'))
    ,transition("hover=>out",animate('500ms ease-out'))
])