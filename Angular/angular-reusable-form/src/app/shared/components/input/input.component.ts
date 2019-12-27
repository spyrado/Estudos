import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: InputComponent
  }]
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('input', {static: false}) input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState ? (isDisabled: boolean) : void {
    this.disabled = isDisabled;
  }
  onChange(event) {}

  onTouched() {}

}