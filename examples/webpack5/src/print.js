import _ from 'lodash';
import $ from 'jquery';

const str = $('div') + _.join(['2', '1'], ' __');

export default () => str;
