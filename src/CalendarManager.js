
class CalendarManager {
	
	constructor (timestamp, timezoneOffset) {
		this._gregorian = new GregorianCalendar();	
		this._jalali = new JalaliCalendar();	
		this._islamic = new IslamicCalendar();	
		this._shia = new ShiaCalendar();
		this._currentCalendar = null;

		let date = new Date();
		this._timestamp = timestamp || Math.floor(date.getTime() / 1000); // milisecond to seconds
		this._timezoneOffset = timezoneOffset || -date.getTimezoneOffset() * 60; // minute * 60 = offset in seconds
	}

	gregorian (year, month, day, hour, minute, second) {
		let date = this._gregorian.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._gregorian.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._gregorian;
		return this;
	}

	jalali (year, month, day, hour, minute, second) {
		let date = this._jalali.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._jalali.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._jalali;
		return this;
	}

	islamic (year, month, day, hour, minute, second) {
		let date = this._islamic.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._islamic.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._islamic;
		return this;
	}

	shia (year, month, day, hour, minute, second) {
		let date = this._shia.timestampToDate(this._timestamp);		
		year = year || date.year;
		month = month || date.month;
		day = day || date.day;
		hour = hour || date.hour;
		minute = minute || date.minute;
		second = second || date.second;

		this._timestamp = this._shia.dateToTimestamp(year, month, day, hour, minute, second);
		this._currentCalendar = this._shia;
		return this;
	}	
}

Object.assign(CalendarManager.prototype, BaseMethodsMixin);
Object.assign(CalendarManager.prototype, AdditionAndSubstractionMixin);
