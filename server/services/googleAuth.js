const axios = require('axios');
const jwt = require('jsonwebtoken');

// Required scopes for Google Business API
const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/plus.business.manage',
  'https://www.googleapis.com/auth/business.manage'
].join(' ');

function getAuthUrl() {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    scope: GOOGLE_SCOPES,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent'
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

async function exchangeCodeForTokens(code) {
  try {
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    });

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      id_token: data.id_token,
      expires_in: data.expires_in,
      token_type: data.token_type
    };
  } catch (error) {
    console.error('Error exchanging code for tokens:', error.response?.data || error.message);
    throw new Error('Failed to exchange authorization code for tokens');
  }
}

async function refreshAccessToken(refresh_token) {
  try {
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      refresh_token,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: 'refresh_token',
    });

    return {
      access_token: data.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type
    };
  } catch (error) {
    console.error('Error refreshing access token:', error.response?.data || error.message);
    throw new Error('Failed to refresh access token');
  }
}

async function getGoogleUserInfo(access_token) {
  try {
    const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    return data;
  } catch (error) {
    console.error('Error getting user info:', error.response?.data || error.message);
    throw new Error('Failed to get user information');
  }
}

async function getGoogleUserInfoFromIdToken(id_token) {
  try {
    const decoded = jwt.decode(id_token);
    return {
      sub: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture
    };
  } catch (error) {
    console.error('Error decoding ID token:', error.message);
    throw new Error('Failed to decode ID token');
  }
}

// Test Google Business API access
async function testBusinessApiAccess(access_token) {
  try {
    // Test with a simple API call
    const response = await axios.get('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    
    return {
      success: true,
      accounts: response.data.accounts || []
    };
  } catch (error) {
    console.error('Business API test failed:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data || error.message,
      status: error.response?.status
    };
  }
}

module.exports = { 
  getAuthUrl,
  exchangeCodeForTokens, 
  refreshAccessToken,
  getGoogleUserInfo, 
  getGoogleUserInfoFromIdToken,
  testBusinessApiAccess,
  GOOGLE_SCOPES
};