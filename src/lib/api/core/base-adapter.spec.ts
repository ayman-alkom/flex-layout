/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {ElementRef} from '@angular/core';
import {BaseFxDirectiveAdapter} from './base-adapter';
import {expect} from '../../utils/testing/custom-matchers';
import {MediaMonitor} from '../../media-query/media-monitor';
import {StyleService} from '../../utils/styling/styler';

export class MockElementRef extends ElementRef {
  constructor() {
    const nEl = document.createElement('DIV');
    super(nEl);
    this.nativeElement = nEl;
  }
}

describe('BaseFxDirectiveAdapter class', () => {
  let component;
  beforeEach(() => {
    component = new BaseFxDirectiveAdapter('', {} as MediaMonitor, new MockElementRef(), {} as StyleService); // tslint:disable-line:max-line-length
  });
  describe('cacheInput', () => {
    it('should call _cacheInputArray when source is an array', () => {
      spyOn(component, '_cacheInputArray');
      component.cacheInput('key', []);
      expect(component._cacheInputArray).toHaveBeenCalled();
    });
    it('should call _cacheInputObject when source is an object', () => {
      spyOn(component, '_cacheInputObject');
      component.cacheInput('key', {});
      expect(component._cacheInputObject).toHaveBeenCalled();
    });
    it('should call _cacheInputString when source is a string', () => {
      spyOn(component, '_cacheInputString');
      component.cacheInput('key', '');
      expect(component._cacheInputString).toHaveBeenCalled();
    });
    it('should throw when source is not an object, array or string', () => {
      expect(component.cacheInput.bind(null, true)).toThrow();
    });
  });

});



