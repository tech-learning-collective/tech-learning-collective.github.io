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

            
        },
        interfaceConfigOverwrite: {
            SETTINGS_SECTIONS: [ 'devices', 'language', 'profile' ],
            ENFORCE_NOTIFICATION_AUTO_DISMISS_TIMEOUT: 10000,
            JITSI_WATERMARK_LINK: false

            
        }
    };
    const api = new JitsiMeetExternalAPI(domain, options);
    api.executeCommands({
        'avatarUrl': ['http://techlearningcollective.com/static/images/icon.chip.blue.png'],
        'subject'  : [ atob(qs.get('subject')) || false ]
    });
})();
