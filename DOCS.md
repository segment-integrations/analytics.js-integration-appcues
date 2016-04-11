Create personalized user onboarding flows without changing any code
that will improve your product's adoption and retention rates.
[Visit Website](http://appcues.com)

Our Appcues integration code is [open-source on
GitHub](https://github.com/appcues/analytics.js-integration-appcues)
if you want to check it out.

## Getting Started

To install Appcues via Segment, all you have to do is add your Appcues ID
and API key
(found on your [Appcues account page](https://my.appcues.com/account))
to your Segment integrations dashboard.

## API

### Identify

When you `identify` on `analytics.js`, we call `Appcues.identify`.  This
is the preferred method of using and targeting on user properties.

To get the most out of Appcues, you’ll want to send as much user data
as possible in the identify call. Properties are used to target experiences
to specific users and personalize content. Most Appcues customers send
properties that fall into a few groups:

* Properties to target based on broad classifications such as `role`
  or `userType`
* Properties to personalize Appcues content such as `name`, `firstName`
  or `company`
* Properties to target based on user lifecycle such as `createdAt` (date)
  or usage metrics such as `numTasksComplete`

### Track

Calls to `analytics.track` invoke `Appcues.track` as well.  This will
send event data to the Appcues platform, where it can be used for future
content triggering.

### Page

Appcues will check to see if a user qualifies for an experience every time
the page changes. When you first call `page` using `analytics.js`,
`Appcues.start` checks if there are any current flows for the user and
loads them if necessary.

## Appcues Features

### Whitelisted Domains

By default, Appcues will target based on the path of the URL. So if we created an Appcues experience and targeted it to /integrations, it would appear wherever the embed script is installed with that URL path, like appcues.com/integrations and my.appcues.com/integrations. If your analytics.js script is installed on multiple domains (e.g. your marketing site and your web app), you’ll want to use Appcues whitelisted domains when targeting your experience.

### Sending Appcues events via Segment

Want to read Appcues events in your 3rd party analytics or marketing automation tool? Appcues supports sending events to other tools on the Segment platform. These events will be sent as track calls to the other integrations you’ve turned on.

To enable this feature, go to the Integrations Settings in Appcues and click “Activate” under the Segment integration.

## Receiving external data via Segment

Appcues can accept data from other Segment partners too, via our
server-side integration.  This way, you can keep Appcues in sync with
user properties and events without needing the data to originate from
your website where Appcues is running.

## Settings

Segment lets you change these settings on the Integrations page, without having to touch any code.

Appcues Id
Appcues API key

