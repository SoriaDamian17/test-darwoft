import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { CONFIG } from '../config/config';
import { i18n } from '../config/i18n';
import { ModalService } from '../services/modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;
    private element: any;
    i18n = i18n;

    constructor(
        private modalService: ModalService,
        private el: ElementRef
    ) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            return;
        }

        document.body.appendChild(this.element);

        this.element.addEventListener('click', (e: any) => {
            if (e.target.className === 'box-container') {
                this.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    closeModal() {
        this.modalService.close(this.id);
    }
}
