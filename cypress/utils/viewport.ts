
export class Viewport {
    constructor(public readonly size: [width: number, length: number], public readonly name: string){
    }

    getName(){
        return this.name;
    }
}

export const viewportGlobal = Object.freeze(new Viewport([1,1], "ViewportGlobal"))

export const viewports = Object.freeze([viewportGlobal, viewportGlobal])
// viewports.forEach(viewport =>{
//     cy.viewport(viewport)
// })