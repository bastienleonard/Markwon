(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{267:function(t,n,a){"use strict";a.r(n);var e=a(0),s=Object(e.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"textsetter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#textsetter","aria-hidden":"true"}},[t._v("#")]),t._v(" TextSetter "),a("Badge",{attrs:{text:"4.1.0"}})],1),t._v(" "),a("p",[t._v("Since "),a("Badge",{attrs:{text:"4.1.0"}}),t._v(" it is possible to control how text is applied to a "),a("code",[t._v("TextView")]),t._v(".\nThis is done via "),a("code",[t._v("Markwon.TextSetter")]),t._v(" interface.")],1),t._v(" "),t._m(0),t._m(1),a("p",[t._v("Primary target for this functionality is to use "),a("a",{attrs:{href:"https://developer.android.com/reference/android/text/PrecomputedText",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrecomputedText"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://developer.android.com/reference/androidx/core/text/PrecomputedTextCompat",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrecomputedTextCompat"),a("OutboundLink")],1),t._v(".\n"),a("code",[t._v("Markwon")]),t._v(" comes with "),a("code",[t._v("PrecomputedTextSetterCompat")]),t._v(" implementation.")]),t._v(" "),t._m(2)])},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v("/**/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("textSetter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PrecomputedTextSetterCompat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Executors"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("newCachedThreadPool")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TextSetter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * @param textView   TextView\n     * @param markdown   prepared markdown\n     * @param bufferType BufferType specified when building {@link Markwon} instance\n     *                   via {@link Builder#bufferType(TextView.BufferType)}\n     * @param onComplete action to run when set-text is finished (required to call in order\n     *                   to execute {@link MarkwonPlugin#afterSetText(TextView)})\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" TextView textView"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Spanned markdown"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" TextView"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferType bufferType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Runnable onComplete"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),n("p",[this._v("Please note that "),n("code",[this._v("PrecomputedTextCompat")]),this._v(" belongs to the "),n("code",[this._v("androidx.core:core")]),this._v(" artifact. Make\nsure that you have it in your project's dependencies (explicitly or implicitly)")])])}],!1,null,null,null);s.options.__file="text-setter.md";n.default=s.exports}}]);