import { trigger, transition, style, state, animate } from "@angular/animations";

export const sliderToTight = trigger('routeAnim', [
    state('void', style({ 'position': "fixed", 'width': '100%', 'height': '80%' })),
    state('*', style({ 'position': "fixed", 'width': '100%', 'height': '80%' })),
    transition(":enter", [
        style({ transform: 'translateX(-100%)' }),
        animate('.3s ease-in-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(":leave", [
        style({ transform: 'translateX(0)' }),
        animate('.3s ease-in-out', style({ transform: 'translateX(100%)' }))
    ]),
])