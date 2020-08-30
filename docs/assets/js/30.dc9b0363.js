(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{214:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Certain usage albeit the best efforts of maintaining a feature rich documentation isn't always necessarily straight forward. Chariot.js is no exception to this rule, so here are the most frequently asked questions about Chariot.js.")]),t._v(" "),a("p",[t._v("If you have a question not satisfied by this FAQ please feel free to "),a("a",{attrs:{href:"https://discord.gg/kKPZdA6",target:"_blank",rel:"noopener noreferrer"}},[t._v("drop by our Discord guild"),a("OutboundLink")],1),t._v(" and we'll be sure to help you!")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Example in a command executor:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("As outlined in the "),a("router-link",{attrs:{to:"./classes/client.html"}},[t._v("Chariot.Client")]),t._v(" API, the Chariot.js client exposes a property called "),a("code",[t._v("guildPrefixes")]),t._v(" which can then be used to filter for guild specific prefixes:")],1),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("As documented in the "),a("router-link",{attrs:{to:"./classes/client.html"}},[t._v("Chariot.Client")]),t._v(" API reference, "),a("code",[t._v("commands")]),t._v(" is an exposed Client property, which is a "),a("router-link",{attrs:{to:"./classes/collection.html"}},[t._v("Collection")]),t._v(" of all validly registered commands. From there on it's just a matter of obtaining a command and manually invoking the prefered executor!")],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("HEADS-UP")]),t._v(" "),a("p",[t._v("If a command is manually executed, the provided message property for the executors "),a("strong",[t._v("MUST")]),t._v(" be a valid "),a("a",{attrs:{href:"https://abal.moe/Eris/docs/Message",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eris.Message"),a("OutboundLink")],1),t._v(" object! This especially applies to message partials that can occur on some events, e.g. "),a("code",[t._v("messageReactionAdd")]),t._v("!")])]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("To tell Chariot.js which folders to ignore the corresponding option needs to be set in the "),a("router-link",{attrs:{to:"./classes/config.html"}},[t._v("Chariot.Config")]),t._v(" object upon initializing a new Chariot.js client. Head on over to the "),a("router-link",{attrs:{to:"./classes/config.html"}},[t._v("Chariot.Config")]),t._v(" API reference for an example configuration to get started quickly.")],1),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("If you have a question not satisfied by this FAQ please feel free to "),a("a",{attrs:{href:"https://discord.gg/kKPZdA6",target:"_blank",rel:"noopener noreferrer"}},[t._v("drop by our Discord guild"),a("OutboundLink")],1),t._v(" and we'll be sure to help you!")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-do-i-access-the-prefix-of-the-command-that-was-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-access-the-prefix-of-the-command-that-was-run"}},[this._v("#")]),this._v(" How do I access the prefix of the command that was run?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Chariot.js simply extends the Message object by a "),s("code",[this._v("prefix")]),this._v(" property, which always dynamically corresponds to the prefix that was used to invoke the command. This also applies to custom guild specific prefixes!")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Main command executor */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chariot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("You used the ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" prefix!")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("PRO TIP")]),this._v(" "),s("p",[s("code",[this._v("message.prefix")]),this._v(" is also available in sub-commands and the "),s("code",[this._v("runPreconditions")]),this._v(" method!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-do-i-list-all-prefixes-for-a-specific-guild"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-list-all-prefixes-for-a-specific-guild"}},[this._v("#")]),this._v(" How do I list all prefixes for a specific guild?")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Main command executor */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chariot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" guildPrefixes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chariot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildPrefixes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prefixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prefixObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prefixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prefixObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" guildName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prefixes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guildPrefixes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" guildPrefixes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Guild ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("guildName"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" has following custom prefixes: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("prefixes"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-do-i-reset-a-command-s-cooldown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-reset-a-command-s-cooldown"}},[this._v("#")]),this._v(" How do I reset a Command's cooldown?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Depending from where a command's cooldown is wished to be reset, either the "),s("code",[this._v("chariot")]),this._v(" object given a command or the "),s("code",[this._v("client")]),this._v(" class property has to be used to access the main Chariot.js bot client.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inside of a Command file */")]),t._v("\nchariot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messageHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cooldowns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commandName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inside of an Event handler file */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messageHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cooldowns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commandName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("With "),s("code",[this._v("commandName")]),this._v(" being the command's name set during command instantiation and "),s("code",[this._v("userID")]),this._v(" being the user ID Snowflake of the user for who the cooldown should be reset.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("PRO TIP")]),t._v(" "),a("ol",[a("li",[a("strong",[a("code",[t._v("commandName")])]),t._v(" is case sensitive and will cause a failed command cooldown deletion attempt!")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("userID")])]),t._v(" being a Discord Snowflake requires the provision of the ID as a "),a("strong",[t._v("String")]),t._v(" and "),a("strong",[a("strong",[t._v("NOT")])]),t._v(" as a "),a("strong",[t._v("Number")]),t._v("!")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-do-i-manually-execute-a-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-manually-execute-a-command"}},[this._v("#")]),this._v(" How do I manually execute a Command?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This automatically also applies for manually executing sub-commands by simply exchanging the "),s("code",[this._v("execute")]),this._v(" method with whatever sub-command executor is desired!")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inside of a Command file */")]),t._v("\nchariot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commandName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chariot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inside of an Event handler file */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commandName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chariot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("Manually invoking commands will completely skip the "),s("code",[this._v("runPreconditions")]),this._v(" method of a command if one is present!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-do-i-tell-chariot-js-to-ignore-certain-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-tell-chariot-js-to-ignore-certain-folders"}},[this._v("#")]),this._v(" How do I tell Chariot.js to ignore certain folders?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Chariot.js can as of version "),s("code",[this._v("3.2.0")]),this._v(" ignore folders upon initialization. This means neither command files nor event files will be read from said folders and are fully ignored.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Chariot.js only requires folder names, no paths to said folders, even if the folder in question is nested!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"my-question-is-not-listed-here"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-question-is-not-listed-here"}},[this._v("#")]),this._v(" My question is not listed here")])}],!1,null,null,null);s.default=n.exports}}]);