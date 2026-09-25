import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';

const COMPONENTS = [
  ProductCardComponent,
  LoadingSpinnerComponent,
  ErrorBannerComponent,
  EmptyStateComponent
];

const PIPES = [
  CurrencyFormatPipe,
  TruncateTextPipe,
  RelativeTimePipe
];

const DIRECTIVES = [
  HighlightDirective,
  ClickStopPropagationDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: []
})
export class SharedModule {
  constructor(
    @Optional() @SkipSelf() private parentModule: SharedModule
  ) {
    if (parentModule) {
      const moduleName = parentModule.constructor.name;
      const currentModuleName = this.constructor.name;
      const errorMessage = `${currentModuleName} has already been loaded. ` +
        `Import ${currentModuleName} in the AppModule only.`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }

  static forRoot(): NgModule {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

  static forChild(): NgModule {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}