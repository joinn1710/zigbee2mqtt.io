"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84072],{43737:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>s});var a=o(3477);const i={},n=(0,o(54205).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"sinope-th1300zb",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sinope-th1300zb"},[(0,a.Lk)("span",null,"Sinopé TH1300ZB")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TH1300ZB")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Sinopé")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee smart floor heating thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand, running_state), thermostat_occupancy, second_display_mode, thermostat_outdoor_temperature, outdoor_temperature_timeout, enable_outdoor_temperature, temperature_display_mode, time_format, backlight_auto_dim, keypad_lockout, power, current, voltage, energy, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TH1300ZB.png",alt:"Sinopé TH1300ZB"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the two buttons simultaneously for 3 seconds. The wireless icon will blink when searching for the Zigbee network and stay steady when paired to it. Repeat if unsuccessful.</p><h3 id="unpairing" tabindex="-1"><a class="header-anchor" href="#unpairing"><span>Unpairing</span></a></h3><p>Press the two buttons simultaneously for 10 seconds and release. The device will restart. The wireless icon will disappear from the display.</p><h3 id="the-following-thermostat-parameters-can-be-changed-through-mqtt" tabindex="-1"><a class="header-anchor" href="#the-following-thermostat-parameters-can-be-changed-through-mqtt"><span>The following thermostat parameters can be changed through MQTT</span></a></h3><h4 id="occupancy-unoccupancy" tabindex="-1"><a class="header-anchor" href="#occupancy-unoccupancy"><span>Occupancy / Unoccupancy</span></a></h4><p>The thermostat can be instructed to use the occupancy or unoccupancy setpoints by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_occupancy&quot;: &quot;OCCUPANCY&quot;}</code> where <code>OCCUPANCY</code> is one of the following values: <code>occupied</code>, <code>unoccupied</code>. The factory default value is <code>occupied</code>.</p><h4 id="floor-control-mode" tabindex="-1"><a class="header-anchor" href="#floor-control-mode"><span>Floor control mode</span></a></h4><p>The sensor used by the thermostat for temperature regulation can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_control_mode&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>ambiant</code>, <code>floor</code>. The factory default value is <code>floor</code>.</p><h4 id="ambient-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#ambient-maximum-heating-setpoint"><span>Ambient maximum heating setpoint</span></a></h4><p>The maximum ambient temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;ambiant_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-minimum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-minimum-heating-setpoint"><span>Floor minimum heating setpoint</span></a></h4><p>The minimum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_min_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-maximum-heating-setpoint"><span>Floor maximum heating setpoint</span></a></h4><p>The maximum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celsius). This feature is disabled by default.</p><h4 id="floor-temperature-sensor" tabindex="-1"><a class="header-anchor" href="#floor-temperature-sensor"><span>Floor temperature sensor</span></a></h4><p>The floor thermistor temperature sensor value connected to the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;temperature_sensor&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>10k</code>, <code>12k</code>. The factory default value is <code>10k</code>.</p><h4 id="display-backlight" tabindex="-1"><a class="header-anchor" href="#display-backlight"><span>Display backlight</span></a></h4><p>The thermostat display can be set to turn on only when a button is pressed or stay on and auto dim by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;backlight_auto_dim&quot;: &quot;BACKLIGHT&quot;}</code> where <code>BACKLIGHT</code> is one of the following values: <code>on demand</code>, <code>sensing</code>. The factory default value is <code>sensing</code>.</p><h4 id="time-to-display" tabindex="-1"><a class="header-anchor" href="#time-to-display"><span>Time to display</span></a></h4><p>The time clock value to display on the thermostat can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_time&quot;: &quot;TIME&quot;}</code> where <code>TIME</code> is the number of seconds since 2000-01-01 or empty. The Zigbee gateway local time will be used when publishing an empty value. By default, the time clock is not displayed.</p><h4 id="time-format-displayed" tabindex="-1"><a class="header-anchor" href="#time-format-displayed"><span>Time format displayed</span></a></h4><p>The time clock format on the thermostat display can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;time_format&quot;: &quot;FORMAT&quot;}</code> where <code>FORMAT</code> is one of the following values: <code>12h</code>, <code>24h</code>. The factory default value is <code>24h</code>.</p><h4 id="enable-outdoor-temperature-display" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-display"><span>Enable outdoor temperature display</span></a></h4><p>The display of outdoor temperature on the thermostat can be enabled / disabled by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;enable_outdoor_temperature&quot;: &quot;ENABLE&quot;}</code> where <code>ENABLE</code> is one of the following values: <code>on</code>, <code>off</code>. <code>on</code> value will set the outdoor temperature refresh timeout to 3 hours. <code>off</code> value will set the outdoor temperature refresh timeout to 30 seconds. When the refresh timeout is expired the thermostat setpoint temperature will be displayed. The outdoor temperature is not displayed by default.</p><h4 id="outdoor-temperature-to-display" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-to-display"><span>Outdoor temperature to display</span></a></h4><p>The outdoor temperature to display on the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_outdoor_temperature&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is between -100 to +100.</p><h3 id="the-following-status-are-reported-by-the-thermostat" tabindex="-1"><a class="header-anchor" href="#the-following-status-are-reported-by-the-thermostat"><span>The following status are reported by the thermostat</span></a></h3><h4 id="groud-fault-circuit-indicator-status-gfci" tabindex="-1"><a class="header-anchor" href="#groud-fault-circuit-indicator-status-gfci"><span>Groud fault circuit indicator status (GFCi)</span></a></h4><p>Turns <code>on</code> when the thermostat GFCi detects a ground fault. The status is reported to the device state as <code>gfci_status</code> every hour or when it changes. <code>gfci_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p><h4 id="floor-limit-status" tabindex="-1"><a class="header-anchor" href="#floor-limit-status"><span>Floor limit status</span></a></h4><p>This status is <code>on</code> when the floor temperature exceeds the maximum floor heating setpoint. It is reported to the device state as <code>floor_limit_status</code> every hour or when it changes. <code>floor_limit_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p><h3 id="activate-eco-mode" tabindex="-1"><a class="header-anchor" href="#activate-eco-mode"><span>Activate eco mode</span></a></h3><p>To set the eco_mode, you need to send the value to the following MQTT topic:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/1/set</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Different version of ecoMode exist :</p><ul><li><strong>ecoMode</strong> : off:-128, celsius*+-10, amount of setpoint reduction/increase for peak and pre-heating or 0 only for the eco icon to flash</li><li><strong>ecoMode1</strong> : 255=100%, range: 0-99 Set pi_heating_demand percentage limit 0% to 99% (225 = 100%)</li><li><strong>EcoMode2</strong> : off:255, range: 0-100, set heating restart if room temperature goes x% below setpoint</li></ul><p>If you want to enable the eco mode using Home Assistant, you may create an automation like this:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">&#39;activate_eco_mode&#39;</span></span>\n<span class="line">  <span class="token key atrule">alias</span><span class="token punctuation">:</span> Activate<span class="token punctuation">-</span>eco_mode</span>\n<span class="line">  <span class="token key atrule">description</span><span class="token punctuation">:</span> Do stuff for the eco mode</span>\n<span class="line">  <span class="token key atrule">trigger</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">condition</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">action</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">data</span><span class="token punctuation">:</span></span>\n<span class="line">      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&#39;{&quot;write&quot;:{&quot;cluster&quot;:&quot;manuSpecificSinope&quot;,&quot;options&quot;:{},&quot;payload&quot;:{&quot;ecoMode&quot;:&lt;VALUE&gt;}}}&#39;</span></span>\n<span class="line">      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/1/set</span>\n<span class="line">    <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',41)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>36</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of the thermostat. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="thermostat-occupancy-enum" tabindex="-1"><a class="header-anchor" href="#thermostat-occupancy-enum"><span>Thermostat occupancy (enum)</span></a></h3><p>Occupancy state of the thermostat. Value can be found in the published state on the <code>thermostat_occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_occupancy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_occupancy&quot;: NEW_VALUE}</code>. The possible values are: <code>unoccupied</code>, <code>occupied</code>.</p><h3 id="second-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#second-display-mode-enum"><span>Second display mode (enum)</span></a></h3><p>Displays the outdoor temperature and then returns to the set point in &quot;auto&quot; mode, or clears in &quot;outdoor temp&quot; mode when expired.. Value can be found in the published state on the <code>second_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;second_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;second_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>setpoint</code>, <code>outdoor temp</code>.</p><h3 id="thermostat-outdoor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#thermostat-outdoor-temperature-numeric"><span>Thermostat outdoor temperature (numeric)</span></a></h3><p>Outdoor temperature for the secondary display. Value can be found in the published state on the <code>thermostat_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-99.5</code> and the maximum value is <code>99.5</code>. The unit of this value is <code>°C</code>.</p><h3 id="outdoor-temperature-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-timeout-numeric"><span>Outdoor temperature timeout (numeric)</span></a></h3><p>Time in seconds after which the outdoor temperature is considered to have expired. Value can be found in the published state on the <code>outdoor_temperature_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>30</code> and the maximum value is <code>64800</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>15 min</code>, <code>30 min</code>, <code>1 hour</code>.</p><h3 id="enable-outdoor-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-binary"><span>Enable outdoor temperature (binary)</span></a></h3><p>DEPRECATED: Use second_display_mode or control via outdoor_temperature_timeout. Value can be found in the published state on the <code>enable_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable outdoor temperature is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="time-format-enum" tabindex="-1"><a class="header-anchor" href="#time-format-enum"><span>Time format (enum)</span></a></h3><p>The time format featured on the thermostat display. Value can be found in the published state on the <code>time_format</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_format&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_format&quot;: NEW_VALUE}</code>. The possible values are: <code>24h</code>, <code>12h</code>.</p><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum"><span>Backlight auto dim (enum)</span></a></h3><p>Control backlight dimming behavior. Value can be found in the published state on the <code>backlight_auto_dim</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_auto_dim&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on_demand</code>, <code>sensing</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables or disables the device’s buttons. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',33))])}]]),s=JSON.parse('{"path":"/devices/TH1300ZB.html","title":"Sinopé TH1300ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé TH1300ZB control via MQTT","description":"Integrate your Sinopé TH1300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-08T17:49:06.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Unpairing","slug":"unpairing","link":"#unpairing","children":[]},{"level":3,"title":"The following thermostat parameters can be changed through MQTT","slug":"the-following-thermostat-parameters-can-be-changed-through-mqtt","link":"#the-following-thermostat-parameters-can-be-changed-through-mqtt","children":[]},{"level":3,"title":"The following status are reported by the thermostat","slug":"the-following-status-are-reported-by-the-thermostat","link":"#the-following-status-are-reported-by-the-thermostat","children":[]},{"level":3,"title":"Activate eco mode","slug":"activate-eco-mode","link":"#activate-eco-mode","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Thermostat occupancy (enum)","slug":"thermostat-occupancy-enum","link":"#thermostat-occupancy-enum","children":[]},{"level":3,"title":"Second display mode (enum)","slug":"second-display-mode-enum","link":"#second-display-mode-enum","children":[]},{"level":3,"title":"Thermostat outdoor temperature (numeric)","slug":"thermostat-outdoor-temperature-numeric","link":"#thermostat-outdoor-temperature-numeric","children":[]},{"level":3,"title":"Outdoor temperature timeout (numeric)","slug":"outdoor-temperature-timeout-numeric","link":"#outdoor-temperature-timeout-numeric","children":[]},{"level":3,"title":"Enable outdoor temperature (binary)","slug":"enable-outdoor-temperature-binary","link":"#enable-outdoor-temperature-binary","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Time format (enum)","slug":"time-format-enum","link":"#time-format-enum","children":[]},{"level":3,"title":"Backlight auto dim (enum)","slug":"backlight-auto-dim-enum","link":"#backlight-auto-dim-enum","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725912129000},"filePathRelative":"devices/TH1300ZB.md"}')}}]);