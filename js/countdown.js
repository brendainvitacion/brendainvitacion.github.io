   simplyCountdown('#cuenta', {
            year: 2025, // required
            month: 06, // required
            day: 21, // required
            hours: 21, // Default is 0 [0-23] integer
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: { singular: 'Dia', plural: 'Dias' },
                hours: { singular: 'Hora', plural: 'Horas' },
                minutes: { singular: 'Minuto', plural: 'Minutos' },
                seconds: { singular: 'Segundo', plural: 'Segundos' }
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: false, //Use UTC or not - default : false
            onEnd: function() { return; }, //Callback on countdown end, put your own function here
            refresh: 1000, // default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word', // word css class
            zeroPad: false,
            countUp: false
    });

