"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37664],{93271:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>l,data:()=>s});var o=i(3477);const n={},l=(0,i(54205).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[20]||(t[20]=(0,o.Lk)("h1",{id:"muller-licht-mli-404011-mli-404049",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#muller-licht-mli-404011-mli-404049"},[(0,o.Lk)("span",null,"Müller Licht MLI-404011/MLI-404049")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"MLI-404011/MLI-404049")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=M%C3%BCller%20Licht"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Müller Licht")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Tint remote control")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MLI-404011-MLI-404049.png",alt:"Müller Licht MLI-404011/MLI-404049"})])],-1))])]),t[21]||(t[21]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id="groups-binding" tabindex="-1"><a class="header-anchor" href="#groups-binding"><span>Groups binding</span></a></h3><p>This remote is able to deal with 4 ZigBee groups:</p><ul><li>group0 = All three leds lit (no support for <code>on</code>/<code>off</code> actions and scene activation)</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul>',6)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("You can direct bind each remote group with a different Zigbee group, however there is a caveat: the four Zigbee groups have to use ")),t[9]||(t[9]=(0,o.Lk)("strong",null,"consecutive group ids",-1)),t[10]||(t[10]=(0,o.eW)(". When setting up the binding you will only need to bind group0 to the remote (using the frontend or ")),(0,o.bF)(i,{to:"/guide/usage/binding.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("MQTT command")]))),_:1}),t[11]||(t[11]=(0,o.eW)("). The 3 consecutive groups will be bound to group1 to group3 automagically. Only the binding for group0 will be listed for the device within Zigbee2MQTT (")),t[12]||(t[12]=(0,o.Lk)("code",null,"genLevelCtrl",-1)),t[13]||(t[13]=(0,o.eW)(" and ")),t[14]||(t[14]=(0,o.Lk)("code",null,"lightingColorCtrl",-1)),t[15]||(t[15]=(0,o.eW)(" clusters)."))]),(0,o.Lk)("p",null,[t[17]||(t[17]=(0,o.eW)("This means that you probably should carefully ")),(0,o.bF)(i,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigadd_group"},{default:(0,o.k6)((()=>t[16]||(t[16]=[(0,o.eW)("define your groups id")]))),_:1}),t[18]||(t[18]=(0,o.eW)(" when creating them. When creating the binding you need to wake up the device. The most reliable way is to pull the battery, press any button to drain remaining power and insert it back right when sending the binding request to the remote. You do not need to bother with the default tint action groups (16388/16389/16390), they will be overwritten as soon as the binding was successful."))]),t[22]||(t[22]=(0,o.Lk)("p",null,"It is possible to bind to a device instead of a group. The device will be bound to group0. In this case, group0 to group3 will not be usable.",-1)),t[23]||(t[23]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[19]||(t[19]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[24]||(t[24]=(0,o.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6))])}]]),s=JSON.parse('{"path":"/devices/MLI-404011_MLI-404049.html","title":"Müller Licht MLI-404011/MLI-404049 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Müller Licht MLI-404011/MLI-404049 control via MQTT","description":"Integrate your Müller Licht MLI-404011/MLI-404049 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Groups binding","slug":"groups-binding","link":"#groups-binding","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725912129000},"filePathRelative":"devices/MLI-404011_MLI-404049.md"}')}}]);