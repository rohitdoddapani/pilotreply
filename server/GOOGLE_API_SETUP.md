# Google Business API Setup Guide

## Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing (required for API access)

## Step 2: Enable Required APIs

Enable these APIs in your Google Cloud project:

1. **My Business Account Management API**
   - Go to APIs & Services > Library
   - Search for "My Business Account Management API"
   - Click Enable

2. **My Business Business Information API**
   - Search for "My Business Business Information API"
   - Click Enable

3. **My Business API**
   - Search for "My Business API"
   - Click Enable

## Step 3: Create OAuth 2.0 Credentials

1. Go to APIs & Services > Credentials
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback` (for development)
   - `https://yourdomain.com/api/auth/google/callback` (for production)
5. Copy the Client ID and Client Secret

## Step 4: Environment Variables

Add these to your `.env` file:

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback
SUPABASE_DB_URL=your_supabase_connection_string
```

## Step 5: Google Business Profile Setup

1. **Verify Business Ownership**: Make sure you own or manage a Google Business Profile
2. **Enable API Access**: The business profile must be verified and active
3. **Check Permissions**: Ensure your Google account has admin access to the business

## Step 6: Test the Setup

1. **Start Authentication**:
   ```
   GET /api/auth/google
   ```

2. **Test API Access**:
   ```
   GET /api/auth/test
   ```

3. **Fetch Reviews**:
   ```
   GET /api/reviews/fetch
   ```

## Common Issues & Solutions

### "Insufficient permissions" Error

**Cause**: Missing required scopes or API not enabled

**Solution**:
1. Make sure all required APIs are enabled
2. Use the correct scopes in authentication:
   - `https://www.googleapis.com/auth/plus.business.manage`
   - `https://www.googleapis.com/auth/business.manage`

### "No business accounts found" Error

**Cause**: No verified Google Business Profile

**Solution**:
1. Create and verify a Google Business Profile
2. Ensure your Google account is the owner/admin
3. Wait 24-48 hours after verification

### "Invalid redirect URI" Error

**Cause**: Mismatch between configured and actual redirect URI

**Solution**:
1. Check your OAuth 2.0 credentials configuration
2. Ensure the redirect URI matches exactly (including protocol and port)

### "Access token expired" Error

**Cause**: Token has expired

**Solution**:
1. The system should automatically refresh tokens
2. If not, re-authenticate by visiting `/api/auth/google`

## Required Scopes

The application requests these scopes:

```javascript
const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/plus.business.manage',
  'https://www.googleapis.com/auth/business.manage'
].join(' ');
```

## API Quotas and Limits

- **My Business API**: 1000 requests per day per project
- **Account Management API**: 1000 requests per day per project
- **Business Information API**: 1000 requests per day per project

## Testing Checklist

- [✅] All APIs enabled in Google Cloud Console
- [✅] OAuth 2.0 credentials created with correct redirect URI
- [✅] Environment variables set correctly
- [✅] Google Business Profile verified and active
- [✅] Authentication flow works (`/api/auth/google`)
- [ ] API test passes (`/api/auth/test`)
- [ ] Reviews can be fetched (`/api/reviews/fetch`)

## Production Considerations

1. **HTTPS**: Use HTTPS in production
2. **Domain Verification**: Verify your domain in Google Cloud Console
3. **API Quotas**: Monitor usage and implement rate limiting
4. **Error Handling**: Implement proper error handling and logging
5. **Token Refresh**: Ensure automatic token refresh is working 