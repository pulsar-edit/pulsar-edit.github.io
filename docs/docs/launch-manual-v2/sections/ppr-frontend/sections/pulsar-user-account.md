## Pulsar User Account

A Pulsar user account enables you to publish to the Pulsar Package Registry, manage packages you've published, and “star” your favorite packages.

If you don't plan on doing any of these things, you don't need to create a user account.

### Creating a Pulsar User Account

To create a Pulsar user account, navigate to the [Pulsar Package Registry](https://web.pulsar-edit.dev) and click "Sign In" on the top header bar — or go directly to [the signup page](https://web.pulsar-edit.dev/login).

There are two ways to create an account:

- [Sign Up with a PAT Token](#sign-up-with-a-pat-token)
- [Sign Up with GitHub OAuth](#sign-up-with-github-oauth)

#### Sign Up with a PAT Token

Using a PAT token from GitHub allows you precise control over what permissions your Pulsar User Account has over your GitHub account, which you don't get with the OAuth Signup.

You can go to your GitHub Account and [create your own PAT token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), granting only the permissions that Pulsar needs.

Pulsar needs **only** the permissions listed below:

- public_repo
- read:org

Beyond that your Pulsar User Account won't try to use any additional permissions.

Once your PAT Token is created navigate back to the Pulsar Signup Screen and plug your PAT token into the text box where it says "Enter your GitHub PAT" and click "Sign Up". After a few redirects you should be brought to your [Pulsar User Account Page](https://web.pulsar-edit.dev/users).

#### Sign Up with GitHub OAuth

Using GitHub OAuth signup means you don't have to manage the permissions and signup process on your own as opposed to the PAT Token signup.

Still when signing up with GitHub OAuth the only permissions requested (That you'll be able to review during the process) are:

- public_repo
- read:org

These are the only permissions needed for your Pulsar User Account to access all features it's capable of.

Once you click to "Sign Up with GitHub OAuth" you'll be redirected to GitHub to authorize Pulsar to access your account. There you can check the account you are allowing access, and review the permissions being granted.

Afterwards you should be redirected to your [Pulsar User Account Page](https://web.pulsar-edit.dev/users).

#### Managing your Account

Now that your Pulsar User Account has been successfully created you can manage it on your [Pulsar User Account Page](https://web.pulsar-edit.dev/users).

Here you can view the account information saved to Pulsar, and view your Pulsar API Token.

This Pulsar API Token is what can be used to allow you to publish to the Pulsar Package Registry using [PPM]().

Otherwise if you ever notice your account information here has become out of date (i.e. you've changed your profile picture) you can always click "Log Out" at the top of the page, and sign in again with the same steps as before. When you click go through the sign up process after already having created a Pulsar User Account this just updates your account information with what's most recent from GitHub.

#### Notes on a Pulsar User Account

A few important notes about your Pulsar User Account to keep in mind.

Pulsar greatly respects your privacy, and more than that doesn't want the chance to invade your privacy, or be responsible for your sensitive account credentials.

That's why when you create a User Account with Pulsar there are only three pieces of information stored about you:

- Your GitHub Account Username.
- Your GitHub Gravatar Image URL.
- Your GitHub `node_id`.

Think of your `node_id` like the random number GitHub assigned to your account when you created it. This is a public value that anyone on GitHub can find using the API and doesn't reveal any private details about yourself , your location or your account. Beyond this the Pulsar Backend collects zero information about who you are, and doesn't even save your API Keys itself.

If you'd like to read more about how your information is used for Pulsar take a look at our [Privacy Policy]() or the [Pulsar Backend]() Documentation.
