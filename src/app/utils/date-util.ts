import * as moment from 'moment';
import 'moment-duration-format';

export class DateUtil {
  static daysDiffTillToday(startDate: string): number {
    const startMoment = moment(startDate);
    const today = moment();
    return today.diff(startMoment, 'days');
  }
}