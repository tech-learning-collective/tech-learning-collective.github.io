---
layout: none
---
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
         * @see https://fullcalendar.io/docs/eventRender
         *
         * @param object info Event information.
         */
        function renderEvent (info) {
            if (info.view.type.match(/^list/)) {
                var style = info.el.style;
                style.height             = '5em';
                style.backgroundImage    = 'url("' + info.event.extendedProps.image + '")';
                style.backgroundRepeat   = 'no-repeat';
                // TODO: Move this into CSS proper.
                if ('portrait' === calendarViewLayout()) {
                    style.backgroundPosition = 'bottom left';
                    style.backgroundSize     = '140px';
                } else {
                    style.backgroundPosition = 'right';
                    style.backgroundSize     = 'contain';
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
                info.el.querySelector('.fc-list-item-title').appendChild(p);
            }
        }

        var el  = document.getElementById('fullcalendar');
        var cal = new FullCalendar.Calendar(el, {
            'plugins': [
                'dayGrid',
                'list'
            ],
            'header': {
                'left'  : 'title',
                'center': 'listWeek,dayGridMonth',
                'right' : 'today prev,next'
            },
            'aspectRatio': ('portrait' === calendarViewLayout()) ? 0.5 : 1.35,
            'defaultView': getFullCalendarView(),
            'events': fullcalendar_events || '{% link events/all-fullcalendar-io.json %}',
            'eventRender': renderEvent,
            'windowResize': function (view) {
                if ('portrait' === calendarViewLayout()) {
                    // Adjust for newer, small window size.
                    cal.changeView('listWeek');
                    el.querySelectorAll('.fc-list-item').forEach(function (item) {
                        var style = item.style;
                        // TODO: Move this into CSS proper.
                        style.backgroundPosition = 'bottom left';
                        style.backgroundSize     = '140px';
                    });
                    cal.setOption('aspectRatio', 0.5); // Twice as high as wide.
                } else {
                    // Readjust back to larger window size.
                    el.querySelectorAll('.fc-list-item').forEach(function (item) {
                        var style = item.style;
                        // TODO: Move this into CSS proper.
                        style.backgroundPosition = 'right';
                        style.backgroundSize     = 'contain';
                    });
                    cal.setOption('aspectRatio', 1.35);
                }
            }
        });
        cal.render();
    });
})();
