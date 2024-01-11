# Unofficial Google Auth Token Generator

Generate a one-time token compatible with Google Authenticator

------

## Setup

1. Clone the **Unofficial Google Auth Token Generator** files
```
git clone https://github.com/patopitaluga/google-auth-token-gen.git
```
2. Install dependencies
```
npm install
```

3. Get the QR code to transfer your Google Authenticator code following these instructions: https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DiOS

4. Screen capture the QR code, move the screen capture image file to your computer and store it in the "qr" folder.

5. Run

```
npm run getsecret
```

Copy the output secret.

6. Run

```
npm run getott {the-secret}
```

To set a secret as default you can set the environment variable GOOGLE_AUTH_SECRET or create an .env file using .env.example as template. Then it's possible to run `npm run getott` without the secret

---

## Usage

```
npm run getott {the-secret}
```

