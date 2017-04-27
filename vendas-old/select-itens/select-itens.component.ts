import { Component, OnInit, Input } from '@angular/core';

declare var Materialize:any;

@Component({
  selector: 'select-itens',
  templateUrl: './select-itens.component.html',
  styleUrls: ['./select-itens.component.css']
})
export class SelectItensComponent implements OnInit {

	@Input() produtosChild: any[];
	@Input() servicosChild: any[];
	@Input() itensChild: any[];
	@Input() vendaChild: any = {
		cliente: {
			images: []
		},
		itens: [],
		valor_total: 0,
		observacao: undefined,
		tipo: undefined
	};
	@Input() indexItem: number;
	
	constructor() { }

	ngOnInit() {

	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}
}
