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
            'aspectRatio': (calendarViewLayout()) ? 0.5 : 1.35,
            'defaultView': 'listWeek',
            'events': '{% link events/all-fullcalendar-io.json %}',
            'eventRender': function (info) {
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
                        p.innerHTML = (info.event.extendedProps.schemaDotOrg.offers)
                            ? '<a href="' + info.event.url + '#tickets-' + info.event.url.split('/').pop() + '">Buy tickets</a>'
                            : 'Free or donation-based';
                    } else {
                        p.textContent = 'This event has passed.'
                    }
                    info.el.querySelector('.fc-list-item-title').appendChild(p);
                }
            },
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
