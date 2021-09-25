class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	//`addClock` - добавляет новый звонок в коллекцию существующих. 
	addClock(time, callback, id) {
		if (!id) {
			throw new Error('error text')
		}
		if (this.alarmCollection.some(elem => elem.id == id)) {
			console.error(`Будильник с ID ${id} уже имеется`);
			return
		}
		this.alarmCollection.push({ time, callback, id })
	}
	//`removeClock` - удаляет определённый звонок
	removeClock(id) {
		const index = this.alarmCollection.findIndex(item => item.id == id);
		if (index !== -1) {
			this.alarmCollection.splice(index, 1);
			return true;
		} return false;
	}
	//`getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`
	getCurrentFormattedTime() {
		let hours = (new Date().getHours());
		let minutes = new Date().getMinutes();
		hours < 10 ? hours = '0' + hours : hours;
		minutes < 10 ? minutes = '0' + minutes : minutes;
		let nowTime = hours + ':' + minutes;
		console.log(nowTime);
		return nowTime;
	}
	//`start` - запускает все звонки
	start() {
		let checkClock = (alarm) => {
			if (alarm.time == this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		}
		if (!this.timerId) {
			let result = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
			this.timerId = result;
		}
	}
	//`stop` - останавливает выполнение всех звонков
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	//`printAlarms` - печатает все звонки
	printAlarms() {
		console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length)
		this.alarmCollection.forEach(function (item) {
			console.log('Будильник №' + item.id + ' заведен на ' + item.time)
		})
	}
	//`clearAlarms` - удаляет все звонки
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

function testCase() {
	let alarm = new AlarmClock();
	alarm.addClock(alarm.getCurrentFormattedTime(), () => {
		console.log('Подъем!');
	}, 1);
	let dateAlarm1 = new Date();
	dateAlarm1.setMinutes(dateAlarm1.getMinutes() + 1);
	alarm.addClock(alarm.getCurrentFormattedTime(), () => {
		console.log('ПОООДЪЁЁЁЁЁЁМ!');
		alarm.removeClock(2)
	}, 2);
	dateAlarm2 = new Date();
	dateAlarm2.setMinutes(dateAlarm2.getMinutes() + 2);
	alarm.addClock(alarm.getCurrentFormattedTime(), () => {
		console.log('РОТАА!!!!! ПОООООДЪЁЁМ!!!!!!');
		alarm.stop();
		alarm.clearAlarms()
	}, 3);
	alarm.printAlarms();
	alarm.start();
}
