const stylesheet = `
.clearfix {
  *zoom:1}

.clearfix:before,.clearfix:after {
  display: table;
  content: ""
}

.clearfix:after {
  clear: both
}

.hide-text {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0
}

input,select,textarea {
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif;
  color: #183247
}

p {
  margin: 0 0 10.9375px
}

p small {
  font-size: 12px;
  color: #6f7c87
}

p big {
  font-size: inherit
}

.ui-widget,.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button {
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif
}

.lead,.lead-small,.list-lead {
  line-height: 28.4375px;
  font-size: 18px;
  font-weight: 200;
  color: inherit;
  font-family: Poppins,Helvetica,sans-serif
}

.lead b,.lead-small b,.list-lead b {
  font-weight: 500
}

.links-inherit a,.list-lead a {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.2px;
  font-family: Poppins,Helvetica,sans-serif;
  color: #183247
}

.links-inherit a:hover,.list-lead a:hover {
  color: #0b1721
}

.lead-small {
  font-size: 13px
}

.list-lead {
  margin: 10px 0
}

.no-results {
  color: #ccc;
  font-size: 14px
}

.heading {
  font-family: Poppins,Helvetica,sans-serif;
  font-weight: normal;
  color: #183247
}

.light {
  font-weight: 400
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  text-rendering: optimizelegibility
}

h1 small,h2 small,h3 small,h4 small,h5 small,h6 small {
  font-weight: normal;
  color: #6f7c87
}

h1 {
  font-size: 28px;
  line-height: 43.75px
}

h1 small {
  font-size: 18px
}

h2 {
  font-size: 24px;
  line-height: 26px
}

h2 small {
  font-size: 16px
}

h3 {
  font-size: 20px;
  line-height: 30.625px
}

h3 small {
  font-size: 14px
}

h4,h5,h6 {
  line-height: 21.875px
}

h4 {
  font-size: 14px
}

h4 small {
  font-size: 12px
}

h5 {
  font-size: 12px
}

h6 {
  font-size: 11px;
  color: #6f7c87;
  text-transform: uppercase
}

strong,b {
  font-weight: 400
}

.page-header {
  padding-bottom: 20.875px;
  margin: 21.875px 0;
  border-bottom: 1px solid #dcdcdc
}

.page-header h1 {
  line-height: 1
}

.intro {
  font-weight: 200;
  margin-top: -6px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  color: #6f7c87
}

ul,ol {
  padding: 0;
  margin: 5px 0 5px 22px
}

ul ul,ul ol,ol ol,ol ul {
  margin-bottom: 0
}

ul {
  list-style: disc
}

ol {
  list-style: decimal
}

li {
  line-height: 21.875px
}

ul.unstyled,ol.unstyled {
  margin-left: 0;
  list-style: none
}

ul.unstyled li,ol.unstyled li {
  padding: 10px 4px;
  border-bottom: 1px solid #DADFE3
}

ul.unstyled li a,ol.unstyled li a {
  font-size: 14px;
  line-height: 1.54;
  color: #183247;
  font-weight: 600
}

ul.unstyled li a:hover,ol.unstyled li a:hover {
  color: #2753d7
}

.profile-edit-form.unstyled li {
  border-bottom: 0;
  margin: 0
}

dl {
  margin-bottom: 21.875px
}

dt,dd {
  line-height: 21.875px
}

dt {
  font-weight: bold;
  line-height: 20.875px
}

dd {
  margin-left: 10.9375px
}

.dl-horizontal dt {
  float: left;
  width: 120px;
  clear: left;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.dl-horizontal dd {
  margin-left: 130px
}

hr {
  margin: 16.82692px 0;
  border: 0;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #fff
}

strong,.strong {
  font-weight: bold
}

em {
  font-style: italic
}

.muted {
  color: #6f7c87
}

abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #6f7c87
}

abbr.initialism {
  font-size: 90%;
  text-transform: uppercase
}

blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 21.875px;
  border-left: 5px solid #dcdcdc
}

q:before,q:after,blockquote:before,blockquote:after {
  content: ""
}

address {
  display: block;
  margin-bottom: 21.875px;
  font-style: normal;
  line-height: 21.875px
}

small {
  font-size: 100%
}

cite {
  font-style: normal
}

.match {
  background-color: #fdfdb5
}

html,body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0
}

body {
  margin: 0;
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 21.875px;
  color: #183247;
  background-color: #f3f5f7;
  background-image: none
}

a,.a-link {
  color: #183247;
  text-decoration: none
}

a:hover,.a-link:hover {
  color: #2753d7;
  text-decoration: underline
}

.a-link {
  cursor: pointer
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.page {
  *zoom:1;max-width: 1140px;
  max-width: 71.25rem;
  _width: 1140px;
  padding-left: 10px;
  padding-left: .625rem;
  padding-right: 10px;
  padding-right: .625rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 78%
}

.page:after {
  content: "";
  display: table;
  clear: both
}

.main {
  width: 66%;
  margin: 0;
  border: 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 6px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  float: left;
  border-right: 1px solid #dadfe3;
  background-color: #fff
}

.sidebar {
  width: 34%;
  float: left;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: #f8f9fa;
  margin: 0
}

.fc-portal-solution-home h2,.fc-community-sidebar h2,.fc-solution-home h2,.fc-community-content h2 {
  margin-top: 16px
}

.fc-article-show p {
  padding-top: 4px;
  color: #183247
}

.fc-community-sidebar p.intro,.fc-community-sidebar div a[href*="topics/new"] {
  display: none
}

.fc-community-sidebar .no-results a[href*="topics/new"] {
  display: inline-block;
  color: #2753d7
}

.export-custom-select {
  width: 100%
}

.row-fluid {
  *zoom:1}

.row-fluid:after {
  content: "";
  display: table;
  clear: both
}

.span1 {
  width: 7.22892%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span2 {
  width: 15.66265%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span3 {
  width: 24.09639%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span4 {
  width: 32.53012%;
  float: left;
  margin-right: 1.20482%;
  display: inline;
  margin-bottom: 6px
}

.span5 {
  width: 40.96386%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span6 {
  width: 49.39759%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span7 {
  width: 57.83133%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span8 {
  width: 66.26506%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span9 {
  width: 74.6988%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span10 {
  width: 83.13253%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span11 {
  width: 91.56627%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.span12 {
  width: 100%;
  float: left;
  margin-right: 1.20482%;
  display: inline
}

.omega {
  float: right;
  margin-right: 0;
  *margin-left: -10px;
  display: inline;
  float: left;
  margin-right: 0;
  display: inline
}

form {
  margin: 0 0
}

fieldset {
  padding: 0;
  margin: 0;
  border: 0
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 32.8125px;
  font-size: 21px;
  line-height: 43.75px;
  color: #9aa1a6;
  border: 0;
  border-bottom: 1px solid #e5e5e5
}

legend small {
  font-size: 16.40625px;
  color: #6f7c87
}

label,input,button,select,textarea {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.2
}

input,button,select,textarea {
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif
}

label {
  display: block;
  margin-bottom: 5px
}

select,textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input {
  display: inline-block;
  padding: 4px;
  margin-bottom: 9px;
  font-size: 14px;
  line-height: 21.875px;
  color: #f8f9fa
}

select {
  font-size: 12.6px
}

textarea,input[type="text"],input[type="password"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="month"],input[type="time"],input[type="week"],input[type="number"],input[type="email"],input[type="url"],input[type="search"],input[type="tel"],input[type="color"],.uneditable-input {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.18);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.18);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.18);
  -moz-transition: border linear 0.2s,box-shadow linear 0.2s;
  -o-transition: border linear 0.2s,box-shadow linear 0.2s;
  -webkit-transition: border linear 0.2s,box-shadow linear 0.2s;
  transition: border linear 0.2s,box-shadow linear 0.2s;
  height: 40px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #183247
}

textarea:focus,input[type="text"]:focus,input[type="password"]:focus,input[type="datetime"]:focus,input[type="datetime-local"]:focus,input[type="date"]:focus,input[type="month"]:focus,input[type="time"]:focus,input[type="week"]:focus,input[type="number"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="search"]:focus,input[type="tel"]:focus,input[type="color"]:focus,.uneditable-input:focus {
  border-color: rgba(2,184,117,0.6);
  outline: 0;
  outline: thin dotted;
  -moz-box-shadow: 0px 0px 5px rgba(2,184,117,0.6);
  -webkit-box-shadow: 0px 0px 5px rgba(2,184,117,0.6);
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.checkbox.nested-child {
  padding-left: 40px
}

textarea {
  height: auto
}

input[type="radio"],input[type="checkbox"] {
  margin: 1px 0;
  *margin-top: 0;
  line-height: normal;
  cursor: pointer
}

input[type="checkbox"]:before {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  top: -2px;
  left: 0px;
  position: relative;
  background-color: #fff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #d3dbda
}

input[type="checkbox"]:checked:before {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  top: -2px;
  left: 0px;
  position: relative;
  background-color: #02b875;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #02b875
}

input[type="radio"]:checked:before {
  width: 13px;
  height: 13px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #fff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #02b875
}

input[type="radio"]:before {
  width: 13px;
  height: 13px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #fff;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #DADFE3
}

input[type="radio"]:checked:after {
  width: 3px;
  height: 3px;
  border-radius: 15px;
  top: -22px;
  right: -3px;
  position: relative;
  background-color: #02b875;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid #02b875
}

input[type="radio"]:after {
  content: '';
  display: inline-block;
  width: 7px;
  height: 3px
}

input[type="submit"],input[type="reset"],input[type="button"],input[type="radio"],input[type="checkbox"] {
  width: auto
}

input[type="submit"],input[type="reset"],input[type="button"],a.btn.btn-primary,button.btn-primary,.banner-nav a[href*="/login"],.redactor_btns_box .btn.btn-primary {
  width: auto;
  font-family: Poppins,Helvetica,sans-serif;
  border-radius: 2px;
  background-color: #02b875;
  border: solid 1px #015335;
  background-image: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-shadow: none;
  text-transform: uppercase;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 5px 20px;
  color: #fff
}

input[type="submit"]:hover,input[type="reset"]:hover,input[type="button"]:hover,a.btn.btn-primary:hover,button.btn-primary:hover,.banner-nav a[href*="/login"]:hover,.redactor_btns_box .btn.btn-primary:hover {
  background-color: #02d185;
  text-decoration: none;
  color: #fff
}

.banner-nav a[href*="/login"] {
  font-size: 14px
}

.btn-signup {
  border: solid 1px #DADFE3;
  background-color: #f3f5f7;
  padding: 5px 20px;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: Poppins,Helvetica,sans-serif;
  letter-spacing: 1.2;
  color: #183247
}

.btn-signup:hover {
  background-color: #e4e8ed;
  text-decoration: none
}

.btn-small {
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #97a9ba;
  background-image: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: Poppins,Helvetica,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #183247;
  padding: 5px 20px;
  text-transform: uppercase
}

.btn-small:hover {
  background-color: #e4e8ed
}

.uneditable-textarea {
  width: auto;
  height: auto
}

input[type="file"] {
  line-height: 0
}

select {
  height: 28px;
  *margin-top: 4px;
  line-height: 28px
}

.custom-select:focus {
  outline: 0;
  border-color: rgba(2,184,117,0.6);
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.input-date-field .ui-datepicker-trigger,.support-date-field .ui-datepicker-trigger {
  top: 7px
}

select {
  width: 220px;
  border: 1px solid #DADFE3;
  height: 40px;
  color: #183247;
  background-color: #fff
}

select[multiple],select[size] {
  height: auto
}

select:focus,input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
  outline: 0;
  border-color: rgba(2,184,117,0.6);
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.radio,.checkbox {
  min-height: 18px;
  padding-left: 20px
}

.radio input[type="radio"],.checkbox input[type="checkbox"] {
  float: left;
  margin-left: -18px;
  margin-top: 3px
}

.radio input[type="radio"]:focus:before,.checkbox input[type="checkbox"]:focus:before {
  border-color: rgba(2,184,117,0.6);
  -moz-box-shadow: 0px 0px 5px #02B875;
  -webkit-box-shadow: 0px 0px 5px #02B875;
  box-shadow: 0px 0px 5px #02B875
}

.controls>.radio:first-child,.controls>.checkbox:first-child {
  padding-top: 5px
}

.radio.inline,.checkbox.inline {
  display: inline-block;
  padding-top: 5px;
  margin-bottom: 0;
  vertical-align: middle
}

.radio.inline+.radio.inline,.checkbox.inline+.checkbox.inline {
  margin-left: 10px
}

.input-mini {
  width: 60px
}

.input-small {
  width: 90px
}

.input-medium {
  width: 150px
}

.input-large {
  width: 210px
}

.input-xlarge {
  width: 270px
}

.input-xxlarge {
  width: 530px
}

input[class*="span"],select[class*="span"],textarea[class*="span"],.uneditable-input[class*="span"],.row-fluid input[class*="span"],.row-fluid select[class*="span"],.row-fluid textarea[class*="span"],.row-fluid .uneditable-input[class*="span"],.add-on[class*="span"] {
  float: none;
  margin-left: 0
}

.input-append input[class*="span"],.input-append .uneditable-input[class*="span"],.input-prepend input[class*="span"],.input-prepend .uneditable-input[class*="span"],.row-fluid .input-prepend [class*="span"],.row-fluid .input-append [class*="span"],.add-on[class*="span"] {
  display: inline-block
}

input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly] {
  cursor: not-allowed;
  background-color: #dcdcdc;
  border-color: #ddd
}

input[type="radio"][disabled],input[type="checkbox"][disabled],input[type="radio"][readonly],input[type="checkbox"][readonly] {
  background-color: transparent
}

div.error {
  padding: 5px 0 0
}

.control-group.warning-group>label,.control-group.warning-group .help-block,.control-group.warning-group .help-inline,.control-group.warning-group .error {
  color: #c09853
}

.control-group.warning-group .checkbox,.control-group.warning-group .radio,.control-group.warning-group input,.control-group.warning-group select,.control-group.warning-group textarea {
  color: #c09853;
  border-color: #c09853
}

.control-group.warning-group .checkbox:focus,.control-group.warning-group .radio:focus,.control-group.warning-group input:focus,.control-group.warning-group select:focus,.control-group.warning-group textarea:focus {
  border-color: #a47e3c;
  -moz-box-shadow: 0 0 6px #dbc59e;
  -webkit-box-shadow: 0 0 6px #dbc59e;
  box-shadow: 0 0 6px #dbc59e
}

.control-group.warning-group .input-prepend .add-on,.control-group.warning-group .input-append .add-on {
  color: #c09853;
  background-color: #fcf8e3;
  border-color: #c09853
}

.control-group.error-group>label,.control-group.error-group .help-block,.control-group.error-group .help-inline,.control-group.error-group .error {
  color: #b94a48
}

.control-group.error-group .checkbox,.control-group.error-group .radio,.control-group.error-group input,.control-group.error-group select,.control-group.error-group textarea {
  color: #b94a48;
  border-color: #b94a48
}

.control-group.error-group .checkbox:focus,.control-group.error-group .radio:focus,.control-group.error-group input:focus,.control-group.error-group select:focus,.control-group.error-group textarea:focus {
  border-color: #953b39;
  -moz-box-shadow: 0 0 6px #d59392;
  -webkit-box-shadow: 0 0 6px #d59392;
  box-shadow: 0 0 6px #d59392
}

.control-group.error-group .input-prepend .add-on,.control-group.error-group .input-append .add-on {
  color: #b94a48;
  background-color: #f2dede;
  border-color: #b94a48
}

.control-group.success-group>label,.control-group.success-group .help-block,.control-group.success-group .help-inline,.control-group.success-group .error {
  color: #468847
}

.control-group.success-group .checkbox,.control-group.success-group .radio,.control-group.success-group input,.control-group.success-group select,.control-group.success-group textarea {
  color: #468847;
  border-color: #468847
}

.control-group.success-group .checkbox:focus,.control-group.success-group .radio:focus,.control-group.success-group input:focus,.control-group.success-group select:focus,.control-group.success-group textarea:focus {
  border-color: #356635;
  -moz-box-shadow: 0 0 6px #7aba7b;
  -webkit-box-shadow: 0 0 6px #7aba7b;
  box-shadow: 0 0 6px #7aba7b
}

.control-group.success-group .input-prepend .add-on,.control-group.success-group .input-append .add-on {
  color: #468847;
  background-color: #dff0d8;
  border-color: #468847
}

input:focus:required:invalid,textarea:focus:required:invalid,select:focus:required:invalid {
  color: #b94a48;
  border-color: #ee5f5b
}

input:focus:required:invalid:focus,textarea:focus:required:invalid:focus,select:focus:required:invalid:focus {
  border-color: #e9322d;
  -moz-box-shadow: 0 0 6px #f8b9b7;
  -webkit-box-shadow: 0 0 6px #f8b9b7;
  box-shadow: 0 0 6px #f8b9b7
}

.form-actions {
  margin-top: 10.9375px;
  padding-top: 10.9375px;
  margin-bottom: 21.875px;
  border-top: 1px solid #e5e5e5;
  *zoom:1}

.form-actions:before,.form-actions:after {
  display: table;
  content: ""
}

.form-actions:after {
  clear: both
}

.uneditable-input {
  overflow: hidden;
  white-space: nowrap;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #eee;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.025);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.025);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.025)
}

.placeholder {
  color: #b2b2b2
}

input:-moz-placeholder {
  color: #b2b2b2
}

input:-ms-input-placeholder {
  color: #b2b2b2
}

input::-webkit-input-placeholder {
  color: #b2b2b2
}

[type="search"] {
  -webkit-appearance: textfield
}

.help-block,.help-inline {
  color: #f8f9fa
}

.help-block {
  display: block;
  margin-bottom: 10.9375px
}

.help-inline {
  display: inline-block;
  *display: inline;
  *zoom:1;vertical-align: middle;
  padding-left: 5px
}

.input-prepend,.input-append {
  margin-bottom: 5px
}

.input-prepend input,.input-prepend select,.input-prepend .uneditable-input,.input-append input,.input-append select,.input-append .uneditable-input {
  position: relative;
  margin-bottom: 0;
  *margin-left: 0;
  margin-right: 0;
  vertical-align: middle;
  border-radius: 0 3px 3px 0
}

.input-prepend input:focus,.input-prepend select:focus,.input-prepend .uneditable-input:focus,.input-append input:focus,.input-append select:focus,.input-append .uneditable-input:focus {
  z-index: 2
}

.input-prepend .uneditable-input,.input-append .uneditable-input {
  border-left-color: #ccc
}

.input-prepend .add-on,.input-append .add-on {
  display: inline-block;
  min-width: 16px;
  padding: 4px 5px;
  font-weight: normal;
  line-height: 21.875px;
  text-align: center;
  text-shadow: 0 1px 0 #fff;
  vertical-align: middle;
  border: 1px solid #ccc
}

.input-prepend .add-on,.input-prepend .btn,.input-append .add-on,.input-append .btn {
  border-radius: 0
}

.input-prepend .active,.input-append .active {
  background-color: #56fdc0;
  border-color: #02b875
}

.input-prepend .add-on,.input-prepend .btn {
  margin-right: -4px
}

.input-prepend input,.input-prepend .uneditable-input {
  border-left-width: 0
}

.input-prepend .add-on:first-child,.input-prepend .btn:first-child {
  border-right-width: 0;
  border-radius: 3px 0 0 3px
}

.input-append input,.input-append select,.input-append .uneditable-input {
  border-radius: 3px 0 0 3px
}

.input-append input,.input-append .uneditable-input {
  border-right-width: 0
}

.input-append .uneditable-input {
  border-right-color: #ccc;
  border-left-color: #eee
}

.input-append .add-on:last-child,.input-append .btn:last-child {
  border-left-width: 0;
  margin-left: -4px;
  border-radius: 0 3px 3px 0
}

.input-prepend.input-append input,.input-prepend.input-append select,.input-prepend.input-append .uneditable-input {
  border-radius: 0
}

.input-prepend.input-append .add-on:first-child,.input-prepend.input-append .btn:first-child {
  margin-right: -1px;
  border-radius: 3px 0 0 3px
}

.input-prepend.input-append .add-on:last-child,.input-prepend.input-append .btn:last-child {
  margin-left: -1px;
  border-radius: 0 3px 3px 0
}

.search-query {
  padding-right: 14px;
  padding: 4px;
  padding-left: 14px;
  padding-left: 4px;
  margin-bottom: 0;
  border-radius: 14px
}

.form-search input,.form-search textarea,.form-search select,.form-search .help-inline,.form-search .uneditable-input,.form-search .input-prepend,.form-search .input-append,.form-inline input,.form-inline textarea,.form-inline select,.form-inline .help-inline,.form-inline .uneditable-input,.form-inline .input-prepend,.form-inline .input-append,.form-portal input,.form-portal textarea,.form-portal select,.form-portal .help-inline,.form-portal .uneditable-input,.form-portal .input-prepend,.form-portal .input-append {
  display: inline-block;
  *display: inline;
  *zoom:1}

.form-search .hide,.form-inline .hide,.form-portal .hide {
  display: none
}

.form-portal {
  margin-top: 10px
}

.form-search label,.form-inline label {
  display: inline-block
}

.form-search .input-append,.form-inline .input-append,.form-search .input-prepend,.form-inline .input-prepend {
  margin-bottom: 0
}

.form-search .radio,.form-search .checkbox,.form-inline .radio,.form-inline .checkbox {
  padding-left: 0;
  margin-bottom: 0;
  vertical-align: middle
}

.form-search .radio input[type="radio"],.form-search .checkbox input[type="checkbox"],.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"] {
  float: left;
  margin-right: 3px;
  margin-left: 0
}

.control-group {
  margin-bottom: 16px
}

legend+.control-group {
  margin-top: 21.875px;
  -webkit-margin-top-collapse: separate
}

input.special {
  border-radius: 6px;
  border-color: #8c8c8c;
  font-size: 16px;
  margin-bottom: 0;
  margin-right: 0;
  padding: 6px 10px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none
}

label.required:after {
  content: "*";
  color: #d00;
  font-size: 16.8px;
  font-weight: bold;
  position: relative;
  top: 4px;
  margin-left: 5px
}

.ticket-form .nested_field .level_2,.ticket-form .nested_field .level_3,.ticket-form .control-tabbed-border,.form-portal .nested_field .level_2,.form-portal .nested_field .level_3,.form-portal .control-tabbed-border,.edit_helpdesk_ticket .nested_field .level_2,.edit_helpdesk_ticket .nested_field .level_3,.edit_helpdesk_ticket .control-tabbed-border {
  display: none;
  border-left: 1px dotted #333;
  padding-left: 15px;
  padding-top: 15px
}

.company_container {
  border-left: 1px dotted #333;
  margin-bottom: 5px
}

.company_label {
  padding: 0px 0px 21px 18px;
  margin-top: 17px
}

.company_div {
  padding-top: 20px
}

.cc-emails {
  *zoom:1;margin-top: 6px
}

.cc-emails:before,.cc-emails:after {
  display: table;
  content: ""
}

.cc-emails:after {
  clear: both
}

.cc-emails .cc-label,.cc-emails input[type=text] {
  float: left
}

.cc-emails .cc-label {
  width: 10%;
  border: 1px solid #ccc;
  border-right: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #f8f8f8;
  height: 30.875px;
  min-width: 16px;
  padding: 4px 5px;
  font-weight: normal;
  line-height: 21.875px;
  text-align: center;
  text-shadow: 0 1px 0 #fff;
  vertical-align: middle
}

.cc-emails input[type=text] {
  width: 90%;
  border-radius: 0 3px 3px 0;
  border-left-width: 0
}

.cc-emails .select2-container {
  width: 90%
}

.cc-emails .select2-container .select2-choices {
  border-left-color: #efefef;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.cc-emails .select2-input {
  height: 26px
}

.cc-emails .select2-search-field input {
  height: 26px
}

.cc-emails .select2-search-choice-close::after {
  top: -2px
}

.attachments-form {
  margin-top: 5px;
  *zoom:1}

.attachments-form:before,.attachments-form:after {
  display: table;
  content: ""
}

.attachments-form:after {
  clear: both
}

.ticket-sidebar select,.ticket-sidebar textarea,.ticket-sidebar input[type="text"],.ticket-sidebar input[type="password"],.ticket-sidebar input[type="datetime"],.ticket-sidebar input[type="datetime-local"],.ticket-sidebar input[type="date"],.ticket-sidebar input[type="month"],.ticket-sidebar input[type="time"],.ticket-sidebar input[type="week"],.ticket-sidebar input[type="number"],.ticket-sidebar input[type="email"],.ticket-sidebar input[type="url"],.ticket-sidebar input[type="search"],.ticket-sidebar input[type="tel"],.ticket-sidebar input[type="color"],.ticket-sidebar .uneditable-input {
  width: 100%
}

#errorExplanation h2,#errorExplanation p,.errorExplanation h2,.errorExplanation p {
  display: none
}

#errorExplanation ul,.errorExplanation ul {
  margin-bottom: 0
}

.select2-container .select2-choice {
  height: 40px
}

.select2-container .select2-choice .select2-chosen {
  padding: 6px
}

.select2-container .select2-choice abbr:after {
  top: 7px
}

.select2-container .select2-choice .select2-arrow b:after {
  top: 18px
}

#vote-feedback-form-link {
  color: #2753d7
}

.form-portal .control-group {
  margin-bottom: 21.875px;
  *zoom:1}

.form-portal .control-group:before,.form-portal .control-group:after {
  display: table;
  content: ""
}

.form-portal .control-group:after {
  clear: both
}

.form-portal .control-label {
  float: left;
  width: 140px;
  padding-top: 4px
}

.form-portal .controls {
  *display: inline-block;
  *padding-left: 20px;
  margin-left: 160px;
  *margin-left: 0
}

.form-portal .controls:first-child {
  *padding-left: 160px
}

.form-portal .controls .disabled-field {
  padding-top: 4px
}

.form-portal .help-block {
  margin-top: 10.9375px;
  margin-bottom: 0
}

.form-portal .form-actions {
  padding-left: 160px
}

input,textarea {
  width: 210px
}

@media (max-width: 45em) {
  .form-portal .form-actions {
      padding-left:0
  }

  .form-portal .control-label {
      float: none;
      width: auto;
      padding-top: 0
  }

  .form-portal .controls {
      margin-left: 0
  }

  input,textarea {
      width: 100%;
      max-width: 100%
  }

  input.span1,textarea.span1 {
      width: 100%
  }

  input.span2,textarea.span2 {
      width: 100%
  }

  input.span3,textarea.span3 {
      width: 100%
  }

  input.span4,textarea.span4 {
      width: 100%
  }

  input.span5,textarea.span5 {
      width: 100%
  }

  input.span6,textarea.span6 {
      width: 100%
  }

  input.span7,textarea.span7 {
      width: 100%
  }

  input.span8,textarea.span8 {
      width: 100%
  }

  input.span9,textarea.span9 {
      width: 100%
  }

  input.span10,textarea.span10 {
      width: 100%
  }

  input.span11,textarea.span11 {
      width: 100%
  }

  input.span12,textarea.span12 {
      width: 100%
  }

  textarea {
      height: auto
  }
}

.controls .dateClear {
  top: 2px;
  position: absolute;
  right: 9px;
  padding: 5px;
  cursor: pointer
}

.controls .dateClear .ficon-cross:before {
  font-size: 1.2em;
  color: #999999
}

.company_form_date+.dateClear {
  right: 25px
}

.support-date-field input.date {
  width: 100%
}

.support-date-field .dateClear {
  top: 3px;
  position: absolute;
  right: 9px;
  padding: 5px;
  cursor: pointer
}

.support-date-field .dateClear .ficon-cross:before {
  font-size: 1.2em;
  color: #999999
}

.btn {
  display: inline-block;
  *display: inline;
  *zoom:1;padding: 5px 15px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 18px;
  *line-height: 18px;
  color: #183247;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255,255,255,0.75);
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: #f3f5f7;
  border: 1px solid #97a9ba;
  *border: 0;
  border-bottom-color: #a7b5c4;
  border-radius: 6px;
  *margin-left: .3em;
  -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05)
}

.btn:first-child {
  *margin-left: 0
}

.btn:hover {
  color: #183247;
  text-decoration: none;
  background-color: #e4e8ed;
  -moz-transition: background-position .1s linear;
  -o-transition: background-position .1s linear;
  -webkit-transition: background-position .1s linear;
  transition: background-position .1s linear
}

.btn:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px
}

.btn.active,.btn:active {
  background-color: #f3f5f7;
  background-image: none;
  outline: 0;
  color: #183247
}

.btn.disabled,.btn[disabled] {
  cursor: default;
  background-color: #e6e6e6;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=65);
  opacity: .65;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none
}

.btn {
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #97a9ba;
  background-image: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: Poppins,Helvetica,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #183247;
  padding: 5px 20px;
  text-transform: uppercase
}

.btn:hover {
  background-color: #e4e8ed
}

.redactor_btns_box .btn {
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #c5cfd8;
  background-image: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: Poppins,Helvetica,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #183247;
  padding: 5px 20px;
  text-transform: uppercase;
  margin-left: 10px
}

.redactor_btns_box .btn:hover {
  background-color: #e4e8ed
}

.btn-large {
  padding: 9px 14px;
  font-size: 16px;
  line-height: normal;
  border-radius: 5px
}

.btn-large [class^="icon-"] {
  margin-top: 1px
}

.btn-small {
  padding: 3px 16px;
  font-size: 12px;
  line-height: 20.875px;
  border-radius: 4px
}

.btn-small [class^="icon-"] {
  margin-top: -1px
}

.list-lead .btn-small {
  border-radius: 2px;
  background-color: #fff;
  border: solid 1px #DADFE3;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-image: none;
  font-family: Poppins,Helvetica,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #183247
}

.list-lead .btn-small:hover {
  background-color: #f3f5f7;
  color: #183247
}

.btn-mini {
  padding: 2px 6px;
  font-size: 12px;
  line-height: 19.875px
}

.btn-mini [class^="icon-"] {
  margin-right: -3px;
  margin-left: -3px
}

.btn-quoted {
  padding: 0 7px 0 8px;
  font-size: 12px;
  line-height: 0.8;
  height: 17px;
  font-weight: bold;
  letter-spacing: 0.1em;
  border-radius: 3px
}

.btn-quoted:before {
  content: "..."
}

.btn.default-pic {
  padding: 6px 6px 6px 8px
}

.dropdown-toggle.btn {
  padding: 6px
}

.btn-icon {
  padding: 3px 6px
}

#datepicker input[type="text"] {
  height: 40px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #183247
}

.btn-primary,.btn-primary:hover {
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.25)
}

.btn-primary.active {
  color: rgba(255,255,255,0.75)
}

.btn-danger,.btn-danger:hover {
  color: #9aa1a6;
  text-shadow: 0 1px 1px rgba(255,255,255,0.75)
}

.btn-danger.active {
  color: rgba(255,255,255,0.75)
}

.btn-primary {
  background-color: #02ae6f;
  background-image: -moz-linear-gradient(top, #02b875, #029f65);
  background-image: -ms-linear-gradient(top, #02b875, #029f65);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#02b875), to(#029f65));
  background-image: -webkit-linear-gradient(top, #02b875, #029f65);
  background-image: -o-linear-gradient(top, #02b875, #029f65);
  background-image: linear-gradient(to bottom, #02b875,#029f65);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#02b372', endColorstr='#029a62', GradientType=0);
  border-color: #029f65 #029f65 #015335;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
  *background-color: #029f65;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)
}

.btn-primary:hover,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled] {
  background-color: #029f65;
  *background-color: #018655
}

.btn-primary:active,.btn-primary.active {
  background-color: #016c45
}

.btn-danger {
  background-color: #c54130;
  background-image: -moz-linear-gradient(top, #d34836, #b03626);
  background-image: -ms-linear-gradient(top, #d34836, #b03626);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#d34836), to(#b03626));
  background-image: -webkit-linear-gradient(top, #d34836, #b03626);
  background-image: -o-linear-gradient(top, #d34836, #b03626);
  background-image: linear-gradient(to bottom, #d34836,#b03626);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#d24432', endColorstr='#ab3526', GradientType=0);
  border-color: #b03626 #b03626 #712319;
  border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
  *background-color: #b03626;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)
}

.btn-danger:hover,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled] {
  background-color: #b03626;
  *background-color: #9b3022
}

.btn-danger:active,.btn-danger.active {
  background-color: #86291d
}

button.btn,input[type="submit"].btn {
  *padding-top: 2px;
  *padding-bottom: 2px
}

button.btn::-moz-focus-inner,input[type="submit"].btn::-moz-focus-inner {
  padding: 0;
  border: 0
}

button.btn.btn-large,input[type="submit"].btn.btn-large {
  *padding-top: 7px;
  *padding-bottom: 7px
}

button.btn.btn-small,input[type="submit"].btn.btn-small {
  *padding-top: 3px;
  *padding-bottom: 3px;
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #97a9ba;
  background-image: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: Poppins,Helvetica,sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #183247;
  padding: 5px 20px;
  text-transform: uppercase
}

button.btn.btn-small:hover,input[type="submit"].btn.btn-small:hover {
  background-color: #e4e8ed
}

button.btn.btn-primary,input[type="submit"].btn.btn-primary {
  width: auto;
  font-family: Poppins,Helvetica,sans-serif;
  border-radius: 2px;
  background-color: #02b875;
  border: solid 1px #015335;
  background-image: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-shadow: none;
  text-transform: uppercase;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 5px 20px;
  color: #fff
}

button.btn.btn-primary:hover,input[type="submit"].btn.btn-primary:hover {
  background-color: #02d185;
  text-decoration: none
}

button.btn.btn-mini,input[type="submit"].btn.btn-mini {
  *padding-top: 1px;
  *padding-bottom: 1px
}

button.btn.btn-primary.pull-right {
  margin: 0
}

.btn-google {
  background-color: #d34836;
  color: #fff;
  text-shadow: none
}

.btn-facebook {
  background-color: #3b5998;
  color: #fff;
  text-shadow: none
}

.btn-twitter {
  background-color: #24a9e6;
  color: #fff;
  text-shadow: none
}

.btn-group {
  position: relative;
  *zoom:1;*margin-left: .3em
}

.btn-group:before,.btn-group:after {
  display: table;
  content: ""
}

.btn-group:after {
  clear: both
}

.btn-group:first-child {
  *margin-left: 0
}

.btn-group+.btn-group {
  margin-left: 5px
}

.btn-toolbar {
  margin-top: 10.9375px;
  margin-bottom: 10.9375px
}

.btn-toolbar .btn-group {
  display: inline-block;
  *display: inline;
  *zoom:1}

.btn-group>.btn {
  position: relative;
  float: left;
  margin-left: -1px;
  border-radius: 0
}

.btn-group>.btn:first-child {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px
}

.btn-group>.btn:last-child,.btn-group>.dropdown-toggle {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px
}

.btn-group>.btn.large:first-child {
  margin-left: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px
}

.btn-group>.btn.large:last-child,.btn-group>.large.dropdown-toggle {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px
}

.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active {
  z-index: 2
}

.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle {
  outline: 0
}

.btn-group>.dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
  -moz-box-shadow: inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  -webkit-box-shadow: inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  box-shadow: inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
  *padding-top: 4px;
  *padding-bottom: 4px
}

.btn-group>.btn-mini.dropdown-toggle {
  padding-left: 5px;
  padding-right: 5px
}

.btn-group>.btn-small.dropdown-toggle {
  *padding-top: 4px;
  *padding-bottom: 4px
}

.btn-group>.btn-large.dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px
}

.btn-group.open .dropdown-toggle {
  background-image: none;
  -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
  -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)
}

.btn-group.open .btn.dropdown-toggle {
  background-color: #e4e8ed
}

.btn-group.open .btn-primary.dropdown-toggle {
  background-color: #029f65
}

.btn .caret {
  margin-top: 7px;
  margin-left: 0;
  color: #183247
}

.btn:hover .caret,.open.btn-group .caret {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=10000);
  opacity: 100
}

.btn-mini .caret {
  margin-top: 5px
}

.btn-small .caret {
  margin-top: 6px
}

.btn-large .caret {
  margin-top: 6px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 5px
}

.dropup .btn-large .caret {
  border-bottom: 5px solid #183247;
  border-top: 0
}

.dynamic-icon-sprite,.dynamic-icon-article-dark,.dynamic-icon-article,.dynamic-icon-cog-dark,.dynamic-icon-cog-drop-dark,.dynamic-icon-cog-drop-light,.dynamic-icon-cog-light,.dynamic-icon-dd-tick-dark,.dynamic-icon-dd-tick-light,.dynamic-icon-nav-contact-dark,.dynamic-icon-nav-contact,.dynamic-icon-nav-menu-dark,.dynamic-icon-nav-menu,.dynamic-icon-nav-newticket-dark,.dynamic-icon-nav-newticket,.dynamic-icon-nav-status-dark,.dynamic-icon-nav-status,.dynamic-icon-search-dark,.dynamic-icon-search,.page-tabs .mobile-icon-nav-menu:before,.mobile-icon-search:before,.mobile-icon-nav-contact:before,.mobile-icon-nav-newticket:before,.mobile-icon-nav-status:before {
  background-image: url(https://assets5.freshdesk.com/assets/cdn-ignored/sprites/portal/dynamic-icon-s85b95186ce.png);
  background-repeat: no-repeat
}

.dynamic-icon-article-dark {
  background-position: 0 0;
  height: 26px;
  width: 29px
}

.dynamic-icon-article {
  background-position: 0 -26px;
  height: 27px;
  width: 29px
}

.dynamic-icon-cog-dark {
  background-position: 0 -53px;
  height: 15px;
  width: 15px
}

.dynamic-icon-cog-drop-dark {
  background-position: 0 -68px;
  height: 15px;
  width: 22px
}

.dynamic-icon-cog-drop-light {
  background-position: 0 -83px;
  height: 15px;
  width: 22px
}

.dynamic-icon-cog-light {
  background-position: 0 -98px;
  height: 15px;
  width: 15px
}

.dynamic-icon-dd-tick-dark {
  background-position: 0 -113px;
  height: 20px;
  width: 20px
}

.dynamic-icon-dd-tick-light {
  background-position: 0 -133px;
  height: 20px;
  width: 20px
}

.dynamic-icon-nav-contact-dark {
  background-position: 0 -153px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-contact {
  background-position: 0 -175px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-menu-dark {
  background-position: 0 -197px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-menu {
  background-position: 0 -219px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-newticket-dark {
  background-position: 0 -241px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-newticket {
  background-position: 0 -263px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-status-dark {
  background-position: 0 -285px;
  height: 22px;
  width: 22px
}

.dynamic-icon-nav-status {
  background-position: 0 -307px;
  height: 22px;
  width: 22px
}

.dynamic-icon-search-dark {
  background-position: 0 -329px;
  height: 20px;
  width: 20px
}

.dynamic-icon-search {
  background-position: 0 -349px;
  height: 20px;
  width: 20px
}

.nav {
  margin-left: 0;
  margin-bottom: 21.875px;
  list-style: none
}

.nav>li>a {
  display: block
}

.nav>li>a:hover {
  text-decoration: none;
  background-color: #f3f3f3
}

.nav>.pull-right {
  float: right
}

.nav .nav-header {
  display: block;
  padding: 3px 15px;
  font-size: 11px;
  font-weight: bold;
  line-height: 21.875px;
  color: #6f7c87;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
  text-transform: uppercase
}

.nav li+.nav-header {
  margin-top: 9px
}

.nav-list {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 0
}

.nav-list>li>a,.nav-list .nav-header {
  margin-left: -15px;
  margin-right: -15px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5)
}

.nav-list>li>a {
  padding: 3px 15px
}

.nav-list>.active>a,.nav-list>.active>a:hover {
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.2);
  background-color: #183247
}

.nav-list [class^="icon-"] {
  margin-right: 2px
}

.nav-list .divider {
  *width: 100%;
  height: 1px;
  margin: 9.9375px 1px;
  *margin: -5px 0 5px;
  overflow: hidden;
  background-color: #e5e5e5;
  border-bottom: 1px solid #fff
}

.nav-tabs,.nav-pills {
  *zoom:1}

.nav-tabs:before,.nav-tabs:after,.nav-pills:before,.nav-pills:after {
  display: table;
  content: ""
}

.nav-tabs:after,.nav-pills:after {
  clear: both
}

.nav-tabs>li,.nav-pills>li {
  float: left
}

.nav-tabs>li>a,.nav-pills>li>a {
  padding-right: 12px;
  padding-left: 12px;
  margin-right: 2px;
  line-height: 14px
}

.nav-tabs {
  border-bottom: 1px solid #ddd
}

.nav-tabs>li {
  margin-bottom: -1px
}

.nav-tabs>li>a {
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 21.875px;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0
}

.nav-tabs>li>a:hover {
  border-color: #dcdcdc #dcdcdc #ddd
}

.nav-tabs>.active>a,.nav-tabs>.active>a:hover {
  color: #f8f9fa;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default
}

.nav-pills>li>a {
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 5px;
  padding: 6px 12px;
  margin-left: 10px;
  border: solid 1px #fff
}

.nav-pills>li>a:hover {
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #ebeef0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #183247
}

.nav-pills>.active>a,.nav-pills>.active>a:hover {
  border-radius: 2px;
  background-color: #f3f5f7;
  border: solid 1px #ebeef0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #183247
}

.nav-stacked>li {
  float: none
}

.nav-stacked>li>a {
  margin-right: 0
}

.nav-tabs.nav-stacked {
  border-bottom: 0
}

.nav-tabs.nav-stacked>li>a {
  border: 1px solid #ddd;
  border-radius: 0
}

.nav-tabs.nav-stacked>li:first-child>a {
  border-radius: 4px 4px 0 0
}

.nav-tabs.nav-stacked>li:last-child>a {
  border-radius: 0 0 4px 4px
}

.nav-tabs.nav-stacked>li>a:hover {
  border-color: #ddd;
  z-index: 2
}

.nav-pills.nav-stacked>li>a {
  margin-bottom: 3px
}

.nav-pills.nav-stacked>li:last-child>a {
  margin-bottom: 1px
}

.nav-tabs .dropdown-menu {
  border-radius: 0 0 5px 5px
}

.nav-pills .dropdown-menu {
  border-radius: 4px
}

.nav-tabs .dropdown-toggle .caret,.nav-pills .dropdown-toggle .caret {
  border-top-color: #183247;
  border-bottom-color: #183247;
  margin-top: 6px
}

.nav-tabs .dropdown-toggle:hover .caret,.nav-pills .dropdown-toggle:hover .caret {
  border-top-color: #2753d7;
  border-bottom-color: #2753d7
}

.nav-tabs .active .dropdown-toggle .caret,.nav-pills .active .dropdown-toggle .caret {
  border-top-color: #9aa1a6;
  border-bottom-color: #9aa1a6
}

.nav>.dropdown.active>a:hover {
  color: #183247;
  cursor: pointer
}

.nav-tabs .open .dropdown-toggle,.nav-pills .open .dropdown-toggle,.nav>li.dropdown.open.active>a:hover {
  color: #fff;
  background-color: #6f7c87;
  border-color: #6f7c87
}

.nav li.dropdown.open .caret,.nav li.dropdown.open.active .caret,.nav li.dropdown.open a:hover .caret {
  border-top-color: #fff;
  border-bottom-color: #fff;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=10000);
  opacity: 100
}

.tabs-stacked .open>a:hover {
  border-color: #6f7c87
}

.tabbable {
  *zoom:1}

.tabbable:before,.tabbable:after {
  display: table;
  content: ""
}

.tabbable:after {
  clear: both
}

.tab-content {
  overflow: auto
}

.tabs-below>.nav-tabs,.tabs-right>.nav-tabs,.tabs-left>.nav-tabs {
  border-bottom: 0
}

.tab-content>.tab-pane,.pill-content>.pill-pane {
  display: none
}

.tab-content>.active,.pill-content>.active {
  display: block
}

.tabs-below>.nav-tabs {
  border-top: 1px solid #ddd
}

.tabs-below>.nav-tabs>li {
  margin-top: -1px;
  margin-bottom: 0
}

.tabs-below>.nav-tabs>li>a {
  border-radius: 0 0 4px 4px
}

.tabs-below>.nav-tabs>li>a:hover {
  border-bottom-color: transparent;
  border-top-color: #ddd
}

.tabs-below>.nav-tabs>.active>a,.tabs-below>.nav-tabs>.active>a:hover {
  border-color: transparent #ddd #ddd #ddd
}

.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li {
  float: none
}

.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a {
  min-width: 74px;
  margin-right: 0;
  margin-bottom: 3px
}

.tabs-left>.nav-tabs {
  float: left;
  margin-right: 19px;
  border-right: 1px solid #ddd
}

.tabs-left>.nav-tabs>li>a {
  margin-right: -1px;
  border-radius: 4px 0 0 4px
}

.tabs-left>.nav-tabs>li>a:hover {
  border-color: #dcdcdc #ddd #dcdcdc #dcdcdc
}

.tabs-left>.nav-tabs .active>a,.tabs-left>.nav-tabs .active>a:hover {
  border-color: #ddd transparent #ddd #ddd;
  *border-right-color: #fff
}

.tabs-right>.nav-tabs {
  float: right;
  margin-left: 19px;
  border-left: 1px solid #ddd
}

.tabs-right>.nav-tabs>li>a {
  margin-left: -1px;
  border-radius: 0 4px 4px 0
}

.tabs-right>.nav-tabs>li>a:hover {
  border-color: #dcdcdc #dcdcdc #dcdcdc #ddd
}

.tabs-right>.nav-tabs .active>a,.tabs-right>.nav-tabs .active>a:hover {
  border-color: #ddd #ddd #ddd transparent;
  *border-left-color: #fff
}

.nav-filter {
  margin-bottom: 13px;
  margin-top: 10px
}

table {
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0
}

.table {
  width: 100%;
  margin-bottom: 21.875px
}

.table th,.table td {
  padding: 8px;
  line-height: 21.875px;
  vertical-align: top;
  border-top: 1px solid #eee
}

.table th.text-right,.table td.text-right {
  text-align: right
}

.table th {
  font-weight: bold
}

.table thead th {
  vertical-align: bottom
}

.table caption+thead tr:first-child th,.table caption+thead tr:first-child td,.table colgroup+thead tr:first-child th,.table colgroup+thead tr:first-child td,.table thead:first-child tr:first-child th,.table thead:first-child tr:first-child td {
  border-top: 0
}

.table tbody+tbody {
  border-top: 2px solid #eee
}

table [class*=span],.row-fluid table [class*=span] {
  display: table-cell;
  float: none;
  margin-left: 0
}

.table tbody tr.success td {
  background-color: #dff0d8
}

.table tbody tr.error td {
  background-color: #f2dede
}

.table tbody tr.warning td {
  background-color: #fcf8e3
}

.table tbody tr.info td {
  background-color: #d9edf7
}

.table-hover tbody tr.success:hover td {
  background-color: #d0e9c6
}

.table-hover tbody tr.error:hover td {
  background-color: #ebcccc
}

.table-hover tbody tr.warning:hover td {
  background-color: #faf2cc
}

.table-hover tbody tr.info:hover td {
  background-color: #c4e3f3
}

.breadcrumb {
  margin: 20px 0 10px 0
}

.breadcrumb .divider {
  padding: 0 5px;
  color: #6f7c87
}

.breadcrumb a {
  margin-right: 7px;
  font-size: 14px;
  color: #2753d7
}

.breadcrumb a:hover {
  color: #183247;
  text-decoration: inherit
}

.breadcrumb a:before,.breadcrumb span:before {
  content: "/";
  margin-right: 10px;
  color: #bbbbbb;
  font-size: 16px;
  font-weight: 200;
  position: relative;
  top: 1px
}

.breadcrumb a:before:hover {
  text-decoration: none
}

.breadcrumb a:first-child:before {
  content: none
}

.breadcrumb span {
  color: #888
}

.close {
  float: right;
  font-size: 20px;
  font-weight: bold;
  line-height: 21.875px;
  color: #183247;
  text-shadow: 0 1px 0 #fff;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=2000);
  opacity: 20
}

.close:hover {
  color: #183247;
  text-decoration: none;
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=4000);
  opacity: 40
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none
}

.alert,.errorExplanation {
  padding: 8px 35px 8px 14px;
  margin-bottom: 21.875px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
  color: #183247;
  font-weight: 600
}

.alert-heading {
  color: inherit
}

.alert-page {
  margin: 10px 0 0
}

.errorExplanation h2 {
  font-size: 1em
}

.alert .close {
  position: relative;
  top: -2px;
  right: -21px;
  line-height: 18px
}

.alert-success,.alert-notice {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #468847
}

.alert-danger,.alert-error,.errorExplanation {
  background-color: #f2dede;
  border-color: #eed3d7;
  color: #b94a48
}

.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #3a87ad
}

.errorExplanation.alert-danger-dark {
  background-color: #B56463;
  border-color: #9B4A49;
  color: #FFF
}

.errorExplanation.credentialError ul {
  list-style: none;
  text-align: center;
  text-shadow: none
}

.alert-block {
  padding-top: 14px;
  padding-bottom: 14px
}

.alert-block>p,.alert-block>ul {
  margin-bottom: 0
}

.alert-block p+p {
  margin-top: 5px
}

.alert-solid {
  text-align: center;
  margin: 0;
  border-radius: 0
}

.alert-ticket-status {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
  font-size: 15px;
  font-weight: 300
}

.alert-ticket-status a {
  color: #2753d7;
  font-weight: 400
}

.alert-assume-agent {
  padding: 8px 0px 8px 0px;
  margin-bottom: 10px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
  background-color: #FCF8E3;
  color: #82683C;
  font-size: 13px
}

.alert-assume-agent a {
  color: #2753d7
}

.alert-assume-agent .ficon-unverified {
  color: #ffb50f;
  padding: 0 5px
}

.alert-invalid {
  text-decoration: line-through;
  color: #888;
  background: transparent;
  border: 0;
  padding-left: 0
}

.alert-invalid-text {
  color: #b94a48;
  float: right
}

.alert-invalid-attach-text {
  color: #b94a48
}

.alert-with-close {
  position: relative;
  margin-top: 10px;
  margin-bottom: 0px
}

.alert-with-close a.close {
  position: absolute;
  top: 8px;
  right: 20px;
  line-height: 18px
}

.alert-with-close a.close::before {
  content: ${'\\00d7'};
  font-size: 18px;
  font-weight: bold;
  color: #888
}

.no-padding {
  padding: 0 20px 0 10px
}

.banner {
  text-align: left;
  background-color: #fff;
  padding: 10px 0;
  color: #6f7c87;
  border-bottom-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  *zoom:1;border: 1px solid #ebeef0;
  text-shadow: none
}

.banner:before,.banner:after {
  display: table;
  content: ""
}

.banner:after {
  clear: both
}

.banner a {
  color: #2753d7;
  font-size: 14px
}

.banner a:hover {
  color: #2753d7
}

.banner .banner-title {
  width: 74.6988%;
  float: left;
  margin-right: 1.20482%;
  display: inline;
  width: 60%
}

.banner .banner-nav {
  width: 24.09639%;
  float: right;
  margin-right: 0;
  *margin-left: -10px;
  display: inline;
  margin-top: 6px;
  width: 38%
}

.banner .banner-nav .welcome {
  display: block
}

.banner nav {
  text-align: right
}

.banner-title .heading {
  color: #6f7c87;
  font-size: 20px;
  font-weight: normal
}

.banner-nav {
  font-size: 14px;
  line-height: 1.3em;
  color: #fff
}

.banner-nav .welcome {
  display: inline-block;
  color: #6f7c87;
  font-size: 14px;
  margin-top: -20px;
  padding-bottom: 10px
}

.banner-nav a {
  color: #2753d7
}

.banner-nav a:hover {
  color: #2753d7;
  text-decoration: underline
}

.banner-nav a:after {
  content: '|';
  padding: 0 0 0 12px;
  color: #DADFE3;
  display: inline-block
}

.banner-nav b:last-child a:last-child:after {
  content: ''
}

.banner-nav a[href*="/login"]:after {
  content: '';
  padding-left: 0
}

.banner-nav a[href*="/login"]:hover {
  text-decoration: none
}

.banner-nav a[href*="/login"] b {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff
}

.banner-nav a[href*="/signup"] {
  border: solid 1px #97a9ba;
  background-color: #f3f5f7;
  padding: 5px 20px;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: Poppins,Helvetica,sans-serif;
  letter-spacing: 1.2;
  color: #183247
}

.banner-nav a[href*="/signup"]:after {
  content: '';
  padding-left: 0
}

.banner-nav a[href*="/signup"] b {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px
}

.banner-nav a[href*="/signup"]:hover {
  background-color: #e4e8ed;
  text-decoration: none
}

.banner-nav .banner-language-selector {
  background-color: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  border-radius: 0;
  border: 0;
  margin: 7px
}

.banner-nav .banner-language-selector .language-options {
  list-style: none;
  margin-left: 0px;
  margin: 0
}

.banner-nav .banner-language-selector .language-options .dropdown-toggle {
  font-size: 14px;
  color: #6f7c87
}

.banner-nav .banner-language-selector .language-options .dropdown-toggle .caret {
  border-top-color: #6f7c87
}

.banner-nav .banner-language-selector .language-options .dropdown-menu {
  background-color: #fff;
  min-width: 0px;
  right: -13px;
  top: 35px;
  text-align: left
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a {
  color: #183247;
  text-shadow: none;
  background: #fff;
  border: 0;
  font-size: 12px;
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif;
  text-transform: capitalize;
  font-weight: normal;
  letter-spacing: 0.2px;
  padding: 2px 20px
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a:hover {
  background-color: #f3f5f7
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a:after {
  content: ''
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a.active {
  font-weight: 500
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a .icon-dd-tick-dark {
  position: absolute;
  left: 2px
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a .ficon-eye-disabled {
  position: absolute;
  float: right;
  right: 0
}

.banner-nav .banner-language-selector .language-options .dropdown-menu a .ficon-eye-disabled:before {
  padding: 0 10px
}

.page-tabs {
  *zoom:1;background-color: #fff;
  color: #000;
  line-height: 35px;
  min-height: 17px;
  border-radius: 0;
  -moz-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
  -webkit-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
  box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
  border: 0 !important
}

.page-tabs:before,.page-tabs:after {
  display: table;
  content: ""
}

.page-tabs:after {
  clear: both
}

.page-tabs,.page-tabs .nav-link a {
  border: 1px solid rgba(0,0,0,0.2)
}

.page-tabs .nav-link {
  margin: -2px 0 0 0
}

.page-tabs .nav-link a {
  float: left;
  border-width: 0 1px 0 0;
  text-align: center;
  margin: 0 30px 0 0;
  padding: 6px;
  color: inherit;
  min-width: 80px;
  font-size: 14px;
  border: 0;
  min-width: 90px
}

.page-tabs .nav-link a:first-child {
  border-bottom-left-radius: 0
}

.page-tabs .nav-link a.active {
  text-decoration: none;
  background: transparent;
  border-top: 3px solid #02b875;
  padding: 3px 6px 6px 6px;
  font-weight: 600
}

.page-tabs .nav-link a:hover {
  text-decoration: none;
  background: transparent;
  border-top: 3px solid rgba(2,184,117,0.3);
  padding: 3px 6px 6px 6px;
  font-weight: 600
}

.page-tabs .mobile-icon-nav-menu:before {
  content: "";
  background-position: 0 -197px;
  height: 22px;
  width: 22px;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  vertical-align: text-top
}

.logo,.portal-logo {
  display: inline;
  float: left;
  margin: -3px 10px 0 -5px;
  text-align: center;
  width: auto
}

.portal-img {
  display: table-cell;
  vertical-align: middle;
  height: 50px
}

.portal-img * {
  vertical-align: middle
}

.footer {
  background-color: #183247;
  padding: 20px 30px;
  border: 0;
  color: #fff;
  *zoom:1;margin: 0;
  border-radius: 0
}

.footer:after {
  content: "";
  display: table;
  clear: both
}

.footer a {
  color: #fff;
  margin: 0 10px
}

.footer a:hover {
  color: inherit
}

.footer-links a {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1
}

.footer-links a:hover {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1
}

.footer-links a:before {
  content: "-";
  position: absolute;
  margin-left: -15px;
  opacity: 0.5
}

.footer-links a:first-child {
  margin: 0 10px 0 0
}

.footer-links a:first-child:before {
  content: none
}

.footer-links a:last-child {
  margin-right: 0
}

.copyright {
  padding: 8px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  letter-spacing: 0.2px;
  border-radius: 0;
  border: 0;
  background: #122534
}

.copyright a {
  color: rgba(255,255,255,0.5);
  padding-right: 4px
}

@media (min-width: 45em) {
  .footer-links .privacy-link {
      float:right;
      margin-left: 25px
  }

  .footer-links .cookie-link {
      float: right
  }

  .footer-links .cookie-link:before {
      content: ""
  }
}

@media (max-width: 45em) {
  .portal-img {
      display:block;
      height: auto
  }

  .portal-img img {
      max-width: 80%
  }

  .banner {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border: 0;
      box-shadow: none;
      text-align: center;
      display: table;
      width: 100%;
      padding: 0;
      border-bottom: 1px solid #DADFE3
  }

  .banner a {
      float: left
  }

  .banner .banner-wrapper {
      height: 143px;
      display: table-cell;
      vertical-align: middle
  }

  .banner .banner-language-selector {
      position: relative;
      top: 4px
  }

  .banner .banner-language-selector .dropdown-menu a {
      background-color: transparent;
      border: 0
  }

  .banner .banner-title,.banner .banner-nav {
      float: none;
      width: auto;
      margin-right: auto;
      text-align: center;
      width: 100%;
      display: block;
      clear: both;
      color: #183247
  }

  .banner .banner-title .heading {
      max-width: 275px;
      margin: 0 auto;
      float: left
  }

  .banner .banner-nav {
      margin-top: 11px;
      color: #fff
  }

  .banner .banner-nav .welcome {
      display: block;
      margin-bottom: 11px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      padding-top: 12px;
      padding-left: 10px;
      margin: 5px 0px
  }

  .banner .banner-nav a {
      border-radius: 4px;
      padding: 1px 10px;
      padding-bottom: 3px;
      border: 1px solid #DADFE3;
      margin-left: 7px;
      font-size: 12px
  }

  .banner .banner-nav a:after {
      content: '';
      padding: 0
  }

  .banner .banner-nav a[href*="/login"],.banner .banner-nav a[href*="/signup"] {
      padding: 5px 20px
  }

  .banner-language-selector {
      color: #fff
  }

  .page-tabs {
      padding: 0;
      text-align: right;
      cursor: pointer;
      position: relative;
      z-index: 2;
      border-width: 1px 0;
      -moz-box-shadow: 0 3px 4px 0 #eee;
      -webkit-box-shadow: 0 3px 4px 0 #eee;
      box-shadow: 0 3px 4px 0 #eee
  }

  .page-tabs,.page-tabs .nav-link a:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0
  }

  .page-tabs .mobile-icon-nav-menu {
      z-index: 3;
      padding: 6px;
      padding-left: 6px;
      display: inline-block
  }

  .page-tabs .mobile-icon-nav-menu:hover {
      text-decoration: none
  }

  .page-tabs .mobile-icon-nav-menu:before {
      display: inline-block;
      vertical-align: middle;
      *vertical-align: auto;
      *zoom:1;*display: inline;
      background: none;
      font-size: 20px;
      color: #6f7c87;
      content: "\f2ba"
  }

  .page-tabs .nav-link {
      display: none;
      margin-top: 10px;
      margin: 0;
      position: absolute;
      width: 100%;
      margin-top: 12px;
      -moz-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      -webkit-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      margin-left: -10px;
      background-color: #f3f5f7
  }

  .page-tabs .nav-link,.page-tabs .nav-link a.active,.page-tabs .nav-link a:hover {
      background-color: #fff
  }

  .page-tabs .nav-link a {
      float: none;
      font-weight: normal;
      border-width: 1px 0 0 0;
      display: block;
      min-width: auto;
      text-align: left;
      background: #f3f5f7;
      color: #183247;
      margin: 0;
      padding: 3px 16px;
      border-bottom: solid 1px rgba(24,50,71,0.17);
      font-size: 16px
  }

  .page-tabs .nav-link a:last-child {
      padding-bottom: 0
  }

  .page-tabs .nav-link a:hover,.page-tabs .nav-link a.active {
      padding: 3px 16px;
      background: #DADFE3;
      border-top: 0px
  }

  .logo,.portal-logo {
      display: block;
      float: none;
      margin: 0 auto;
      text-align: center
  }

  .footer {
      margin-top: 0;
      padding: 1em .5em
  }

  .footer a {
      padding-left: 10px;
      padding: 0 10px;
      margin-right: 4px;
      margin-left: 4px;
      line-height: 24px;
      display: inline-block;
      margin-bottom: 10px
  }

  .footer a,.footer a:hover {
      color: #183247
  }

  .footer .footer-links a {
      color: #fff
  }

  .footer-links {
      text-align: center
  }

  .footer-links a:before {
      content: none
  }
}

.help-center {
  z-index: 3;
  background-color: #f3f5f7;
  border: 0;
  color: #183247;
  *zoom:1;border-radius: 6px;
  border-bottom: 1px solid #DADFE3
}

.help-center:before,.help-center:after {
  display: table;
  content: ""
}

.help-center:after {
  clear: both
}

.help-center-sc {
  background-color: #fff;
  border: solid 1px #02b875;
  border-radius: 0;
  padding: 2px 0
}

.help-center-sc .hc-search {
  width: 50%;
  border-right: 0
}

.help-center-sc .hc-search .hc-search-input {
  width: 88%;
  float: right
}

.help-center-sc .hc-search .hc-search-input input.special {
  padding: 0 0 3px 0
}

.help-center-sc .hc-search .hc-search-button {
  position: absolute;
  width: 4%;
  float: left;
  margin-left: 32px
}

.help-center-sc .hc-search .hc-search-button .btn-primary {
  background-color: white
}

.help-center-sc .hc-nav {
  width: 50%;
  margin: 0;
  float: right
}

.help-center-sc .hc-nav .sub-nav {
  float: right
}

.help-center-sc .hc-nav .sub-nav div {
  float: left;
  clear: right;
  padding-left: 12px
}

.help-center-sc .hc-nav .sub-nav div a {
  margin-right: 15px
}

.help-center {
  padding: 15px 0 15px 20px;
  margin-bottom: 26px
}

.hc-search {
  position: relative
}

.hc-search h2 {
  margin-bottom: 20px
}

.help-center .hc-search-form {
  padding: 0;
  border-radius: 4px;
  width: 80%;
  background: transparent;
  padding: 0;
  border: 1px solid #DADFE3
}

.help-center .hc-search-form:focus-within {
  border: 1px solid #02B875;
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.hc-search-form {
  *zoom:1}

.hc-search-form:after {
  content: "";
  display: table;
  clear: both
}

.hc-search-form.active {
  -moz-box-shadow: #aaa 0 6px 10px;
  -webkit-box-shadow: #aaa 0 6px 10px;
  box-shadow: #aaa 0 6px 10px;
  border-radius: 6px 6px 0 0
}

.hc-search-input {
  position: relative
}

.hc-search-input input,.hc-search-button .btn {
  height: 40px
}

.hc-search-input input {
  width: 100%
}

.hc-search-button .btn {
  width: 100%;
  text-transform: uppercase;
  padding: 5px
}

.hc-nav nav {
  *zoom:1}

.hc-nav nav:before,.hc-nav nav:after {
  display: table;
  content: ""
}

.hc-nav nav:after {
  clear: both
}

.new-ticket,.check-status {
  font-weight: bold
}

.new-ticket,.check-status,.contact-info {
  padding: 3px 8px 3px 2px;
  float: left;
  margin-right: 15px
}

.new-ticket:before,.check-status:before,.contact-info:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  margin-right: 5px;
  border-radius: 2em;
  margin-top: -1px;
  background-color: #dbe1e7
}

.new-ticket:hover,.check-status:hover,.contact-info:hover {
  text-decoration: none
}

.mobile-icon-search:before {
  content: "";
  background-position: 0 -349px;
  height: 20px;
  width: 20px;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  vertical-align: text-top
}

.mobile-icon-nav-contact:before {
  content: "";
  background-position: 0 -153px;
  height: 22px;
  width: 22px;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  vertical-align: text-top
}

.mobile-icon-nav-newticket:before {
  content: "";
  background-position: 0 -241px;
  height: 22px;
  width: 22px;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  vertical-align: text-top
}

.mobile-icon-nav-status:before {
  content: "";
  background-position: 0 -285px;
  height: 22px;
  width: 22px;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  vertical-align: text-top
}

.hc-search-input {
  width: 90%;
  float: left
}

.hc-search-input input.special {
  padding: 6px 13px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  border: 0;
  color: #183247;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.hc-search-button {
  position: relative;
  width: 10%;
  float: left
}

.hc-search-button:focus {
  outline: 0;
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.hc-search-button .btn {
  background-color: #fff;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-image: none;
  border: 0;
  padding: 10px 16px 7px 0;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.hc-search-button .btn:hover {
  text-shadow: none;
  background-color: #fff
}

.hc-search-button .btn:focus {
  outline: 0;
  box-shadow: 0px 0px 5px rgba(2,184,117,0.6)
}

.hc-search-button .btn .hide-in-mobile {
  display: none;
  text-shadow: none
}

.hc-search-button .btn .hide-tablet {
  display: block
}

.hc-search-button .btn.btn-primary {
  border: 0;
  width: 100%;
  padding: 0;
  background-color: white
}

.hc-search-button .btn.btn-primary:hover {
  background-color: white
}

.hc-search {
  width: 68%;
  padding-right: 2%;
  border-right: 1px solid #dbe1e7
}

.hc-nav {
  display: block;
  width: 100%;
  margin: 12px 0 6px 0;
  padding: 0
}

.hc-nav a {
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline;
  font-size: 14px;
  color: #183247;
  font-weight: normal;
  padding: 6px 0;
  margin-right: 30px;
  background: none;
  border: 0;
  text-transform: capitalize
}

.hc-nav a span {
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom:1;*display: inline
}

.hc-nav a span:hover {
  color: #2753d7;
  text-decoration: underline
}

.hc-nav a[href*="/login"],.hc-nav a[href*="/signup"] {
  margin-right: 0;
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif;
  color: #2753d7;
  font-weight: 600;
  margin: 0 2px;
  letter-spacing: 0.5px
}

.hc-nav a[href*="/login"]:hover,.hc-nav a[href*="/signup"]:hover {
  background-color: transparent;
  color: #2753d7
}

.hc-search,.hc-nav {
  display: inline-block;
  vertical-align: middle;
  border: 0
}

.ui-state-focus {
  color: #183247
}

@media (max-width: 45em) {
  .help-center,.help-center-sc {
      border:0;
      padding: 0;
      background-color: transparent;
      position: absolute;
      width: 85%;
      margin: 0;
      z-index: 3;
      margin-top: -66px
  }

  .help-center .page,.help-center-sc .page {
      padding: 0
  }

  .help-center-sc {
      margin-left: 12px;
      margin-top: -56px
  }

  .hc-search {
      width: 57.83133%;
      float: left;
      margin-right: 1.20482%
  }

  .hc-nav {
      width: 40.96386%;
      float: right;
      margin-right: 0
  }

  .help-center .hc-search-form {
      background-color: transparent;
      border: 0;
      padding: 0;
      border-radius: 0px
  }

  .help-center .hc-search {
      position: absolute;
      border-right: 0;
      width: 50%;
      background-color: #f8f9fa;
      margin-top: 2px;
      border: 1px solid #ebeef0;
      border-radius: 4px
  }

  .help-center .hc-nav {
      float: right
  }

  .help-center .hc-search-input {
      width: 100%
  }

  .help-center .hc-search-input input {
      width: 100%;
      padding-right: 15px;
      border-radius: 0;
      background: transparent
  }

  .help-center .hc-search-button {
      width: 30px;
      position: absolute;
      right: 0px;
      top: 0;
      height: 40px
  }

  .help-center .hc-search-button .btn-primary {
      height: 40px;
      border: 0;
      margin: 0;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      background: transparent
  }

  .help-center .mobile-icon-search {
      display: none
  }

  .hc-search-button .btn {
      font-size: 12px
  }

  .onfocus-hide {
      opacity: 0;
      display: none
  }

  .onfocus-mobile-button {
      border-color: rgba(2,184,117,0.8);
      outline: 0;
      outline: thin dotted 9;
      -moz-box-shadow: inset 0 1px 1px rgba(2,184,117,0.075);
      -webkit-box-shadow: inset 0 1px 1px rgba(2,184,117,0.075);
      box-shadow: inset 0 1px 1px rgba(2,184,117,0.075)
  }

  .hc-search,.onfocus-mobile {
      -moz-transition: width .2s ease;
      -o-transition: width .2s ease;
      -webkit-transition: width .2s ease;
      transition: width .2s ease
  }

  .hc-nav {
      opacity: 1;
      -moz-transition: opacity 1s ease-in-out;
      -o-transition: opacity 1s ease-in-out;
      -webkit-transition: opacity 1s ease-in-out;
      transition: opacity 1s ease-in-out;
      width: 48%
  }

  .hc-nav nav span {
      display: none
  }

  .hc-nav nav a {
      text-align: center;
      padding: 0;
      width: 20%;
      display: inline-block;
      margin-right: 16px
  }

  .help-center-sc .hc-search {
      position: absolute;
      border-right: 0;
      width: 50%;
      background-color: #f8f9fa;
      margin-top: 2px;
      border: 1px solid #ebeef0;
      border-radius: 4px;
      margin: 0;
      padding: 0;
      margin-top: 2px
  }

  .help-center-sc .hc-search .hc-search-input {
      width: 95%
  }

  .help-center-sc .hc-search input {
      padding: 6px 12px;
      background: transparent
  }

  .help-center-sc .hc-search .hc-search-button {
      position: absolute;
      width: 20%;
      float: right;
      right: 0px;
      background: transparent
  }

  .help-center-sc .hc-search .hc-search-button .btn {
      padding: 10px 0 7px 0;
      background-color: #f8f9fa;
      padding: 0;
      padding-left: 0
  }

  .help-center-sc .hc-nav {
      width: 48%;
      margin: 0;
      float: right;
      margin-top: 10px
  }

  .help-center-sc .hc-nav .sub-nav {
      float: none
  }

  .help-center-sc .hc-nav .sub-nav div {
      padding-left: 6px;
      float: none
  }

  .onfocus-mobile {
      width: 95% !important
  }

  .ficon-create-ticket-new:before,.mobile-icon-nav-newticket.new-ticket:before,.ficon-ticket-status-new:before,.mobile-icon-nav-status.check-status:before {
      width: 20px
  }

  .new-ticket,.check-status,.contact-info {
      margin-right: 0
  }

  .new-ticket:before,.check-status:before,.contact-info:before {
      margin-right: 0px;
      border-radius: 0;
      margin-top: 0px;
      background-color: transparent
  }
}

@media (min-width: 721px) and (max-width: 960px) {
  .help-center-sc .hc-search {
      width:35%
  }

  .help-center-sc .hc-search .hc-search-input input.special {
      padding: 0 0px 3px 25px
  }

  .help-center-sc .hc-nav {
      width: 65%
  }

  .help-center-sc .hc-nav nav div {
      padding-left: 6px
  }
}

.attach-link-wrap {
  position: relative;
  cursor: pointer
}

.attach-link-wrap .attach-link-file,.attach-link-wrap input[type="file"] {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 26px;
  z-index: 99999;
  width: 100%;
  cursor: pointer
}

.attach-link-wrap .attach-link-file {
  width: 20px
}

.content,.content-form,.content-light {
  margin-top: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  padding: 10px 40px;
  background-color: #fff
}

.sidebar {
  background-color: #f8f9fa
}

.cs-s {
  border-top: 0
}

.cs-s h3 {
  font-size: 18px;
  border-bottom: solid 1px #02B875;
  border-top: 0;
  width: 100%
}

.cs-s h3 a {
  color: #9aa1a6
}

.cs-s h3 a:hover {
  color: #7f888e
}

.ellipsis a {
  font-size: 14px;
  line-height: 1.6
}

.fc-solution-category h2,.fc-discussion-category h2 {
  font-weight: 400;
  border-bottom: 1px solid #02B875
}

.fc-community-content .start-topic {
  margin-top: -25px
}

.fc-forum-list .list-lead {
  font-weight: 600
}

div#related_articles {
  margin-top: 20px
}

.see-more {
  font-size: 13px;
  color: #2753d7;
  padding-left: 30px
}

.help-text,.p-info,.info-text,.list-noinfo,.description-text {
  font-size: 12px;
  line-height: 1.9;
  color: #6f7c87
}

.item-count {
  font-size: 16px;
  color: #9aa1a6;
  font-weight: normal;
  font-family: Source Sans Pro,Helvetica,Arial,sans-serif
}

#topic-vote-up-button:nth-child(3):before {
  color: #183247
}

.p-content {
  background-color: #f8f9fa;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: solid 1px #DADFE3;
  padding: 10px 16px
}

.p-content hr {
  margin-left: -1em;
  margin-right: -1em
}

.p-content a {
  color: #2753d7
}

.p-content form a.btn {
  color: #183247
}

.comment-by-agent .p-content {
  background-color: #f8f9fa;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: solid 1px #DADFE3;
  padding: 10px 16px
}

.c-list {
  border-bottom: 1px solid #f3f3f3
}

.c-row {
  border-top: 1px solid #f3f3f3
}

.uv-row {
  border-bottom: 1px solid #f3f3f3
}

hr.content-divider {
  margin-left: -2em;
  margin-right: -2em
}

.fc-new-ticket {
  border-right: 1px solid #DADFE3
}

.fc-new-ticket h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 26px 0
}

.ticket-search h4 {
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0
}

.recaptcha_input_area input {
  height: auto
}

.fc-new-topic {
  border-right: 1px solid #DADFE3
}

.fc-new-topic h3 {
  margin: 20px 0
}

.fc-new-topic input {
  height: auto
}

.fc-new-topic .clearfix {
  display: none
}

.fc-new-topic #attachment-type {
  margin: 0;
  padding: 0
}

@media (max-width: 45em) {
  body {
      font-size:13px;
      line-height: 20.3125px
  }

  p {
      margin: 0 0 10.15625px
  }

  p small {
      font-size: 11px
  }

  .lead,.lead-small,.list-lead {
      line-height: 26.40625px
  }

  .lead-small {
      font-size: 14px
  }

  h1 {
      font-size: 26px;
      line-height: 40.625px
  }

  h1 small {
      font-size: 18px
  }

  h2 {
      font-size: 18px;
      line-height: 32.5px
  }

  h2 small {
      font-size: 16px
  }

  h3 {
      font-size: 18px;
      line-height: 28.4375px
  }

  h3 small {
      font-size: 13px
  }

  h4,h5,h6 {
      line-height: 20.3125px
  }

  h4 {
      font-size: 13px
  }

  h4 small {
      font-size: 11px
  }

  h5 {
      font-size: 11px
  }

  h6 {
      font-size: 10px
  }

  .page-header {
      padding-bottom: 19.3125px;
      margin: 20.3125px 0
  }

  ul,ol {
      padding: 0;
      margin: 0 0 10.15625px 15px
  }

  li {
      line-height: 20.3125px
  }

  dl {
      margin-bottom: 20.3125px
  }

  dt,dd {
      line-height: 20.3125px
  }

  dt {
      line-height: 19.3125px
  }

  dd {
      margin-left: 10.15625px
  }

  hr {
      margin: 15.625px 0
  }

  blockquote {
      margin: 0 0 20.3125px
  }

  blockquote p {
      font-size: 16px;
      font-weight: 300;
      line-height: 25.39063px
  }

  blockquote small {
      line-height: 20.3125px
  }

  .rounded-6 {
      border-radius: 0
  }

  .show-in-mobile,.hide-tablet {
      display: block
  }

  .hide-in-mobile {
      display: none
  }

  address {
      margin-bottom: 20.3125px;
      line-height: 20.3125px
  }

  .min-height-on-desktop {
      min-height: auto
  }

  .ui-datepicker.ui-widget-content {
      width: auto !important;
      left: 25px !important;
      right: 25px !important
  }

  .c-ticket-row .label {
      float: none
  }

  .agent-details {
      padding: 1em;
      margin-top: -1em;
      margin-left: -1em;
      margin-right: -1em;
      border-top-left-radius: none;
      border-top-right-radius: none
  }

  .ticket-brief {
      padding-top: 5px
  }

  .btn-signup,.btn-newticket,.btn-login {
      width: 100%
  }

  .btn-login {
      float: none;
      margin-top: 4px;
      margin-bottom: 4px
  }

  .login-form {
      max-width: none
  }

  .login-form button[type="submit"] {
      width: 100%;
      margin: 15px 0
  }

  .login-form button[type="button"] {
      width: 100%;
      margin-bottom: 10px
  }

  .alt-login-button {
      border-left: 0;
      padding-left: 0;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none
  }

  a.btn-signup {
      width: 100%
  }

  section#signup-container p.info-text {
      width: 100%
  }

  .alt-login-button {
      width: 100%;
      padding: 0;
      float: none;
      padding-top: 16px
  }

  .alt-login-button a.btn {
      display: inline-block;
      background-color: #fff;
      border: 1px solid #DADFE3;
      color: #183247;
      width: 30%;
      font-size: 13px;
      font-weight: normal;
      text-transform: none;
      padding: 22px 4px 22px;
      text-align: center;
      margin-right: 10px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.04);
      text-align: center
  }

  .alt-login-button a.btn:hover {
      color: #183247
  }

  .alt-login-button a.btn:last-child {
      margin-right: 0
  }

  .alt-login-button a.btn:before {
      display: block;
      padding-bottom: 8px;
      margin: 0 auto;
      width: 24px;
      height: 22px;
      font-size: 30px
  }

  .alt-login-button a.btn.btn-google {
      background-color: #fff
  }

  .alt-login-button a.btn.btn-google:before {
      color: #d34836
  }

  .alt-login-button a.btn.btn-twitter {
      background-color: #fff
  }

  .alt-login-button a.btn.btn-twitter:before {
      color: #24a9e6
  }

  .alt-login-button a.btn.btn-facebook {
      background-color: #fff
  }

  .alt-login-button a.btn.btn-facebook:before {
      color: #3b5998
  }

  .freshid_login .alt-login-button {
      min-height: auto
  }

  .ui-datepicker .ui-datepicker-header {
      padding: 0
  }

  .ui-datepicker .ui-datepicker-month,.ui-datepicker .ui-datepicker-year {
      height: auto
  }

  .show_results {
      color: #2753d7
  }

  .login-form,.alt-login-button {
      width: auto;
      float: none;
      border: 0;
      padding: 0
  }

  .page-stamp {
      display: none
  }

  .span1,.span2,.span3,.span4,.span5,.span6,.span7,.span8,.span9,.span10,.span11,.span12 {
      float: none;
      width: auto;
      margin-right: auto;
      display: block
  }

  .page {
      padding: 10px
  }

  .page.no-header-tabs {
      min-height: 66px
  }

  .label {
      border-radius: 3px
  }

  .modal {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      width: auto !important;
      margin-left: 0 !important
  }

  .modal.fade.in {
      top: 10px;
      margin-top: 0;
      border-top-left-radius: 6px
  }

  .modal-body {
      padding: 20px 20px 30px;
      height: auto;
      max-height: none
  }

  .modal-header h3 {
      min-height: 45px;
      line-height: 2.1em
  }

  .modal-header .close,.modal-header .close:focus,.modal-header .close:hover {
      left: auto;
      background: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      font-size: 18px;
      font-weight: bold;
      padding: 0;
      height: 50px;
      width: 50px;
      right: 0;
      top: 92%;
      left: 40%;
      background: #183247;
      border-radius: 50px;
      color: #fff
  }

  .modal-header .close:before {
      content: none;
      background: none;
      width: 0;
      height: 0
  }

  .modal-footer {
      padding-bottom: 50px
  }

  .modal-footer .btn:first-child {
      display: none
  }

  .modal-footer .btn.btn-primary {
      width: 100%
  }

  #export-modal .close {
      top: 96%
  }

  .modal-backdrop {
      background-color: rgba(24,50,71,0.5)
  }

  .pagination li:first-child a,.pagination li:last-child a,.pagination .active a .pagination li:first-child span,.pagination li:last-child span {
      display: block
  }

  .ellipsis {
      white-space: initial
  }

  .c-row .help-text {
      margin-left: 76px
  }

  .c-row.c-article-row .description-text,.c-row.c-article-row .help-text {
      margin-left: 36px;
      font-size: 13px
  }

  .c-row.c-ticket-row .description-text,.c-row.c-ticket-row .help-text {
      margin-left: 46px;
      font-size: 13px
  }

  input#post-submit-button {
      padding: 5px 10px
  }

  input[type="checkbox"]:before {
      top: 0px;
      left: -1px
  }

  .signup-wrapper {
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      width: 100% !important
  }

  .toolbar-actions {
      margin-top: 3px;
      margin-bottom: 15px
  }

  .toolbar-actions,.topic-list .topic-labels {
      float: none
  }

  #topic-toolbar .btn {
      padding-left: 10px;
      padding-right: 10px
  }

  .cs-s {
      margin: 0.5em 0
  }

  .cs-s h3 {
      border-top-width: 4px
  }

  .content,.content-form,.content-light {
      margin-top: 0;
      padding: 1em
  }

  .user-comment .user-pic-thumb {
      clear: right
  }

  hr.content-divider {
      margin-left: 0;
      margin-right: 0
  }

  .main,.sidebar {
      padding: 10px 16px !important
  }
}

@media (min-width: 45em) {
  .ui-datepicker.ui-datepicker-multi {
      width:auto
  }

  .ui-datepicker-multi .ui-datepicker-group {
      float: left
  }

  .ui-datepicker-multi .ui-datepicker-group table {
      width: 95%;
      margin: 0 auto .4em
  }

  .ui-datepicker-multi-2 .ui-datepicker-group {
      width: 50%
  }

  .ui-datepicker-multi-3 .ui-datepicker-group {
      width: 33.3%
  }

  .ui-datepicker-multi-4 .ui-datepicker-group {
      width: 25%
  }

  .ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header {
      border-left-width: 0
  }

  .ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {
      border-left-width: 0
  }

  .ui-datepicker-multi .ui-datepicker-buttonpane {
      clear: left
  }

  .ui-datepicker-row-break {
      clear: both;
      width: 100%;
      font-size: 0em
  }

  .cs-g {
      width: 48.14815%;
      float: left;
      margin-right: 3.7037%;
      width: 46%;
      margin-bottom: 10px;
      margin-right: 4.7037%;
      clear: left
  }

  .cs-g:nth-child(even) {
      width: 48.14815%;
      float: right;
      margin-right: 0;
      clear: right;
      width: 46%;
      margin-bottom: 10px;
      float: left
  }

  .cs-g-3 {
      width: 30%;
      float: left;
      margin-right: 5%
  }

  .cs-g-3:nth-child(3n+3) {
      width: 30%;
      float: right;
      margin-right: 0
  }

  .cs-g-3:nth-child(3n+1) {
      clear: left
  }
}

@media (max-width: 60em) {
  #new_topic .related-topics {
      overflow:scroll;
      height: 100%
  }

  #new_topic .title {
      padding: 10px 0 5px 0
  }

  #new_topic .topic-title {
      font-size: 14px
  }

  .modal {
      top: 12%;
      margin-top: 0
  }

  .modal.fade.in {
      top: 10%
  }

  .c-wrapper {
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      border-radius: 0;
      border: 0
  }

  .main,.sidebar {
      float: none;
      width: auto;
      margin-right: auto;
      border: 1px solid #DADFE3;
      -moz-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      -webkit-box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      box-shadow: 0 1px 2px 0 rgba(63,63,68,0.15);
      border-radius: 6px;
      background: #fff;
      padding: 16px 26px
  }

  .main {
      margin-bottom: 20px
  }

  .signup-wrapper {
      width: 80%
  }
}

@media (min-width: 721px) and (max-width: 960px) {
  #login-container {
      min-height:340px
  }

  .alt-login-button {
      float: left;
      margin-left: 30px
  }
}

@media (min-width: 60em) {
  .min-height-on-desktop {
      min-height:630px
  }

  .ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year {
      height: auto
  }

  .sidebar .cs-g {
      float: none;
      width: auto;
      margin-right: auto
  }

  .sidebar .cs-g-3 {
      float: none;
      width: auto;
      margin-right: auto
  }

  .sidebar .cs-g-3 a {
      font-size: 14px;
      font-weight: 400
  }

  .help-text a {
      font-size: 13px;
      font-weight: 400;
      color: #2753d7
  }
}

.bg-0 {
  background-color: #cdebc4;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-1 {
  background-color: #ffc2c6;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-2 {
  background-color: #eed8f7;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-3 {
  background-color: #ffd8c2;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-4 {
  background-color: #d1e4ff;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-5 {
  background-color: #dbd6f5;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-6 {
  background-color: #f3f1f1;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-7 {
  background-color: #ffc2c6;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-8 {
  background-color: #faea79;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

.bg-9 {
  background-color: #d1e4ff;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
  color: rgba(0,0,0,0.3)
}

div.avatar-text {
  color: #fff;
  text-transform: uppercase;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
  text-align: center
}

div.thumb {
  border-radius: 10%;
  width: 47px;
  height: 47px;
  line-height: 47px;
  font-size: 18px;
  font-weight: 200;
  color: #638699
}

div.medium {
  border-radius: 10%;
  width: 127px;
  height: 127px;
  line-height: 127px;
  font-size: 60px;
  font-weight: 100;
  text-align: right;
  padding: 25px 20px 0 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: rgba(255,255,255,0.6);
  text-shadow: 0 0 8px #fff
}

div.small {
  border-radius: 10%;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 400
}

.circle {
  border-radius: 50% !important
}

.circle img {
  border-radius: 50% !important
}

img.preview_pic {
  margin-left: 0
}

img.thumb {
  width: 40px;
  height: 40px
}

img.medium {
  width: 127px;
  height: 127px
}

img.small {
  width: 25px;
  height: 25px
}

#attachment-type {
  padding: 10px 12px 0px
}

#attachment-type .add_attachment {
  color: #1272de;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
  z-index: 2
}

#attachment-type a {
  color: #049cdb !important;
  cursor: pointer !important;
  text-decoration: none
}

#attachment-type .attachments-list-wrap {
  position: relative
}

#attachment-type .attachments-list-wrap .attachments-list-form {
  word-break: break-all
}

#attachment-type .attachments-list-wrap .attachments-list-form .item {
  font-size: 13px;
  color: #555
}

#attachment-type .attachments-list-wrap .attachments-list-form .item>span:first-child {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 175px;
  display: inline-block
}

#attachment-type .attachments-list-wrap .attachments-list-form .item .attachment-close {
  position: relative;
  top: -7px
}

#attachment-type .attachments-list-wrap .multiple-file-names-wrap {
  position: relative;
  box-sizing: border-box;
  padding-bottom: 10px;
  padding-right: 20px
}

#attachment-type .attachments-list-wrap .multiple-file-names-wrap .attachment-close {
  position: absolute;
  left: 0px;
  top: 0
}

#attachment-type .attachments-list-wrap .multiple-file-names-wrap .multiple-file-names {
  border-left: 1px #bbb solid;
  margin-left: 20px;
  padding: 0px 0px 0px 10px;
  font-size: 13px;
  color: #555
}

#attachment-type .hidden_upload input[type="file"] {
  cursor: pointer;
  height: 25px;
  opacity: 0;
  position: relative;
  right: 0;
  top: -30px;
  width: 120px;
  z-index: 10
}

#attachment-type .attachments-wrap .attachment-close::before {
  color: #666;
  content: "×";
  font-size: 20px;
  font-weight: bold
}

#attachment-type .attachments-wrap .attachment-close {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle
}

#attachment-type a {
  color: #000;
  text-decoration: none
}

#attachment-type .alert-text {
  color: red
}

#attachment-type .screenshot-wrapper-30 {
  padding-top: 5px
}

#attachment-type .dropdown-menu a {
  clear: both;
  color: #333 !important;
  display: block;
  font-weight: normal;
  line-height: 16px;
  padding: 3px 24px;
  white-space: nowrap
}

#attachment-type input[type="file"] {
  cursor: pointer;
  height: 26px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99999
}

.encrypted_text.encrypted-text-field {
  background-color: #FFF7EC
}

.encrypted {
  color: #F5A623
}

.encrypted-lock {
  color: #F5A623;
  float: left;
  padding: 4px 5px 0px 0px
}
`

export default stylesheet;