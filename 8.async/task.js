class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	//`addClock` - добавляет новый звонок в коллекцию существующих. 
	addClock(time, callback, id) {
		if (this.id == 'undefined') {
			throw new Error('error text')
		}
		if (this.alarmCollection.some(elem => elem.id == id)) {
			console.error('Будильник с ID ${id} уже имеется');
			return
		}
		this.alarmCollection.push({ time, callback, id })
	}
	//`removeClock` - удаляет определённый звонок
	removeClock(id) {
		const index = this.alarmCollection.findIndex(item => item.id == id);
		if (index !== -1) {
			alarmCollection.splice(index, 1);
			console.log('Будильник с ID ${id} удален')
		} console.log('Будильник с ID ${id} не удален')
	}
	//`getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`
	getCurrentFormattedTime() {
		let nowTime = (new Date().getHours()) + ':' + (new Date().getMinutes());
		console.log(nowTime);
		return nowTime;
	}
	//`start` - запускает все звонки
	start() {
		function checkClock(alarm) {
			if (alarm.time == getCurrentFormattedTime()) {
				callback();
			}
		}
		if (alarm.id == null) {
			let result = setInterval((interval), 1000)
			function interval() {
				for (let i = 0; i < this.alarmCollection.length; i++) {
					checkClock(alarm);
				};
			}
			alarm.id = result;
		}
	}
	//`stop` - останавливает выполнение всех звонков
	stop(alarm) {
		if (alarm.id !== null) {
			clearInterval();
			delete alarm.id;
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
		this.alarmCollection = [];
	}
}