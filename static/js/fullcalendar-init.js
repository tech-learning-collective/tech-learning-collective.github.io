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
                        p.textContent = (info.event.extendedProps.schemaDotOrg.offers)
                            ? 'Buy tickets'
                            : 'Free or donation-based';
                    } else {
                        p.textContent = 'This event has passed.'
                    }
                    info.el.querySelector('.fc-list-item-title').appendChild(p);
                }
            },
            'windowResize': function (view) {
                if (900 > window.innerWidth) {
                    cal.changeView('listWeek');
                }
            }
        });
        cal.render();
    });
})();
