# IVR Opening Hours Using Google Places API
## The Problem

One of the most frequent asks when building out an IVR for a contact center is for the IVR to change when the contact center is closed. To deliver a great customer experience, you may want to direct the customer online, give them different options to self-serve, send them to voicemail or simply ask them to call back at a different time.

This kind of functionality can be built out relatively easily using Twilio Functions with Twilio Studio to lookup a spreadsheet or database and some kind of logic to decide if your business is currently open. However this can become complex when managing public holidays, or business down time etc…

## Solution
This repository contains the code that has been written as part of an instrucitonal blog post over on the [Twilio Blog](https://www.twilio.com/blog). Where you will use Google's Places API to power the opening hours decision making in your IVR.
