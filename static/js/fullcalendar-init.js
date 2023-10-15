(function () {
    document.addEventListener('DOMContentLoaded', function () {

        /**
         * Tests for calendar-specific breakpoints.
         *
         * @return string Either `portrait` or `landscape`.
         */
        function calendarViewLayout () {
            return (900 > window.innerWidth) ? 'portrait': 'landscape';
        }

        /**
         * Checks for and validates a user-requested FullCalendar view.
         *
         * @return string
         */
        function getFullCalendarView () {
            var valid_views = [
                'dayGridMonth',
                'listWeek'
            ];
            var p = new URLSearchParams(document.location.search.substring(1));
            return (valid_views.includes(p.get('fullcalendar-view')))
                ? p.get('fullcalendar-view')
                : 'listWeek'; // Default view.
        }

        /**
         * Custom event item renderer.
         *
         * @see https://fullcalendar.io/docs/event-render-hooks
         *
         * @param object info Event information.
         */
        function renderEvent ( info ) {
            if (info.view.type.match(/^list/)) {
                info.el.style.backgroundImage = 'url("' + info.event.extendedProps.image + '")';
                // TODO: Move this into CSS proper.
                if ('portrait' === calendarViewLayout()) {
                    info.el.style.backgroundPosition = 'bottom left';
                    info.el.style.backgroundSize     = '140px';
                } else {
                    info.el.style.backgroundPosition = 'right';
                    info.el.style.backgroundSize     = 'contain';
                }

                var p = document.createElement('p');
                if (new Date(info.event.end) > new Date()) {
                    if (info.event.extendedProps.schemaDotOrg.offers) {
                        var offers = info.event.extendedProps.schemaDotOrg.offers
                        var prices = offers.reduce(function (a, c) {
                            return {
                                'min': (c.price < a.price) ? c.price: a.price,
                                'max': (c.price > a.price) ? c.price: a.price,
                                'price': a.price,
                                'priceCurrency': a.priceCurrency
                            };
                        });
                        p.innerHTML = '<a href="' + info.event.url + '#tickets-'
                            + info.event.url.split('/').pop()
                            + '">Buy tickets ($' + parseFloat(prices.min) + '&ndash;$'
                            + parseFloat(prices.max) + ' ' + prices.priceCurrency + ')</a>'
                    } else {
                        p.innerHTML = 'Free or donation-based';
                    }

                    if (info.event.extendedProps.schemaDotOrg.maximumAttendeeCapacity) {
                        p.innerHTML += ' &mdash; Seat limit: ' + info.event.extendedProps.schemaDotOrg.maximumAttendeeCapacity;
                    }
                } else {
                    p.textContent = 'This event has passed.'
                }
                info.el.querySelector('.fc-list-event-title').appendChild(p);
            }
        }

        /**
         * Custom window resize event handler.
         *
         * @see https://fullcalendar.io/docs/windowResize
         * 
         * @param {object} arg
         */
        function windowResize ( arg ) {
            if ('portrait' === calendarViewLayout()) {
                // Adjust for newer, small window size.
                cal.changeView('listWeek');
                document.querySelectorAll('.fc-list-event').forEach(function ( item ) {
                    var style = item.style;
                    // TODO: Move this into CSS proper.
                    style.backgroundPosition = 'bottom left';
                    style.backgroundSize     = '140px';
                });
                cal.setOption('aspectRatio', 0.5); // Twice as high as wide.
            } else {
                // Readjust back to larger window size.
                document.querySelectorAll('.fc-list-event').forEach(function ( item ) {
                    var style = item.style;
                    // TODO: Move this into CSS proper.
                    style.backgroundPosition = 'right';
                    style.backgroundSize     = 'contain';
                });
                cal.setOption('aspectRatio', 1.35);
            }
        }

        var cal = new FullCalendar.Calendar(document.getElementById('fullcalendar'), {
            headerToolbar: {
                left  : 'title',
                center: 'listWeek,dayGridMonth',
                right : 'today prev,next'
            },
            initialView: getFullCalendarView(),
            firstDay: 1, // Intentionally on Monday, not Sunday.
            aspectRatio: ('portrait' === calendarViewLayout()) ? 0.5 : 1.35,
            events: fullcalendar_events || '/events/all-fullcalendar-io.json',
            eventDidMount: renderEvent,
            windowResize: windowResize
        });
        cal.render();
    });
})();
