---
layout: none
---
/**
 * Jitsi Meet integration.
 *
 * @see https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md
 */
(function () {
    const qs = new URLSearchParams(window.location.search);
    const domain = 'meet.jit.si';
    const options = {
        roomName: qs.get('roomName') || false,
        width: '100%',
        height: '500px',
        parentNode: document.querySelector('#tlc-webinar-container'),
        noSSL: false,
        configOverwrite: {
            // Everyone starts muted.
            startAudioMuted: 0,
            startVideoMuted: 0,

            liveStreamingEnabled: false,
            fileRecordingsEnabled: false

            {% comment %}
            // TODO: These seem to be getting ignored?
            //enableCalendarIntegration: false,
            //gatherStats: false
            {% endcomment %}
        },
        interfaceConfigOverwrite: {
            SETTINGS_SECTIONS: [ 'devices', 'language', 'profile' ],
            ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 10000,
            JITSI_WATERMARK_LINK: false

            {% comment %}
            // Uncomment this to disable toolbar, useful for large events?
            //filmStripOnly: true
            {% endcomment %}
        }
    };
    const api = new JitsiMeetExternalAPI(domain, options);
    api.executeCommands({
        'avatarUrl': ['{{ site.logo | absolute_url }}'],
        'subject'  : [ atob(qs.get('subject')) || false ]
    });
})();
