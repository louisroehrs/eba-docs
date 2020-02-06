(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{241:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"github-source-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-source-control","aria-hidden":"true"}},[e._v("#")]),e._v(" Github Source Control")]),e._v(" "),a("p",[e._v("Our development lab now features GitHub integration, enabling programmers to work collaboratively in a source controlled environment. Rather than importing, exporting, and storing a local file, developers may now push their saved changes directly into a git repository. To view and to configure this integration, make sure the 'GitHub' tab is selected within the development lab. All changes to your agent are now viewable in a git diff file within this tab. Note that we currently only support proper git integrations from Github. We do not support other source control systems such as Gitlab.")]),e._v(" "),a("h2",{attrs:{id:"semantics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantics","aria-hidden":"true"}},[e._v("#")]),e._v(" Semantics")]),e._v(" "),a("p",[e._v("GitHub integration enables the following workflows.")]),e._v(" "),a("h3",{attrs:{id:"pushing-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushing-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Pushing Changes")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Develop: Make changes to your assistant using our development lab.")])]),e._v(" "),a("li",[a("p",[e._v("Save Changes: Save these changes locally and test them within our chat panel.")])]),e._v(" "),a("li",[a("p",[e._v("Push: Once you are pleased with your changes you can decide to push them as a single commit to your github repository. Click the 'Publish' button.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("No Conflicts: The push is successful. You can reference the github repository to see for your latest commit.")])]),e._v(" "),a("li",[a("p",[e._v("Conflicts: There is a merge conflict from another contributor's change. You will create a separate branch and submit a pull request. Developers should resolve these conflicts appropriately within GitHub. Note that a bundled approach to git integration is proposed for future development. In this case, each component of the assistant, e.g. action1, will reside in its own file within the repository, e.g. action1.js. In this case, merge conflicts are only possible within the scope of this single action.")])])])])]),e._v(" "),a("h3",{attrs:{id:"creating-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pull-request","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a Pull Request")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Develop: Make changes to your assistant using our development lab.")])]),e._v(" "),a("li",[a("p",[e._v("Save Changes: Save these changes locally and test them within our chat panel.")])]),e._v(" "),a("li",[a("p",[e._v("Create Pull Request: If you are pleased with your changes you can create a new branch and a pull request      automatically in EBA. Go to the GitHub Tab in EBA and select to create a Pull Request. Additional\ndialog components will show up asking you  for the new branch name and a commit message.\nPlease be aware that the branch name must not have embedded spaces.\nYou can also assign optional reviewers. Once you press the Create button, the new branch and pull request will be created in your GitHub Repository.")])])]),e._v(" "),a("h3",{attrs:{id:"checkout-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkout-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Checkout Changes")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Develop: Make changes to your assistant using our development lab.")])]),e._v(" "),a("li",[a("p",[e._v("Save Changes: Save these changes locally and test them within our chat panel. Press the 'Checkout' button.")])]),e._v(" "),a("li",[a("p",[e._v("Checkout: If you are not pleased with your changes you can revert your changes by using the checkout feature.")])])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("To connect your github repository, only two pieces of information are necessary")]),e._v(" "),a("ol",[a("li",[e._v("the path to your yaml configuration on github and")]),e._v(" "),a("li",[e._v("an access token which enables GitHub to trust our development lab.")])]),e._v(" "),a("p",[e._v("The path to your configuration file is really simple to obtain. Simply traverse to the yaml file in GitHub, copy the url, and paste it into 'YAML configuration file' within our lab. As a reference, here is the path to our Walmart sample: "),a("code",[e._v("https://github.com/ibm-watson-embedded-business-assistant/eba-example-agents/blob/master/samples/walmart.yaml")]),e._v(".")]),e._v(" "),a("p",[e._v("To generate an access token, follow these steps.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Login to your GitHub account.")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to 'Settings' using the avatar drop down in the top right corner.")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to 'Developer Settings'.")])]),e._v(" "),a("li",[a("p",[e._v("Navigate to 'Personal access tokens'.")])]),e._v(" "),a("li",[a("p",[e._v("Click 'generate new token'.")])]),e._v(" "),a("li",[a("p",[e._v("Add a description and select 'repo' as the scope for the token.")])]),e._v(" "),a("li",[a("p",[e._v("Click 'Generate token'.")])]),e._v(" "),a("li",[a("p",[e._v("Copy and safely store this token for future reference in a place of your choosing.")])]),e._v(" "),a("li",[a("p",[e._v("Paste this token into the 'Access Token' field within the development lab.")])])])])}],!1,null,null,null);t.default=n.exports}}]);