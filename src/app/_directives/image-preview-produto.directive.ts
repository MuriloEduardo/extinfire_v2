import { Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'img[imgPreviewProduto]' })

export class ImagePreviewProduto {

    @Input() image: any;

    constructor(
        private el: ElementRef, 
        private renderer: Renderer
    ) {
        console.log('ImagePreviewProdutoDirective Initialize...');
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {

        let reader = new FileReader();
        let el = this.el;

        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };

        if (this.image) {
            return reader.readAsDataURL(this.image);
        }

    }

}