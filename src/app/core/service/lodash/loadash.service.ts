import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { pick } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class LodashService {
  constructor() {}

  get pick() {
    return pick;
  }

  get isNil() {
    return _.isNil;
  }

  get isEmpty() {
    return _.isEmpty;
  }

  get uniqBy() {
    return _.uniqBy;
  }

  get find() {
    return _.find;
  }

  get filter() {
    return _.filter;
  }

  get reverse() {
    return _.reverse;
  }

  get sortBy() {
    return _.sortBy;
  }

  get orderBy() {
    return _.orderBy;
  }

  get isArray() {
    return _.isArray;
  }

  get round() {
    return _.round;
  }

  get toNumber() {
    return _.toNumber;
  }

  get cloneDeep() {
    return _.cloneDeep;
  }

  get isEqual() {
    return _.isEqual;
  }

  get remove() {
    return _.remove;
  }

  get uniqWith() {
    return _.uniqWith;
  }

  get toString() {
    return _.toString
  }

}
