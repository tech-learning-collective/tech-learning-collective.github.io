(function () {
    document.addEventListener('DOMContentLoaded', function () {
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
            'defaultView': 'listWeek',
            'events': '/events/all-fullcalendar-io.json',
            'eventRender': function (info) {
                if (info.view.type.match(/^list/)) {
                    var style = info.el.style;
                    style.height             = '5em';
                    style.backgroundImage    = 'url("' + info.event.extendedProps.image + '")';
                    style.backgroundRepeat   = 'no-repeat';
                    style.backgroundPosition = 'right';
                    style.backgroundSize     = 'contain';

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
                if (900 > window.innerWidth) {
                    // Adjust for newer, small window size.
                    cal.changeView('listWeek');
                    el.querySelectorAll('.fc-list-item').forEach(function (item) {
                        var style = item.style;
                        style.backgroundPosition = 'bottom left';
                        style.backgroundSize     = '140px';
                    });
                } else {
                    // Readjust back to larger window size.
                    el.querySelectorAll('.fc-list-item').forEach(function (item) {
                        var style = item.style;
                        style.backgroundPosition = 'right';
                        style.backgroundSize     = 'contain';
                    });
                }
            }
        });
        cal.render();
    });
})();
