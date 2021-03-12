---
layout: none
---
(function () {
    document.addEventListener('DOMContentLoaded', function () {

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

        var el  = document.getElementById('fullcalendar');
        var cal = new FullCalendar.Calendar(el, {
            'headerToolbar': {
                'left'  : 'prev,next today',
                'center': 'title',
                'right' : 'dayGridMonth,listWeek'
            },
            'initialView': getFullCalendarView(),
            'events': fullcalendar_events || '{% link events/all-fullcalendar-io.json %}',
            'eventDidMount': function (info) {
                info.el.setAttribute('title', info.event.title);
                return [ info.el ];
            },
            'aspectRatio': 2
        });
        cal.render();
    });
})();
