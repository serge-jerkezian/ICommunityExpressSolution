"use strict";
var core_1 = require("@angular/core");
exports.slideIn = core_1.trigger('slideIn', [
    core_1.state('*', core_1.style({
        transform: 'translateX(100%)',
    })),
    core_1.state('in', core_1.style({
        transform: 'translateX(0)',
    })),
    core_1.state('out', core_1.style({
        transform: 'translateX(-100%)',
    })),
    core_1.transition('* => in', core_1.animate('600ms ease-in')),
    core_1.transition('in => out', core_1.animate('600ms ease-in')),
    core_1.transition('out => in', core_1.animate('600ms ease-in'))
]);
//# sourceMappingURL=main-animation.js.map