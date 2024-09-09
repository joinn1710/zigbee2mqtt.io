"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3652],{17393:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>l,data:()=>r});var a=t(3477);const i={},l=(0,t(54205).A)(i,[["render",function(e,n){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[10]||(n[10]=(0,a.Lk)("h1",{id:"legrand-zlgp17-zlgp18",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#legrand-zlgp17-zlgp18"},[(0,a.Lk)("span",null,"Legrand ZLGP17/ZLGP18")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZLGP17/ZLGP18")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Legrand")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Wireless and batteryless (double) lighting control")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"action, linkquality")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZLGP17-ZLGP18.png",alt:"Legrand ZLGP17/ZLGP18"})])],-1))])]),n[11]||(n[11]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing-zlgp17" tabindex="-1"><a class="header-anchor" href="#pairing-zlgp17"><span>Pairing ZLGP17</span></a></h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the main button (up or down).</p><p>This device can work on any channel, not only 11. For this, please refer to the <a href="https://www.admin.legrandoc.com/files/documents/S000111963EN-00.pdf" target="_blank" rel="noopener noreferrer">Legrand ZLGP17 manual chapter 6.2</a>.</p><h3 id="pairing-zlgp18" tabindex="-1"><a class="header-anchor" href="#pairing-zlgp18"><span>Pairing ZLGP18</span></a></h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the button (up or down) on the first side, then do the same for the second side.</p><p>Note: each side of the device is treated as a single ZLGP17.</p><p>This device can work on any channel, not only 11. For this, please refer to the <a href="https://www.admin.legrandoc.com/files/documents/S000112516EN-00.pdf" target="_blank" rel="noopener noreferrer">Legrand ZLGP18 manual chapter 6.2</a>.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',12)),(0,a.Lk)("p",null,[n[8]||(n[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("OTA updates")]))),_:1}),n[9]||(n[9]=(0,a.eW)("."))]),n[12]||(n[12]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_once</code>, <code>press_twice</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5))])}]]),r=JSON.parse('{"path":"/devices/ZLGP17_ZLGP18.html","title":"Legrand ZLGP17/ZLGP18 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand ZLGP17/ZLGP18 control via MQTT","description":"Integrate your Legrand ZLGP17/ZLGP18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-02T18:14:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing ZLGP17","slug":"pairing-zlgp17","link":"#pairing-zlgp17","children":[]},{"level":3,"title":"Pairing ZLGP18","slug":"pairing-zlgp18","link":"#pairing-zlgp18","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725912129000},"filePathRelative":"devices/ZLGP17_ZLGP18.md"}')}}]);