---
title: "Meet PON (Pulsar Object Notation)"
author: confused-Techie
date: 2023-04-01
category:
  - dev
tag:
  - joke
---

The release of PON!

<!-- more -->

One day during discussions amoung the Pulsar dev team, we came to the topic of what file types to support for user's config files. While it was mostly a question of how support would go with allowing anything from JSON, JSON5, TOML, YAML, CSON, and anything else we could think of, in the end we couldn't agree on a solution.

We kept finding downsides to every possibility, and concerns for support with so many. So we decided it only made sense, to take the true Atom approch, and create something new.

What we created is PON (Pulsar Object Notation)!

This new file format takes the best thing of every language and combines them into one.

Taking all of their strengths, and none of their weaknesses.
Pulsar Object Notation has a more expansive feature set than any other object file format than has ever existed!

- Easy to determine the types of keys
- Human Readable object structure
- Incredibly clear object nesting
- Comments & Multiline comments are supported!

Best of all PON is easy to learn, and easy to use!

Compare the following JSON:

```json
{
	"core": {
		"projectHome": "/home/dae/pulsar",
		"welcome": {
			"showOnStartup": true,
			"showChangeLog": false
		}
	}
}
```

The above JSON is flat out ugly. Plus has no support for comments, and it's nearly impossible to see which object a key belongs to without painstackingly counting each and every bracket, really JSON is an outdated, and hard to read format.

But from the impossible to use JSON above, here is the same thing in PON!

```pon
Dim core As Object
Dim projectHome As String
Dim welcome As Object
Dim showOnStartup As Boolean
Dim showChangeLog As Boolean

10 # <<core>> [
  10.10 ## projectHome:= <</home/dae/pulsar>>
  10.20 ## <<welcome>> [
    <¿--<<An easy to type comment!>>--?>
    10.20.10 ### showOnStartup:= <<unfalse>>
    10.20.20 ### showChangeLog:= <<untrue>>
  ];
];
```

Look at that! As you can see anyone can pick it up without even reading a manual! But if you do need one, make sure to read the full [Specification 1.0.0](https://github.com/confused-Techie/pon/blob/main/spec/1.0.0-specification.md)

As might be expected, PON already has full support in Pulsar!

You can install the syntax highlighting for Pulsar via [Language PON](https://web.pulsar-edit.dev/packages/language-pon) on the Pulsar Package Registry.

Plus by using the JavaScript Module [PON](https://github.com/confused-Techie/pon) we can convert any JSON data into a proper PON object, and read any PON object form the filesystem into a JavaScript Object.

With the above module, we are happy to announce that the next release of Pulsar will automatically convert all configuration files it finds on your system (Not just Pulsar ones) into PON. We are hoping to do this system wide to help increase adoption of PON as a data structure.

So stay tuned for further updates, and when to expect all system files to be converted!

Happy stargazing!

And also, remember, this is a **joke**. But if you do like PON, the resources above are fully functional and available to use. Happy April Fools everyone.
