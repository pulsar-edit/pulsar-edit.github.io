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


Once your PAT Token is created, navigate back to the Pulsar signup page. Paste your PAT token into the "Enter your GitHub PAT" text box and click "Sign Up." After a few redirects, you should be brought to your [Pulsar user account page](https://web.pulsar-edit.dev/users).

#### Sign Up with GitHub OAuth

Using GitHub OAuth signup means you don't have to manage the permissions and signup process on your own as opposed to the PAT Token signup.

When you click "Sign Up with GitHub OAuth," you'll be redirected to GitHub to authorize Pulsar to access your account. On that page, you can double-check that you're connecting Pulsar to the correct account and review the permissions being granted.

You'll be able to confirm that the **only** permissions requested by Pulsar are the following:

- public_repo
- read:org



Afterwards you should be redirected to your [Pulsar user account page](https://web.pulsar-edit.dev/users).

#### Managing your Account

Now that your Pulsar user account has been successfully created, you can manage it on your [Pulsar user account page](https://web.pulsar-edit.dev/users).

On this page, you can view the account information saved to Pulsar and your Pulsar API token. This token is what enables you to publish to the Pulsar Package Registry using `ppm`.


If you need to refresh your account information — for instance, if you've changed your profile picture — you can click "Log Out" at the top of the page and sign in again using the same process described above. This does not affect any of the packages you've already published.

#### Privacy


Pulsar respects your privacy. We don't want to feel intrusive, and we especially don't want the responsibility of managing your sensitive information.

That's why we store only three pieces of information about you when you create a Pulsar user account:

- Your GitHub Account Username.
- Your GitHub Gravatar Image URL.
- Your GitHub `node_id`.

Think of your `node_id` as a random number GitHub assigned to your account when you created it. This is a public value that anyone on GitHub can find using the API. It doesn't reveal any private details about yourself, your location, or your account.

Beyond these three values, Pulsar collects and stores nothing about who you are. Pulsar doesn't even store your API key.

If you'd like to read more about how your information is used for Pulsar take a look at our [Privacy Policy]() or the [Pulsar Backend]() Documentation.
