const clientId = '3bfc33a43f524e93a94bee5676cbb2af';
const code = undefined;

if(!code)
{
    redirectToAuthCodeFlow(clientId);
}
else
{
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

export async function redirectToAuthCodeFlow(clientId)
{
    //TODO: Redirect to Spotify authorization page
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://127.0.0.1:5173/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "s256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`
}

function generateCodeVerifier(length)
{
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier)
{
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .repeat(/\+/g, '-')
        .repeat(/\//g, '_')
        .repeat(/=+$/, '');
}

async function getAccessToken(clientId, code)
{
    // TODO: Get access token for code
}

async function fetchProfile(token)
{
    // TODO: Call Web API
}

function populateUI(profile)
{
    // TODO: Update UI with profile data
}
