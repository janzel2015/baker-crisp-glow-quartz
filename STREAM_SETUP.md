# DXFR 104.1 Freedom FM — live stream setup

The homepage now uses a real HTML audio player. It does not synthesize a station ID or pretend to be a live broadcast.

## Required Vercel environment variable

Set this in **Vercel → Project → Settings → Environment Variables**:

- Name: `VITE_STREAM_URL`
- Value: the station's actual public HTTPS audio stream URL (MP3/AAC or a supported streaming endpoint)

Enable it for Production (and Preview if needed), save, then redeploy.

## Important

- Do not use the station website URL or Facebook page URL as the audio source.
- The stream URL must be a direct playable audio endpoint and allow browser playback (CORS may be required for some stream providers).
- Test the exact URL in a browser before adding it.
- No stream URL was found in the current repository, so the player will show a setup message until the station supplies the correct endpoint.

## Facebook updates

The homepage embeds the public Facebook Page timeline. Facebook may block embeds for some visitors or browsers; the direct Page link remains available as a fallback.

## Listener messages

The current listener board is browser-local storage on each device. It is not a shared inbox and does not send messages to the station. A shared inbox requires a server-side endpoint and a moderation destination.
