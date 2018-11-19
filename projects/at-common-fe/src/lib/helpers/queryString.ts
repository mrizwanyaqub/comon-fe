import * as _ from 'lodash';

export class QueryString {
  public toQueryString (obj, compactArrays) {
    let qs = this.toQueryParams(obj, compactArrays);
    return qs ? '?' + qs : '';
  }

  public toQueryParams (obj, compactArrays) {
    let parts = [];
    _.each(obj, (value, key) => {
      if (value || value === 0) {
        parts.push(key + '=' + this._escape(value, compactArrays));
      }
    });
    return parts.join('&');
  }

  private  _escape (value, compactArrays) {
    let result;
    if (_.isArray(value)) {
      result = '[' + value.map(element => encodeURIComponent(_.isString(element) ? '"' + element + '"' : element)).join(compactArrays ? ',' : ', ') + ']';
    } else {
      result = encodeURIComponent(_.isObject(value) ? JSON.stringify(value) : value);
    }
    return result;
  }
}
